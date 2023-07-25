import * as React from "react";
import styled from "styled-components";
import { HTMLAttributes } from "react";

const ButtonWrapper = styled.button`
  background: var(--custombtn-bg-color, #007bff);
  color: var(--custombtn-text-color, #ffffff);
  padding: 0.8rem 1.5rem;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default CustomButton;
