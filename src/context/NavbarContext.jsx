import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <NavbarContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext); 