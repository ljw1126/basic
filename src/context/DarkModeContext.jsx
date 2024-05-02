import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({children}) { // props.children 구조 할당
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}