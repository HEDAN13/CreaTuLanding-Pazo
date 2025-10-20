import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer saludo="Bienvenidos a la Landing" />
    </>
  );
}

export default App;
