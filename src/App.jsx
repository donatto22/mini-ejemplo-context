import { useContext } from "react"

import { BocaditosContext } from './Context'
import { Link } from "react-router-dom"

const App = () => {
  const [bocaditos, setBocaditos] = useContext(BocaditosContext)

  function aumentar () {
    setBocaditos({
      clicks: bocaditos.clicks + 1
    })
  }

  return (
    <>
    <div>
      Cantidad de productos: { bocaditos.clicks }
      <br />
      <Link to='/ejemplo'>ir a ejemplo</Link>
      <br />
      <button onClick={ () => { aumentar() } }>Click y aumenta</button>
    </div>
    </>
  )
}

export default App