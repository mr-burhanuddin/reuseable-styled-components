import React, { HTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";

const Button = styled.button<CustomButtonProps>`
  background-color: var(--primary-color, #007bff);
  color: var(--font-color, #ffffff);
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.75 : 1)};
`;

const Rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const CustomLoader = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid var(--font-color);
  border-top-color: transparent;
  animation: ${Rotate360} 1s linear infinite;
`;

interface LoaderButtonProps extends HTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  onClick: () => void;
  disabled?: boolean;
}

interface CustomButtonProps {
  disabled?: boolean;
}

const LoaderButton: React.FC<LoaderButtonProps> = ({
  loading,
  onClick,
  disabled = false,
  children
}) => {
  return (
    <Button onClick={onClick} disabled={disabled || loading}>
      {loading ? <CustomLoader /> : children}
    </Button>
  );
};

export default LoaderButton;
