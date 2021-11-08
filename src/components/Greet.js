import React from 'react'

/*function Greet(){
    return <h1>Welcome Vamsi</h1>
}*/

//const Greet=()=> <h1>Hello varma</h1>

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1> hello  {props.name} you are from {props.college}</h1>
            {props.children}
        </div>
    )

}

export default Greet