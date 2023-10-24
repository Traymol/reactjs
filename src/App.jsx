import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Item from "./components/Item"
import Cart from "./components/Cart"

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App