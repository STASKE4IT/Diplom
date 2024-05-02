import { colors } from "./colors";

export const theme = {
  colors: { ...colors },
};
export const lightTheme = {
  colors: {
    bgc: "lightGray",
    elemsBgc: "white",
    borderColor: "gray",
    btnBgc: "rgb(40, 147, 26)",
    btnTextColor: "white",
    activeBtnBgc: "rgb(2, 170, 47)",
    spanColor: "rgb(2, 164, 13)",
    pColor: "black",
    titleColor: "black",
    hoverElemShadow: "black",
    ultimateColor: "black",
  },
};

export const darkTheme = {
  colors: {
    bgc: "black",
    elemsBgc: "white",
    borderColor: "lightGray",
    btnBgc: "rgb(126, 42, 0)",
    btnTextColor: "rgb(242, 241, 241)",
    activeBtnBgc: "rgb(199, 68, 2)",
    spanColor: "rgb(0, 126, 8)",
    pColor: "rgb(126, 90, 0)",
    titleColor: "rgb(0, 126, 8)",
    hoverElemShadow: "rgb(10, 255, 2)",
    ultimateColor: "black",
  },
};
export type Theme = typeof theme;
