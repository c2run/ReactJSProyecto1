import React from "react";


export default function Saludar(props){
    //Asignación por destructuring
    const { userInfo, saludarFN} = props;
    //Asignación de valor por defecto anónimo en caso que no se asigne un valor a la constante
    const { nombre = "Anonimo" } = userInfo;
    const {edad} = userInfo;
    //saca la info de un objeto y se le asigna a una constante.
    console.log(userInfo);
    console.log(saludarFN);

    return(
        <div>
            <button onClick={() =>saludarFN(nombre,edad)}>Saludar</button>
        </div>
    );
}