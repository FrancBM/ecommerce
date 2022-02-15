import React from "react";

export default function Reloj(props) {
    return (
        <p style={{ color: "#ECDBBA" }}>Hora: {props.date.toLocaleTimeString()} </p>
    );
}
