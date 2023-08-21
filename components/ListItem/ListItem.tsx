"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ILIstItemProps {
  name: string;
  image: string;
  href: string;
}

const ListItem: FC<ILIstItemProps> = ({ name, image, href }) => {
  const router = useRouter();

  const handleOnClick = () => router.push(href);

  return (
    <button
      className="
	 relative 
	 flex 
	 group 
	 items-center 
	 rounded-md 
	 overflow-hidden 
	 bg-neutral-100/10 
	 gap-x-4 
	 hover:bg-neutral-100/20 
	 transition 
	 pr-4"
      onClick={handleOnClick}
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt="image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div
        className="
		absolute 
		transition 
		opacity-0 
		rounded-full 
		flex 
		items-center 
		justify-center 
		bg-green-500 
		p-4 
		drop-shadow-md 
		right-5 
		group-hover:opacity-100 
		hover:scale-110
		"
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
