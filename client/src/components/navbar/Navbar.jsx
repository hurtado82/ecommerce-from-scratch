import "../../ccs/Navbar.css"
import InputSearch from "./InputSearch"

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-primary">
        <h1 className="navbar-title">Ecommerce <span>electronics</span></h1>
        <InputSearch />
        <div className="navbar-user">
          <div>Mi cuenta</div>
          <a href="">
            <span class="material-icons nav-icon">shopping_cart</span>
          </a>
          <a href="">
            <span class="material-icons nav-icon">favorite_border</span>
          </a>
        </div>
      </div>
      <div className="navbar-secondary">
        <a>Productos </a>
        <a>Categorias </a>
        <a>Productos </a>
      </div>
    </header>
  );
}