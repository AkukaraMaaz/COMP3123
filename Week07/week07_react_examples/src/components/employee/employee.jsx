import { useState } from "react"

function Employee(){
    let [x, setX] = useState(10)
    let [name, setName] = useState("Akukara")

    const addX = () => {
        setX(x + 1)
        console.log(`X: ${x}`)
    }
        const onNameChanged = (e) => {
        e.preventDefault()
        console.log(e.target.value,e.target.Name)
        setName(e.target.value)
    }

    return (
        <div>
            <h1>Employee State Management</h1>
            X: {x}
            <button onClick={addX}>Add 1 to X</button>
            Name: {name}
            <input type="text" nameme="txtName" onChange={onNameChanged}/>
        </div>
    )
}

export default Employee