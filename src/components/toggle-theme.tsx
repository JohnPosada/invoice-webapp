"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Image src={"/assets/icon-sun.svg"} alt="sun" width={20} height={20} />
      ) : (
        <Image
          src={"/assets/icon-moon.svg"}
          alt="moon"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default ToggleTheme;
