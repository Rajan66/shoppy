import Image from "next/image";

import { SearchIcon, ShoppingBag, UserIcon } from "lucide-react";

import NavItems from "./NavItems";
import ThemeToggle from "../ThemeToggle";

import logo from "@/app/favicon.ico";
import CartIcon from "./CartIcon";
import Link from "next/link";

// TODO create sheet component for mobile and medium screens
const Navbar = () => {
    return (
        <header className="bg-foreground text-background p-4 sticky">
            <nav className="flex justify-between items-center mx-14 tracking-wide">
                <div className="flex gap-10 items-center justify-center">
                    <Link href={"/"} className="flex gap-4 items-start justify-center">
                        <Image src={logo} width={40} height={40} alt="shoppy logo" />
                        <h2 className="text-2xl font-bold">Shoppy</h2>
                    </Link>
                    <div>
                        <NavItems />
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <SearchIcon />
                    <ThemeToggle />
                    <CartIcon />
                    <UserIcon />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
