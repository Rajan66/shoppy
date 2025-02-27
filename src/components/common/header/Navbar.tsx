import Link from "next/link";
import Image from "next/image";

import { SearchIcon, UserIcon } from "lucide-react";

import NavItems from "./NavItems";
import ThemeToggle from "../ThemeToggle";
import CartIcon from "./CartIcon";
import MobileNav from "./MobileNav";

import logo from "@/app/favicon.ico";

const Navbar = () => {
    return (
        <header className="bg-foreground text-background p-4 sticky top-0 z-50">
            <nav className="flex justify-between items-center px-2 md:mx-14 tracking-wide">
                <div className="flex gap-10 items-center justify-center">
                    <Link href={"/"} className="flex gap-4 items-start justify-center">
                        <Image src={logo} width={40} height={40} alt="shoppy logo" />
                        <h2 className="text-2xl font-bold">Shoppy</h2>
                    </Link>
                    <div className="hidden md:block">
                        <NavItems />
                    </div>
                </div>
                <div className="sm:flex hidden gap-4 items-center ">
                    <SearchIcon />
                    <ThemeToggle />
                    <CartIcon />
                    <UserIcon />
                </div>
                <div className="block md:hidden">
                    <MobileNav />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
