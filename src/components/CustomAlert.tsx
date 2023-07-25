import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const AlertWrapper = styled.div<AlertProps>`
  color: ${(props) => `var(--alert-color-${props.type}, #f2dede)`};
  padding: 0.625rem;
  border: 1px solid ${(props) => `var(--alert-color-${props.type}, #f2dede)`};
  border-radius: 0.5rem;
`;

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  type: "success" | "error" | "warning";
}

const CustomAlert: React.FC<AlertProps> = ({ type, children }) => {
  return <AlertWrapper type={type}>{children}</AlertWrapper>;
};

export default CustomAlert;
