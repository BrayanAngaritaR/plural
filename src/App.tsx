import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Button from './components/Button'
import Menu from './components/Menu'
import CommentCard from './components/Comments/CommentCard'
import CommentUser from './components/Comments/CommentUser'
import CommentDate from './components/Comments/CommentDate'
import styled, { ThemeProvider } from 'styled-components'

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`;

const darkTheme = {
  body: "#222222"
};

const lightTheme = {
  body: "#ffffff"
};

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
      <Menu />

      <div className="container">
      <Button $primary>ZUPASS REGISTER</Button>
      <Button $primary>+</Button>
      <Button>-</Button>
      <Button onClick={toggleTheme} $primary><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_255)">
          <path d="M10 2.5C5.85833 2.5 2.5 5.85833 2.5 10C2.5 14.1417 5.85833 17.5 10 17.5C14.1417 17.5 17.5 14.1417 17.5 10C17.5 9.61667 17.4667 9.23333 17.4167 8.86667C16.6 10.0083 15.2667 10.75 13.75 10.75C11.2667 10.75 9.25 8.73333 9.25 6.25C9.25 4.74167 9.99167 3.4 11.1333 2.58333C10.7667 2.53333 10.3833 2.5 10 2.5Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1_255">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg></Button>

      <CommentCard>
        <CommentUser>@adam</CommentUser>
        <CommentDate>Monday 19 February 11:57am</CommentDate>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae expedita quaerat quam sit sequi nam, ipsam enim, fugit accusantium numquam reiciendis ratione. Quis, adipisci id assumenda tenetur earum sequi!
      </CommentCard>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </StyledApp>
    </ThemeProvider>
  )
}

export default App
