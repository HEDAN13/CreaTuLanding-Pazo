import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div>
      <ul>
        <li>Categorías</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default Navbar;
