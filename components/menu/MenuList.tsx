import { getFoodsByCategory } from "@/utils/serverActions";
import MenuCard from "./MenuCard";
import { menuItemsLocal } from "@/constants";

const MenuList = async ({
  query,
  selectedCategory,
}: {
  query: string;
  selectedCategory: string;
}) => {
  const menuData = await getFoodsByCategory(selectedCategory);
  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // Usamos el array que venga, ya sea de la DB o hardcoded
  const foods = Array.isArray(menuData.foods) ? menuData.foods : [];

  const filteredMenuItems = foods
  .filter((item) => item.category === selectedCategory)
  .filter((item) =>
    normalizeString(item.title)
      .toLowerCase()
      .includes(normalizeString(query).toLowerCase())
  );

  return (
    <>
      {"error" in menuData && menuData.fallback && (
        <div className="w-full col-span-full flex items-center">
          <p className="w-fit text-center text-yellow-500 font-semibold px-6 py-4">
            Error al cargar productos desde la base de datos. Mostrando menú precargado.
          </p>
        </div>
      )}

      {filteredMenuItems.length === 0 ? (
        <div className="w-full col-span-full flex items-center">
          <p className="w-fit text-center text-xl font-semibold text-quinto px-6 py-4">
            No se encontraron productos
          </p>
        </div>
      ) : (
        filteredMenuItems.map((item) => (
          <MenuCard item={item} key={item.id} />
        ))
      )}
    </>
  );
};

export default MenuList;
