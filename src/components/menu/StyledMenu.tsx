import { useState } from "react";
import StyledButton from "../StyledButton";
import styled from "styled-components";
import Logo from "../../assets/img/logo.png";

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
`;

const StyledSecondaryText = styled.p`
   margin: 0px;
   font-size: 16px;
   font-weight: 500;
   font-style: italic;
   font-family: "Playfair";
`;

const StyledMenu = ({ toggleTheme }: { toggleTheme: () => void }) => {
   const [isOpen, setIsOpen] = useState(false);

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
            <StyledButton $isMobileShow>
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
            <StyledButton $underline $isMobileHidden>
               {" "}
               Agenda{" "}
            </StyledButton>
            <StyledButton $isMobileHidden> Account </StyledButton>
            <StyledButton $primary $isMobileHidden>
               {" "}
               Log Out{" "}
            </StyledButton>
            <StyledButton onClick={toggleTheme} $primary>
               <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g clip-path="url(#clip0_1_255)">
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
            </StyledButton>
         </div>
      </StyledContainerMenu>
   );
};

export default StyledMenu;
