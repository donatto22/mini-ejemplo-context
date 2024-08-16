import { createContext, useState } from 'react'

export const CarritoContext = createContext()

export const Provider = ({ children }) => {
    // ....
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto])
    }

    return (
        <CarritoContext.Provider value={[carrito, agregarProducto]} >
            { children }
        </CarritoContext.Provider>
    )

}

// export const BocaditosContext = createContext()

// export const Provider = ({ children }) => {
//     const [bocaditos, setBocaditos] = useState({
//         clicks: 10
//     })

//     return (
//         <BocaditosContext.Provider value={[bocaditos, setBocaditos]} >
//             { children }
//         </BocaditosContext.Provider>
//     )

// }