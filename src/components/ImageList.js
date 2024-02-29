"use client";

import Parallax from "@/utils/Parallax";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

const ImageList = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <button
        href="#last-image"
        onClick={() => lenis.scrollTo("#last-image", { lerp: 0.01 })}
        // lenis is the object returned from useLenis, and it has a method called scrollTo() that takes two arguments, the first is the id of the element you want to scroll to, and the second is the options object, here we set the lerp to 0.01 to make the scroll slower
        className="bg-white text-black capitalize p-4 font-semibold text-xl mt-16 hover:bg-white/90 block mx-auto"
      >
        scroll to anchor
      </button>
      <div className="p-16 xl:p-32 flex flex-col w-full items-center justify-center">
        <Parallax speed={1}>
          <Image
            src={"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt="Image"
            width={1000}
            height={400}
            priority
          />
        </Parallax>

        <Parallax speed={-2} className="overflow-hidden">
          <Image
            src={"https://picsum.photos/600/400?random=2"}
            alt="Image"
            width={600}
            height={400}
            priority
            sizes="50vw"
          />
        </Parallax>

        <Parallax speed={-1} className="self-center">
          <Image
            src={"https://picsum.photos/400/600?random=3"}
            alt="Image"
            width={400}
            height={600}
            sizes="50vw"
          />
        </Parallax>

        <Parallax speed={-1} className="self-start">
          <Image
            src={"https://picsum.photos/600/400?random=4"}
            alt="Image"
            width={600}
            height={400}
            sizes="50vw"
          />
        </Parallax>

        <Parallax speed={-2} className="self-end">
          <Image
            src={"https://picsum.photos/600/400?random=5"}
            alt="Image"
            width={600}
            height={400}
            sizes="50vw"
          />
        </Parallax>

        <Parallax speed={2} className="self-start">
          <Image
            src={"https://picsum.photos/600/400?random=6"}
            alt="Image"
            width={600}
            height={400}
            sizes="50vw"
          />
        </Parallax>

        <Parallax speed={-1} className="self-center">
          <Image
            src={"https://picsum.photos/400/600?random=7"}
            alt="Image"
            width={400}
            height={600}
            sizes="50vw"
          />
        </Parallax>

        <Parallax speed={1} className="self-end">
          <Image
            src={"https://picsum.photos/600/400?random=8"}
            alt="Image"
            width={600}
            height={400}
            sizes="50vw"
          />
        </Parallax>

        <Parallax speed={-12} className="self-start">
          <Image
            src={"https://picsum.photos/600/400?random=9"}
            alt="Image"
            width={600}
            height={400}
            sizes="50vw"
            id="last-image"
          />
        </Parallax>

        <Parallax speed={-1} className="self-center">
          <Image
            src={"https://picsum.photos/400/600?random=10"}
            alt="Image"
            width={400}
            height={600}
            sizes="50vw"
          />
        </Parallax>
      </div>
    </>
  );
};

export default ImageList;
