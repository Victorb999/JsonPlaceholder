import Main from "./main";
import "./styles/global.scss";
import { ThemeContextProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}
