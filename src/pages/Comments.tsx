import styled from "styled-components";
import StyledInput from "../components/StyledInput";

const StyledP = styled.p`
    margin: 0px;
    color: ${(props) => props.theme.text};
    font-family: Playfair;
    max-width: 720px;
    padding: 0px 25vw;
    
    @media (max-width: 678px) {
      padding: 0px 32px;
   }
`;

const Comments = () => {

   return (
      <>
      <StyledP>Leave a comment:</StyledP>
      <StyledInput placeholder="Write here"></StyledInput>
      </>
   )
}

export default Comments;