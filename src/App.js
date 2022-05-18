import NavBar from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="App">
      <NavBar category1={"Mouses"} category2={"Teclados"} category3={"Monitores"} category4={"Auriculares"}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
