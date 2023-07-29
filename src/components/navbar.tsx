import Image from "next/image";
import React from "react";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  return (
    <div className="h-[72px] w-full bg-midnight-blue">
      <div className="grid-row-4 grid h-full w-[72px] place-items-center rounded-r-3xl bg-medium-purple">
        <div className="col-span-full row-span-3 row-start-4 h-full w-full rounded-br-3xl rounded-tl-3xl bg-light-purple"></div>
        <div className="col-span-full row-span-2 row-end-5 h-[26px] w-[28px]">
          <Image
            className="h-full w-full"
            src={"/assets/logo.svg"}
            alt="logo"
            width={0}
            height={0}
          />
        </div>
      </div>
      <ToggleTheme />
    </div>
  );
};

export default Navbar;
