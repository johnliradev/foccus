import { useTheme } from "./hooks/useTheme";
import { GlobalStyle } from "./styles/globalStyle";
import { Header } from "./components/header";
function App() {
  const { theme } = useTheme();
  return (
    <div>
      <GlobalStyle theme={theme} />
      <Header />
      <p>React Application</p>
    </div>
  );
}

export default App;
