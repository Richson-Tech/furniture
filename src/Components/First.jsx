import Image from "next/image";
import React from "react";
import { CgShapeHalfCircle } from "react-icons/cg";

const First = () => {
  return (
    <div className="h-max w-full pb-32">
      <div className="flex flex-col pb-0">
        <Image
          src="/1.jpg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Berlin Studio Apartment</h2>
          <p className="text-xs pt-2">INTERIOR, PICKS</p>
        </div>
        <Image
          src="/one.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Natural Tones Interior</h2>
          <p className="text-xs pt-2">INTERIOR, PICKS</p>
        </div>
        <Image
          src="/two.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">20Sq Micro Apartment</h2>
          <p className="text-xs pt-2">INTERIOR, PICKS</p>
        </div>
        <Image
          src="/three.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">House on Banks of Aare</h2>
          <p className="text-xs pt-2">INTERIOR, PICKS</p>
        </div>
        <Image
          src="/four.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Cottage House on Apex Hill</h2>
          <p className="text-xs pt-2">INTERIOR, PICKS</p>
        </div>
        {/* the hash picture  */}
        <Image
          src="/hash.jpeg"
          alt="furnitures"
          width={1300}
          height={854}
          className="mt-20"
        />
        <div className="pl-5 mt-5">
          <p className="text-xs pt-2 font-sans">IGEORGIA LONGDENBERG</p>
          <h2 className="text-4xl font-[Actor] pt-2 font-semibold">
            Decontextualizing interior décor for the emerging decade & beyond.
          </h2>
        </div>
        <div className="flex flex-row pl-3 mt-3 space-x-0">
          <CgShapeHalfCircle className="text-black" size={30} />
          <p className="font-[Roboto] text-xl underline">View More</p>
        </div>
        {/* after view more section */}
        <Image
          src="/five.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Miami Mainson Apartment</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/six.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Obsidian Virtual Concept</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/seven.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Office of Tangible Space</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/2.jpg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">The Moscow Apartment</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/3.jpg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Office of Tangible Space</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/seven.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Office of Tangible Space</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/seven.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Office of Tangible Space</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/seven.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Office of Tangible Space</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/seven.jpeg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Office of Tangible Space</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
      </div>
    </div>
  );
};

export default First;
