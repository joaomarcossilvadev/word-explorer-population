import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1>World Explorer Population</h1>
        </div>

        <nav className="header-nav">
          <a href="#explorar">Explorar países</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;