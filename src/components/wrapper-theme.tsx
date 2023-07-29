"use client";

import { ThemeProvider } from "next-themes";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const WrapperTheme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
};

export default WrapperTheme;
