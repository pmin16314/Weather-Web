import React, { useState } from "react";
const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }
};

export const ThemeProvider = ({ getInitialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);
  };
};
