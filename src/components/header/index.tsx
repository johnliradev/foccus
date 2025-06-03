import { useTheme } from "../../hooks/useTheme";
import { HeaderContainer } from "./style";
import FoccusLogo from "../../assets/Foccus.svg";
import FoccusLogoDark from "../../assets/Foccus-white.svg";
import { SunIcon, MoonIcon } from "lucide-react";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <HeaderContainer>
      <img src={theme === "light" ? FoccusLogo : FoccusLogoDark} alt="Foccus" />
      <button onClick={toggleTheme}>
        {theme === "light" ? <SunIcon /> : <MoonIcon color="white" />}
      </button>
    </HeaderContainer>
  );
};
