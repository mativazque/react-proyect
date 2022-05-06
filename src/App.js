import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar category1={"Mouses"} category2={"Teclados"} category3={"Monitores"} category4={"Auriculares"}/>
      <ItemListContainer intro={"Bienvenidos a Gamer Over"}/>
    </div>
  );
}

export default App;
