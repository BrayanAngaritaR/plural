import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Comments from "./pages/Comments";
import { Wrapper } from "./components/wrapper/wrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const darkTheme = {
	isDark: true,
	body: "#222222",
	text: "#ffffff"
};

const lightTheme = {
	isLight: true,
	body: "#ffffff",
	text: "#222222"
};

function App() {
	const [theme, setTheme] = useState("light");
	const isDarkTheme = theme === "dark";

	const queryClient = new QueryClient();

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
							<QueryClientProvider client={queryClient}>
								<Comments />
							</QueryClientProvider>
						</Wrapper>
					} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
