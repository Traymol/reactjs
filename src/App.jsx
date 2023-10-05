import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting = {"Bienvenido a T&T Tienda de informática"} />
        </div>
    )
}

export default App