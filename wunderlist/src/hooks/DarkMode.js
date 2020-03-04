import { useEffect, useState } from "react";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useState(initialValue);

  useEffect(() => {
    const body = document.querySelector("body");

    if (darkMode) {
      return body.classList.add("dark-mode");
    } else {
      return body.classList.remove("dark-mode");
    }
  }, [darkMode, setDarkMode]);
  return [darkMode, setDarkMode];
};
