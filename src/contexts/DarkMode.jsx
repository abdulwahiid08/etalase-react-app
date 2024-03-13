import { Children, createContext, useState } from "react";

const DarkModeContext = createContext(); // context nya

// Provider Context
const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext; // Export Context
export default DarkModeContextProvider; // Export Provider
