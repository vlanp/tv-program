import Logo from "./header/Logo";
import Title from "./header/Title";

const Header = ({ logoPath, title }: { logoPath: string; title: string }) => {
  return (
    <header className="container">
      <Logo logoPath={logoPath} />
      <Title title={title} />
    </header>
  );
};

export default Header;
