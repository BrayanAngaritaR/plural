import styled from "styled-components";

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

const StyledFooter = ({props}: any) => {
    console.info("props", props)
    return (
       <StyledContainerFooter>
            <StyledIconFooter src="https://www.pluralresearch.org/logos/lexicon-light.png" width={24} height={24}/>
            <StyledIconFooter src="https://www.pluralresearch.org/logos/arbitrum-light.svg" width={24} height={24}/>
            <StyledIconFooter src="https://www.pluralresearch.org/logos/plurality.svg" width={24} height={24}/>
       </StyledContainerFooter>
    );
 };
 
 export default StyledFooter;