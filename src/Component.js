import { useState } from "react"
import "./style.css"



function Counter(){


    var [count,SetCount] = useState(0)

    function Random(){

        SetCount(Math.floor(Math.random()*10)+1)

    }

  

return(<div className="First">

     <h1 className="number">{count}</h1>
    <button onClick={Random} className="Second">Random Number</button>
    


    </div>)


}

export default Counter