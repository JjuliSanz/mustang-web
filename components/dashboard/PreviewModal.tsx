"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/types/types";

interface PreviewModalProps {
  selectedItem: MenuItem;
}

export const PreviewModal = ({ selectedItem }: PreviewModalProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreviewOpen = () => {
    setIsPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
  };

  return (
    <>
      <button
        onClick={handlePreviewOpen}
        className="text-quinto px-2 py-1 w-fit text-sm font-medium text-start rounded border-2 border-quinto hover:scale-95 transition duration-300 ease-in-out hover:text-segundo hover:bg-quinto active:scale-95 active:text-segundo active:bg-quinto"
      >
        PREVIEW
      </button>
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-0"
          onClick={handlePreviewClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[400px] h-[350px] flex flex-col text-center gap-3 p-2 rounded-2xl relative bg-segundo box-shadow-quinto-xs"
          >
            {selectedItem.image ? (
              <div className="box-shadow-quinto-xs mx-auto object-cover rounded-full w-[170px] min-w-[170px] h-[170px] min-h-[170px]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            ) : (
              <div className="relative w-full h-[170px] bg-segundo rounded-full"></div>
            )}

            <div className="w-full h-full flex flex-col justify-between text-quinto shadow-quinto-sm font-semibold">
              <div className="w-full flex flex-col gap-1">
                {/* TITLE */}
                <h3 className="text-lg 450:text-base 600:text-lg md:text-base lg:text-xl uppercase underline">
                  {selectedItem.title}
                </h3>
                {/* INGREDIENTS */}
                <p className="text-base 450:text-sm 600:text-base md:text-sm lg:text-lg lowercase ">
                  {selectedItem.description}
                </p>
              </div>
              {/* PRICE */}
              <span className="text-base 450:text-sm 600:text-base md:text-sm lg:text-lg text-center lg:text-end">
                ${selectedItem.price}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
