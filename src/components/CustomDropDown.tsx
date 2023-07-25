import React, { Fragment } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSelect = styled.select`
  padding: 0.625rem;
  border: 1px solid var(--border-color, #ccc);
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  font-weight: 600;
  width: fit-content;
`;

const DropdownIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
`;

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  onChange: (value: string) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <DropdownWrapper>
      <StyledSelect onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.icon && <>{option.icon}</>}
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {/* You can use the 'icon' prop of the options to display an icon */}
    </DropdownWrapper>
  );
};

export default CustomDropdown;
