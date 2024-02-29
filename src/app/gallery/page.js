import ImageList from "@/components/ImageList";
import React from "react";

const Gallery = () => {
  return (
    <main>
      <h1 className="font-medium text-4xl border border-solid border-white p-4 mx-auto mt-20 w-fit">
        Smooth Scolling Using Lenis
      </h1>
      <ImageList />
    </main>
  );
};

export default Gallery;
