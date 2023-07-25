import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  background-color: var(--navbar-bg-color, #333);
  color: var(--navbar-text-color, #fff);
  padding: 1rem;
  border-bottom: 0.1rem solid var(--border-color);
`;

interface CustomNavbarProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ children }) => {
  return <NavbarWrapper>{children}</NavbarWrapper>;
};

export default CustomNavbar;
