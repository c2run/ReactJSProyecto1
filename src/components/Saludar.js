import React from "react";


export default function Saludar(props){

    return(
        <div>
            <p>Hola { props.userInfo.nombre},
            tiene {props.userInfo.edad} años,
            su color favorito es el {props.userInfo.color}
            </p>
        </div>
    );
}