import React from "react";


export default function Saludar(props){
    //Asignación por destructuring
    const { userInfo, saludarFN} = props;
    const { nombre } = userInfo;
    //saca la info de un objeto y se le asigna a una constante.
    console.log(userInfo);
    console.log(saludarFN);

    return(
        <div>
            <button onClick={() =>saludarFN(nombre)}>Saludar</button>
        </div>
    );
}