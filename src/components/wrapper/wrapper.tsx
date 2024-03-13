import { useLocation } from 'react-router-dom';

import styled from "styled-components";
import StyledMenu from "../menu/StyledMenu";
import StyledMainContainer from "../StyledContainer";
import StyledFooter from "../comments/footer/StyledFooter";

const StyledApp = styled.div`
   min-height: 100vh;
   background-color: ${(props) => props.theme.body};
   color: ${(props) => props.theme.body};
   transition: all 0.25s ease;
`;

export const Wrapper = ({ children, toggleTheme }: any) => {
    return (
        <StyledApp>
            <StyledMainContainer>
                <StyledMenu toggleTheme={toggleTheme}></StyledMenu>
                {children}
            </StyledMainContainer>
            <StyledFooter />
        </StyledApp>
    );
};