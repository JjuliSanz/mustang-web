import { Gallery, MenuItem } from "../types/types";

export const gallery: Gallery[] = [
  {
    id: 1,
    name: "comida-1",
    url: "/comida/comida-1.jpeg",
  },
  {
    id: 2,
    name: "comida-2",
    url: "/comida/comida-2.jpeg",
  },
  {
    id: 3,
    name: "entrada",
    url: "/comida/entrada.jpeg",
  },
  {
    id: 4,
    name: "vibe-11",
    url: "/vibe/vibe-11.jpeg",
  },
  {
    id: 5,
    name: "vibe-9",
    url: "/vibe/vibe-9.jpeg",
  },
  {
    id: 6,
    name: "burrata",
    url: "/comida/burrata.jpeg",
  },
  {
    id: 7,
    name: "caipirinha",
    url: "/comida/caipirinha.jpeg",
  },
  {
    id: 8,
    name: "vibe-3",
    url: "/vibe/vibe-3.jpeg",
  },
  {
    id: 9,
    name: "vibe-2",
    url: "/vibe/vibe-2.jpeg",
  },
  {
    id: 10,
    name: "halloumi",
    url: "/comida/halloumi.jpeg",
  },
  {
    id: 11,
    name: "vibe-8",
    url: "/vibe/vibe-8.jpeg",
  },

  {
    id: 12,
    name: "bunuelitos",
    url: "/comida/bunuelitos.jpeg",
  },
  {
    id: 13,
    name: "wisky",
    url: "/comida/wisky.jpeg",
  },
  {
    id: 14,
    name: "cafe",
    url: "/comida/cafe.jpeg",
  },
  {
    id: 15,
    name: "pollo",
    url: "/comida/pollo.jpeg",
  },
  {
    id: 16,
    name: "vibe-5",
    url: "/vibe/vibe-5.jpeg",
  },
  {
    id: 17,
    name: "flan",
    url: "/comida/flan.jpeg",
  },
  {
    id: 18,
    name: "royal-burguer",
    url: "/comida/royal-burger.jpeg",
  },
];

