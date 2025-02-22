import React from "react";
import Image from "next/image";

import logo from "@/app/favicon.ico";

import NavItems from "./NavItems";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mx-40 mt-4">
            <Image src={logo} width={40} height={40} alt="shoppy logo" />
            <NavItems />
        </div>
    );
};

export default Navbar;
