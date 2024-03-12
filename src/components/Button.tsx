import styled from 'styled-components'

const Button = styled.button<{ $primary?: boolean; }>`
  background: ${props => props.$primary ? "#222" : "white"};
  color: ${props => props.$primary ? "white" : "#222"};
  border-radius: 8px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    border: 1px solid transparent;
    background: ${props => props.$primary ? "#474646" : "white"};
  }
`;

export default Button;