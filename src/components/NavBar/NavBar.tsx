import React from "react";
import Image from "next/image";
import UbiquitiLogo from "../../icons/ubiquiti-logo.png";

function NavBar() {
  return (
    <nav className="flex justify-between items-center text-neutral-600 background-color--light">
      <div className="flex flex-row items-center">
        <Image
          className="mr-4"
          height={55}
          src={UbiquitiLogo}
          alt="Ubiquiti Logo"
        />
        <div>Devices</div>
      </div>
      <div className="justify-self-end pr-8">Scott Cook</div>
    </nav>
  );
}

export default NavBar;
