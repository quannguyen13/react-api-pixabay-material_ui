
import React from "react";
import Body from "./components/Body"
import "./App.css"
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
  
function App() {
  // const [toggleDark, settoggleDark] = React.useState(false);
  const [toggleDark, settoggleDark] = React.useState(window.localStorage.getItem('dark-mode') === 'true');
  React.useEffect(() => {
    window.localStorage.setItem('dark-mode', toggleDark);
  }, [toggleDark]);

  const themeLight = createTheme({
  palette: {
    background: {
      primary: "#ede0d4",
      secondary: 'white'
    }

  }
});

const themeDark = createTheme({
  palette: {
    background: {
      primary: "#000000",
      secondary: "#343a40"
    },
    text: {
      primary: "#ffffff"
    }
  }
});
  return (
      <div >

    {/* // Wrapping code in ThemeProvider */}
    <ThemeProvider theme={toggleDark ? themeDark : themeLight }>
      <Body  toggleDark={toggleDark}
      settoggleDark={settoggleDark} />
    </ThemeProvider>
      </div>
  );
}
  
export default App;