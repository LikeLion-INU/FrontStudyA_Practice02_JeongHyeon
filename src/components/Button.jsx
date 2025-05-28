import styled from "styled-components";

const Button = styled.button`
  background-color: #37B7C3;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #088395;
  }
  &:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
  }
`;

export default Button;