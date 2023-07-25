import React, {
  AllHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

const InputField = styled.input<InputProps>`
  padding-left: 0.625rem;
  height: 2.25rem;
  border-radius: 0.625rem;
  margin: 0.2rem 0;
  font-size: 1rem;
  color: var(--font-color, #c4c4c4);
  background: transparent;

  border: ${(props) =>
    props.errorMessage?.length! > 0
      ? "2px solid #F24C3D"
      : "2px solid #468B97"};
`;

const StyledTextArea = styled.textarea<TextAreaProps>`
  padding-left: 0.625rem;
  border-radius: 0.625rem;
  margin: 0.2rem 0;
  font-size: 1rem;
  color: var(--font-color, #c4c4c4);
  background: transparent;
  border: ${(props) =>
    props.errorMessage?.length! > 0
      ? "2px solid #F24C3D"
      : "2px solid #468B97"};
`;

const RequiredSpan = styled.span`
  color: red;
  font-size: 1rem;
  font-weight: bolder;
  margin: 0 0.25rem;
`;

const ErrorLabel = styled.label`
  color: red;
  font-size: 0.75rem;
`;

const InputLabel = styled.label`
  color: var(--font-color, #c4c4c4);
  pointer-events: none;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 85%;
`;

interface CustomInputProps
  extends AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  errorMessage?: string;
  multiline?: boolean;
}

interface InputProps {
  errorMessage?: string;
}

interface TextAreaProps {
  errorMessage?: string;
}

const CustomTextFeild: React.FC<CustomInputProps> = ({
  label,
  required,
  errorMessage,
  multiline,
  ...props
}) => {
  const CustomTextAreaFeild = () => {
    const textareaProps: TextareaHTMLAttributes<HTMLTextAreaElement> = {
      ...props
    };
    return <StyledTextArea {...textareaProps} errorMessage={errorMessage} />;
  };
  const CustomInputFeild = () => {
    const inputProps: InputHTMLAttributes<HTMLInputElement> = {
      ...props
    };
    return (
      <InputField type="text" {...inputProps} errorMessage={errorMessage} />
    );
  };

  return (
    <InputGroup>
      {label && (
        <InputLabel>
          {label}
          {required && <RequiredSpan>*</RequiredSpan>}
        </InputLabel>
      )}
      {multiline ? CustomTextAreaFeild() : CustomInputFeild()}
      {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </InputGroup>
  );
};

export default CustomTextFeild;
