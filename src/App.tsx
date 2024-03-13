import { useState } from "react";

import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import StyledCommentCard from "./components/comments/StyledCommentCard";
import StyledCommentUser from "./components/comments/StyledCommentUser";
import StyledCommentDate from "./components/comments/StyledCommentDate";
import styled, { ThemeProvider } from "styled-components";
import StyledMainContainer from "./components/StyledContainer";
import StyledMenu from "./components/menu/StyledMenu";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import { Wrapper } from "./components/wrapper/wrapper";

const StyledApp = styled.div`
   min-height: 100vh;
   background-color: ${(props) => props.theme.body};
   color: ${(props) => props.theme.body};
   transition: all 0.25s ease;
`;

const darkTheme = {
	body: "#222222",
	text: "#ffffff"
};

const lightTheme = {
	body: "#ffffff",
	text: "#222222"
};

function App() {
	const [theme, setTheme] = useState("light");
	const isDarkTheme = theme === "dark";

	const toggleTheme = () => {
		setTheme(isDarkTheme ? "light" : "dark");
	};

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<Router>
				<Routes>
					<Route path="/" element={
						<Wrapper toggleTheme={toggleTheme} >
							<Home />
						</Wrapper>
					} />

					<Route path="/comments" element={
						<Wrapper toggleTheme={toggleTheme} >
							<Comments />
						</Wrapper>
					} />
				</Routes>
			</Router>
		</ThemeProvider>
	);

	/*
	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<StyledApp>
				<StyledMenu toggleTheme={toggleTheme}></StyledMenu>

				<StyledMainContainer>
					 <StyledCommentCard>
						<StyledCommentUser>@adam</StyledCommentUser>
						<StyledCommentDate>Monday 19 February 11:57am</StyledCommentDate>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae expedita quaerat quam sit sequi nam, ipsam enim, fugit accusantium numquam reiciendis ratione. Quis, adipisci id assumenda tenetur earum sequi!
					</StyledCommentCard> 
				</StyledMainContainer>

				<Router>
					<div>
						<Routes>
							<Route path="/" element={<Home />} />
							{
					 //<Route path="/about" element={<About />} />
					}
						</Routes>
					</div>
				</Router>
			</StyledApp>
		</ThemeProvider>
	);
	*/
}

export default App;
