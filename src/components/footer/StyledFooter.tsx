import styled, { useTheme } from "styled-components";

const StyledContainerFooter = styled.div<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 112px;
 `;

 const StyledIconFooter = styled.img<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledFooter = () => {
    const {isDark} = useTheme(); 

    return (
       <StyledContainerFooter>
            <StyledIconFooter
                src={`https://www.pluralresearch.org/logos/lexicon-${isDark ? 'dark' : 'light'}.png`}
                width={24}
                height={24}
            />
            <StyledIconFooter 
                src={`https://www.pluralresearch.org/logos/arbitrum-${isDark ? 'dark' : 'light'}.svg`}
                width={24}
                height={24}
            />
            <StyledIconFooter
                src={`https://www.pluralresearch.org/logos/plurality.svg`}
                width={24}
                height={24}
            />
       </StyledContainerFooter>
    );
 };
 
 export default StyledFooter;