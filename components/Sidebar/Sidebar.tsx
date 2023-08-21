"use client";

import React, { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "../Box/Box";
import SidebarItem from './SidebarItem';
import Library from '../Library/Library';

interface ISidebarProps {
	children: React.ReactNode;
}

const Sidebar: FC<ISidebarProps> = ({ children }) => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: "Home",
				active: pathname !== "/search",
				href: "/",
			},
			{
				icon: BiSearch,
				label: "Search",
				active: pathname === "/search",
				href: "/search",
			},
		],
		[pathname]
	);

	return (
		<div className="flex h-full">
			<div
				className="
			hidden
			md:flex
			flex-col
			gap-y-2
			bg-black
			h-full
			w-[300px]
			p-2
		 "
			>
				<Box className='flex flex-col gap-y-4 px-5 py-4'>
					{routes.map(item => (
						<SidebarItem key={item.label} {...item} />
					))}
				</Box>
				<Box className='overflow-i-auto h-full'><Library /></Box>
			</div>
			<main className='h-full flex-1 overflow-y-auto py-2'>
				{children}
			</main>
		</div>
	);
};

export default Sidebar;
