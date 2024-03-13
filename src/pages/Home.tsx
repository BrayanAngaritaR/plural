
import styled from "styled-components";

const StyledContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap:10px;
`;

const StyledP = styled.p`
    margin: 0px;
`;

const StyledStrong = styled.strong<{
    $underline?: boolean;
 }>`
 ${({ $underline }) =>
 $underline &&
 `
 text-decoration: underline;
 `}

`;

const Home = () => {
   return (
      <StyledContainer>
         <StyledP>
            We are a <StyledStrong> community of open-source </StyledStrong> researchers committed to solving
            the hardest problems in decentralization, including the challenge of
            maintaining research and academic independence in the wake of
            technological vertical integration and hyper-financialization. Using
            plural mechanism design, we experiment with novel ways to surface
            ideas in the public interest that transcend our biases—protocol,
            politics, purse— while encouraging collaboration and insights across
            unlikely intersections where breakthroughs tend to emerge.
         </StyledP>
         <StyledP>
            Our first convening  <StyledStrong> is May 22 & 23 </StyledStrong> in Berlin, where the community
            is tasked to allocate 100,000 ARB in research grants. The first
            topic broadly is MEV, though we accept other proposals related to
            decentralization, including privacy,  security, identity, censorship
            resistance, data dignity, and partial common ownership—to name just
            a few. Surprise us.
         </StyledP>
         <StyledP>
            Sign up with <StyledStrong> Zupass here. </StyledStrong> Early submissions before March 31 will be
            prioritized.
         </StyledP>
         <StyledP>
            The experiment will be novel, fun, and weird—like the best of
            research….and Berlin. Through a series of structured interactions,
            the community will decide how to prioritize research and allocate
            funds, relying on structured, high-bandwidth deliberations that
            surface research public goods, while elevating truth and expertise
            with peer prediction.  The community is interdisciplinary, drawing
            on insights from science of science, social science, economics,
            complexity science, cryptography, and philosophy, among other
            intersections. The community will test and evolve these mechanisms
            through multiple cycles of <StyledStrong $underline > feedback </StyledStrong> and adaptation.
         </StyledP>
      </StyledContainer>
   );
};

export default Home;
