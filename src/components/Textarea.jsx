import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: ${(props) => props.height || "auto"};
  
`;
export default function Textarea({ value, onChange, placeholder, height }) {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      height={height}
    />
  );
}