export const menuItemsLocal: MenuItem[] = [
  // ENTRADAS
  {
    id: "cm3u496hg0001wwow27e7664z",
    orden: 1,
    title: "Burrata",
    description: "Burrata, rucula, pesto, cherry, jamon, chutney y pralinee",
    price: "22.000",
    image: "/comida/burrata.jpeg",
    category: "Entradas"
  },
  {
    id: "cm3u4bdec0005wwowms8kawi3",
    orden: 2,
    title: "Halloumi a la chapa",
    description: "Queso Halloumi, vegetales encurtidos y ensalada fresca con crocante de trigo sarraceno",
    price: "9.500",
    image: "/comida/halloumi.jpeg",
    category: "Entradas"
  },
  {
    id: "cm3u4a11k0003wwowvjr0xy5o",
    orden: 3,
    title: "Buñuelitos",
    description: "Buñuelos de acelga con alioli",
    price: "5.500",
    image: "/comida/bunuelitos.jpeg",
    category: "Entradas"
  },
  {
    id: "cm3u5nl8a000111m5pmu1w7ys",
    orden: 4,
    title: "Tabla Mustang (Para 2 personas)",
    description: "Selección de quesos y fiambres de nuestra charcutería.",
    price: "24.000",
    image: "/comida/tabla.jpeg",
    category: "Entradas"
  },
  {
    id: "cm3u67y80000111x8ghecdd5r",
    orden: 5,
    title: "Pan de campo",
    description: "Manteca, sal marina y aceite de oliva",
    price: "2.000",
    image: "/comida/pan.jpeg",
    category: "Entradas"
  },
  {
    id: "cm3u6dmuw000311x8q3x9ocxr",
    orden: 6,
    title: "Provoleta",
    description: "Provoleta con rúcula selvática, chutney de tomates",
    price: "10.500",
    image: "/comida/provoleta.jpeg",
    category: "Entradas"
  },
  {
    id: "cm3u6nuld00011kymgk4rrw9q",
    orden: 7,
    title: "Matrimonio",
    description: "Chorizo puro cerdo + Morcilla + Criolla + Chimichurri + Pan",
    price: "8.500",
    image: "/comida/matrimonio.jpeg",
    category: "Entradas"
  },
  // PARRILLA
  {
    id: "cm3u71fmj0001oj6l15gwhpyn",
    orden: 1,
    title: "Ojo de Bife Black Angus",
    description: "",
    price: "26.000",
    image: "/comida/ojo-bife.jpeg",
    category: "Parrilla"
  },
  {
    id: "cm3u73ld40001gl0c5q7lv1nn",
    orden: 2,
    title: "Ojo de Bife con Hueso",
    description: "",
    price: "28.000",
    image: "/comida/ojo-bife-hueso.jpeg",
    category: "Parrilla"
  },
  {
    id: "cm3u7491q0003gl0clxbo1rbb",
    orden: 3,
    title: "Entraña",
    description: "",
    price: "26.000",
    image: "/comida/entraña.jpeg",
    category: "Parrilla"
  },
  {
    id: "cm3u751e80005gl0cdq9hp9tx",
    orden: 4,
    title: "Medio Pollo de Campo (deshuesado al limón)",
    description: "",
    price: "17.000",
    image: "/comida/pollo.jpeg",
    category: "Parrilla"
  },
  {
    id: "cm3u7bib10003oj6lt2fnxnad",
    orden: 5,
    title: "Grilled Salmón",
    description: "Salmón a la parrilla con paltas asadas y gremolata de limón",
    price: "28.000",
    image: "/comida/salmon.jpeg",
    category: "Parrilla"
  },
  {
    id: "cm3u7hzvv0005oj6lylm0s6ty",
    orden: 6,
    title: "Bife de chorizo",
    description: "",
    price: "26.000",
    image: "/comida/bife-chorizo.jpg",
    category: "Parrilla"
  },
  {
    id: "cm3u7je7b0007oj6liokcchq2",
    orden: 7,
    title: "Barbecue Ribs",
    description: "Costillas de cerdo con salsa bbq, coleslaw y papas fritas",
    price: "25.000",
    image: "/comida/barbecue.jpeg",
    category: "Parrilla"
  },
  // BURGERS
  {
    id: "cm3u7kba30007gl0ckl1sqwu3",
    orden: 1,
    title: "Royal Burger",
    description: "Doble hamburguesa smash, queso cheddar, panceta, cebolla morada en brunoise, pepinillos, mostaza, ketchup y papas fritas",
    price: "16.000",
    image: "/comida/royal-burger.jpeg",
    category: ""
  },
  {
    id: "cm3u7lzvb0009gl0ckt9nn1zu",
    orden: 2,
    title: "California Burger",
    description: "Doble  hamburguesa smashed, queso cheddar, lechuga, tomate, cebolla, salsa secreta y papas fritas",
    price: "16.000",
    image: "/comida/burgers.jpeg",
    category: "Burguers"
  },
  {
    id: "cm3u7t8md0009oj6lfhtub1eo",
    orden: 3,
    title: "Blue Cheese Burger",
    description: "Doble hamburguesa smash, queso azul, rúcula, cebolla, mostaza y papas fritas",
    price: "16.000",
    image: "/comida/burgers.jpeg",
    category: "Burguers"
  },
  {
    id: "cm3u7ul36000boj6lxcuir86m",
    orden: 4,
    title: "Chicago Burger",
    description: "Hamburguesa smash con queso cheddar, panceta laqueada, huevo frito, ciboulette y papas fritas",
    price: "16.000",
    image: "/comida/chicago-burger.jpeg",
    category: "Burguers"
  },
  // ACOMPAÑAMIENTOS
  {
    id: "cm3u82xca000110k5vfgerhke",
    orden: 1,
    title: "Pure de Boniato",
    description: "Hamburguesa smash con queso cheddar, panceta laqueada, huevo frito, ciboulette y papas fritas",
    price: "6.000",
    image: "/comida/pure.jpeg",
    category: "Acompañamientos"
  },
  {
    id: "cm3u95c5g0001tybqja6lru07",
    orden: 2,
    title: "Pure Vasco",
    description: "Pure de Papa, con Huevo Frito y Cebolla Crispy",
    price: "6.000",
    image: "/comida/pure-vasco.jpeg",
    category: "Acompañamientos"
  },
  {
    id: "cm3u97bx30003tybqvqf88h9m",
    orden: 3,
    title: "Papas Fritas",
    description: "",
    price: "6.000",
    image: "/comida/papas.jpeg",
    category: "Acompañamientos"
  },
  {
    id: "cm3u9bwuk0005tybqu41dqo5h",
    orden: 4,
    title: "Vegetales Grillados",
    description: "Hamburguesa smash con queso cheddar, panceta laqueada, huevo frito, ciboulette y papas fritas",
    price: "5.000",
    image: "/comida/verduras.jpeg",
    category: "Acompañamientos"
  },
  {
    id: "cm3u9ddmi0007tybq613ak74x",
    orden: 5,
    title: "Chicken Caesar Salad",
    description: "Pollo grillado, mix de verdes, croutons y caesar dressing",
    price: "16.000",
    image: "/comida/chicken-salad.jpeg",
    category: "Acompañamientos"
  },
  {
    id: "cm3u9e8bt0009tybqyb54dfn2",
    orden: 6,
    title: "Quinoa Salad",
    description: "Quinoa roja, hummus, perejíl, tomate, pickles de pepino, huevo, almendras, rúcula y dressing de limón",
    price: "15.000",
    image: "/comida/salad.jpeg",
    category: "Acompañamientos"
  },
  {
    id: "cm3ua1bf6000btybq1u9odtjx",
    orden: 7,
    title: "Honey Mustard Salad",
    description: "Mix de verdes, tomate cherry, zanahoria, repollo, manzana verde y honey mustard dressing",
    price: "15.000",
    image: "/comida/honey-salad.jpeg",
    category: "Acompañamientos"
  },
]

export const categoriesLocal = [
  { id: "1", title: "Entradas", orden: 1 },
  { id: "2", title: "Parrilla", orden: 2 },
  { id: "3", title: "Burguers", orden: 3 },
  { id: "4", title: "Acompañamientos", orden: 4 },
];