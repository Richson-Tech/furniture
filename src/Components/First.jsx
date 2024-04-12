import Image from "next/image";
import React from "react";
import { CgShapeHalfCircle } from "react-icons/cg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";

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
          <h2 className="text-2xl font-[Roboto]">Cozy Studio Apartment</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/4.jpg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">A Minimalist Home</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/5.jpg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">Emerging Beauty Brands</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/6.jpg"
          alt="furnitures"
          width={435}
          height={295}
          className="object-center object-cover p-5"
        />
        <div className="pl-5">
          <h2 className="text-2xl font-[Roboto]">New Modern Workspace</h2>
          <p className="text-xs pt-2">DESIGN INTERIOR</p>
        </div>
        <Image
          src="/hash.jpeg"
          alt="furnitures"
          width={1300}
          height={854}
          className="mt-20"
        />
        <div className="pl-5 pr-4 mt-10">
          <h2 className="text-3xl text-center font-[Actor] pt-2 font-semibold">
            Subscribe to Newsletter
          </h2>
          <div className="flex items-center border-b-2 mt-5 border-black py-2 pr-5">
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none flex-1"
            />
            <AiOutlineArrowRight className="text-black cursor-pointer" />
          </div>
        </div>

        {/* find store  */}
        <div className="flex mt-5 ml-5 mr-5 mb-10 border-2 border-black items-center justify-between p-4 rounded-lg">
          <div>
            <p className="text-lg font-medium font-serif">
              Find a store <br /> nearby
            </p>
            <p className="text-sm text-gray-600">Search for a store near you</p>
          </div>
          <div>
            <MdArrowOutward className="text-gray-600" size={30} />
          </div>
        </div>

        {/* logo part  */}
        <div className="flex flex-col pl-4 mt-5">
          <h6 className="text-black font-[Actor]">LOTRADE</h6>
          <p className="text-base pr-3 font-extralight mt-5">
            Welcome to a place of refinement and beauty. This is Umeå, a WP gem
            we made for all furniture stores & brands.
          </p>
          <h6 className="text-black font-[Actor] mt-5">FB. TW. IN. BE. DR.</h6>
          <h6 className="text-black font-[Actor] mt-5">Studio</h6>
          <p className="text-base pr-3 font-extralight mt-2">Visit our Store</p>
          <p className="text-base pr-3 font-extralight mt-2">About Us</p>
          <p className="text-base pr-3 font-extralight mt-2"> Our Blog</p>
          <p className="text-base pr-3 font-extralight mt-2"> Craftsmanship </p>
          <p className="text-base pr-3 font-extralight mt-2">Apply For a Job</p>
        </div>
      </div>
    </div>
  );
};

export default First;
