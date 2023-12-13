import { useState } from 'react'
import './App.css'
import Producting from './features/componets/product'
import Add_2_carts_main_fun from './features/add2cart/main'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container ">
        <Add_2_carts_main_fun />
      </div>
    </>
  )
}

export default App
