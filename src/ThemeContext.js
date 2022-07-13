import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
