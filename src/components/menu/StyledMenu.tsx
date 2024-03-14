import StyledButton from "../StyledButton";
import styled, { useTheme } from "styled-components";
import Logo from "../../assets/img/logo.png";
import { useLocation, useNavigate, } from "react-router-dom";

const StyledContainerMenu = styled.div<{
   $isMobileShow?: boolean;
   $primary?: boolean;
   $underline?: boolean;
}>`
   display: flex;
   justify-content: space-between;
   align-items: center;

   ${({ $isMobileShow }) =>
      $isMobileShow &&
      `
	@media (max-width: 1280px) {
		padding: 32px;
	}

	@media (min-width: 1280px) {
		padding: 32px 180px;
	}
  `}
`;

const StyledContainerMenuLeftSide = styled.div<{
   $primary?: boolean;
   $underline?: boolean;
}>`
   flex: row;
   justify-content: center;
   align-items: center;
`;

const StyledContainerMenuLeftSideFlex = styled.div<{
   $primary?: boolean;
   $underline?: boolean;
}>`
   display: flex;
   align-items: center;
`;

const StyledLogo = styled.img`
   display: flex;
   align-items: center;
`;

const StyledConteinerText = styled.div`
   color: black;
   padding-left: 16px;
   @media (max-width: 678px) {
      display: none;
   }
`;

const StyledPrincipalText = styled.p`
   margin: 0px;
   font-size: 29.6px;
   font-weight: 600;
   font-family: "Playfair Display";
   color: ${(props) => props.theme.text};
`;

const StyledSecondaryText = styled.p`
   margin: 0px;
   font-size: 16px;
   font-weight: 500;
   font-style: italic;
   font-family: "Playfair";
   color: ${(props) => props.theme.text};
`;

const StyledMenu = ({ toggleTheme }: { toggleTheme: () => void }) => {
   const { isDark } = useTheme();
   const navigate = useNavigate();
   const { pathname } = useLocation()

   const toComments = () => {
      navigate(`/comments`)
   }

   return (
      <StyledContainerMenu $isMobileShow>
         <StyledContainerMenuLeftSide>
            <StyledContainerMenuLeftSideFlex>
               <StyledLogo src={Logo} alt="Logo" width={96} />
               <StyledConteinerText>
                  <StyledPrincipalText>
                     Plural Research Experiment
                  </StyledPrincipalText>
                  <StyledSecondaryText>
                     An experiment in research independece and innovation
                  </StyledSecondaryText>
               </StyledConteinerText>
            </StyledContainerMenuLeftSideFlex>
         </StyledContainerMenuLeftSide>

         <div style={{ display: "inline-flex", gap: "16px" }}>
            <StyledButton $isMobileShow onClick={() => toComments()}>
               <svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M2 18H26C26.825 18 27.5 17.325 27.5 16.5C27.5 15.675 26.825 15 26 15H2C1.175 15 0.5 15.675 0.5 16.5C0.5 17.325 1.175 18 2 18ZM2 10.5H26C26.825 10.5 27.5 9.825 27.5 9C27.5 8.175 26.825 7.5 26 7.5H2C1.175 7.5 0.5 8.175 0.5 9C0.5 9.825 1.175 10.5 2 10.5ZM0.5 1.5C0.5 2.325 1.175 3 2 3H26C26.825 3 27.5 2.325 27.5 1.5C27.5 0.675 26.825 0 26 0H2C1.175 0 0.5 0.675 0.5 1.5Z"
                     fill="#222222"
                  />
               </svg>
            </StyledButton>
            {
               pathname === '/comments' &&
               <>
                  <StyledButton $underline $isMobileHidden>
                     {" "}
                     Agenda{" "}
                  </StyledButton>
                  <StyledButton $isMobileHidden> Account </StyledButton>
                  <StyledButton $primary $isMobileHidden onClick={() => navigate(`/`)}>
                     {" "}
                     Log Out{" "}
                  </StyledButton>
               </>
            }
            {
               pathname !== '/comments' &&
               <StyledButton $primary $isMobileHidden onClick={() => toComments()}>
                  {`ZUPASS REGISTER`}
               </StyledButton>
            }
            <StyledButton onClick={toggleTheme} $primary>
               <svg
                  className={`d-${isDark ? 'none' : 'inline-block'}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g clipPath="url(#clip0_1_255)">
                     <path
                        d="M10 2.5C5.85833 2.5 2.5 5.85833 2.5 10C2.5 14.1417 5.85833 17.5 10 17.5C14.1417 17.5 17.5 14.1417 17.5 10C17.5 9.61667 17.4667 9.23333 17.4167 8.86667C16.6 10.0083 15.2667 10.75 13.75 10.75C11.2667 10.75 9.25 8.73333 9.25 6.25C9.25 4.74167 9.99167 3.4 11.1333 2.58333C10.7667 2.53333 10.3833 2.5 10 2.5Z"
                        fill="white"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_1_255">
                        <rect width="20" height="20" fill="white" />
                     </clipPath>
                  </defs>
               </svg>

               <svg className={`d-${isDark ? 'inline-block' : 'none'}`} width="20" height="20" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" />
               </svg>
            </StyledButton>
         </div>
      </StyledContainerMenu>
   );
};

export default StyledMenu;
