import React from "react";
import styled from "styled-components";

const BadgeWrapper = styled.span<BadgeWrapperProps>`
  padding: 0.35rem;
  font-size: 0.65rem;
  background-color: ${(props) =>
    `var(--badge-color-${props.variant}, #007bff)`};
  color: ${(props) => `var(--badge-text-color-${props.variant}, #ffffff)`};
  border-radius: 50%;
`;

interface BadgeProps {
  text: string;
  variant: "success" | "error" | "warning";
}

interface BadgeWrapperProps {
  variant: "success" | "error" | "warning";
}

const CustomBadge: React.FC<BadgeProps> = ({ text, variant }) => {
  return <BadgeWrapper variant={variant}>{text}</BadgeWrapper>;
};

export default CustomBadge;
