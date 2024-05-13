import "./header.css";

function Header() {
  return (
    <header id="first-block">
      <div className="furniture-1" />
      <div className="furniture-2" />
      <div className="container">
        <h1>
          <span className="line">Turning</span>
          <span className="line">dream homes </span>
          <span className="line">
            <span className="color">into</span>{" "}
            r e a l i t y.
          </span>
        </h1>
        <div className="buttons">
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
