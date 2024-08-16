import { useContext } from "react"

import { CarritoContext } from './Context'
import { Link } from "react-router-dom"

const App = () => {
  const [carrito, agregarProducto] = useContext(CarritoContext)

  const productos = [
    {
      id: 1,
      name: "Telefono",
      price: 10
    },

    {
      id: 2,
      name: "Laptop",
      price: 100
    }
  ]
  

  return (
    <>
    <div>
      Pagina del carrito: <Link to='/ejemplo'> Carrito </Link>

      {
        productos.map(p => (
          <div key={p.id} >
            <h3>{ p.name }</h3>
            <h4>S/. { p.price } </h4>
            <button onClick={ () => agregarProducto(p) } >comprar</button>
          </div>
        ))
      }

      {/* Cantidad de productos: { bocaditos.clicks }
      <br />
      <Link to='/ejemplo'>ir a ejemplo</Link>
      <br />
      <button onClick={ () => { aumentar() } }>Click y aumenta</button> */}
    </div>
    </>
  )
}

export default App