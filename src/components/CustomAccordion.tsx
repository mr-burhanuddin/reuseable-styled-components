import React, { HTMLAttributes, useState } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  border: 1px solid var(--accordion-border-color, #c4c4c4);
  border-radius: 0.25rem;
`;

const AccordionHeader = styled.div`
  padding: 0.625rem;
  background-color: var(--accordion-header-bg-color, #0f6292);
  color: var(--font-color);
  cursor: pointer;
  border-radius: 0.25rem;
`;

const AccordionContent = styled.div<{ expanded: boolean }>`
  display: ${(props) => (props.expanded ? "block" : "none")};
  padding: 0.625rem;
`;

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const CustomAccordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={toggleAccordion}>{title}</AccordionHeader>
      <AccordionContent expanded={expanded}>{children}</AccordionContent>
    </AccordionWrapper>
  );
};

export default CustomAccordion;
