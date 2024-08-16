import { useContext } from "react"

import { CarritoContext } from '../Context'

const Prueba = () => {
  const [carrito] = useContext(CarritoContext)

  return (
    <div>
      <h1>Carrito de compras:</h1>
      {
        carrito.map(c => (
          <div key={c.id} > { c.name } </div>
        ))
      }
    </div>
  )
}

export default Prueba