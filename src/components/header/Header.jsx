import logo from "../../assets/logo.svg";
import "./header.scss";
export const Header = () => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="brand">
          <img src={logo} alt="logo" />
          <span>GeneraPass</span>
        </div>
      </div>
    </header>
  );
};
