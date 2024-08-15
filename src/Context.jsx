import { createContext, useState } from 'react'

export const BocaditosContext = createContext()

export const Provider = ({ children }) => {
    const [bocaditos, setBocaditos] = useState({
        clicks: 10
    })

    return (
        <BocaditosContext.Provider value={[bocaditos, setBocaditos]} >
            { children }
        </BocaditosContext.Provider>
    )

}