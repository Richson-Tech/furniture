import Image from "next/image";
import React from "react";

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

              
      </div>
    </div>
  );
};

export default First;
