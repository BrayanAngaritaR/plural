import styled from 'styled-components'

const StyledButton = styled.button<{ $primary?: boolean; $underline?: boolean; $isMobileHidden?: boolean; $isMobileShow?: boolean }>`
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
  ${({ $underline }) => $underline && `
    border-bottom: 2px solid #222;
    border-radius: 0px;
  `}

  ${({ $isMobileHidden }) => $isMobileHidden && `
  @media (max-width: 1080px) {
    display: none;
  }`} 

${({ $isMobileShow }) => $isMobileShow && `
  @media (min-width: 1080px) {
    display: none;
  }`} 

  &:hover{
    border: 1px solid transparent;
    background: ${props => props.$primary ? "#474646" : "white"};
  }
`;

export default StyledButton;