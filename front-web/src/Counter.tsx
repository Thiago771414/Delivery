import { useState } from "react"

//função
function Counter() {
    //estado componente react para Incrementar/Decrementar
    //por convenção é estado, set(estado)
    const [counter, setCounter] = useState(0);

    //arrow function (ciclo de vida)
    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <button onClick={handleIncrease}>Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>
            <h1>Valor do contador: {counter} </h1>
        </div>
    )
}

export default Counter;