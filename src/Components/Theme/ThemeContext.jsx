import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(
      localStorage.getItem('darkMode')
    ) ?? true;
  });

  useEffect(() => {
    localStorage.setItem(
      'darkMode',
      JSON.stringify(darkMode)
    );

    document.body.className = darkMode
      ? 'dark'
      : 'light';
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};