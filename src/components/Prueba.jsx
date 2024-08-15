import { useContext } from "react"

import { BocaditosContext } from '../Context'

const Prueba = () => {
  const [bocaditos, setBocaditos] = useContext(BocaditosContext)

  return (
    <div>{ bocaditos.clicks }</div>
  )
}

export default Prueba