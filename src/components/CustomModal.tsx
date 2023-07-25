import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--box-shadow-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  border: 0.15rem solid var(--border-color);
  background-color: var(--modal-bg-color, #fff);
  padding: 0.85rem;
  margin: 0 2rem;
  border-radius: 1rem;
  color: var(--modal-text-color, #000);
  max-width: 1200px;
`;

const CloseModalBtnContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
const CloseModalBtn = styled.button`
  background: var(--custombtn-bg-color, #007bff);
  color: var(--custombtn-text-color, #ffffff);
  padding: 0.25rem 0.65rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.75rem;
`;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseModalBtnContainer>
          <CloseModalBtn onClick={onClose}>X</CloseModalBtn>
        </CloseModalBtnContainer>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CustomModal;
