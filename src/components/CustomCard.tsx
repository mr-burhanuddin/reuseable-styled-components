import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: var(--card-bg-color, #f9f9f9);
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.25rem var(--box-shadow-color);
  color: var(--card-text-color, #000);
  border: 0.1rem solid var(--border-color);
`;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({ children, ...props }) => {
  return <CardWrapper {...props}>{children}</CardWrapper>;
};

export default CustomCard;
