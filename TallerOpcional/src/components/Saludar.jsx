import React, { useState } from "react";
import "../App";

const Saludar = () => {
	const [nombre, setNombre] = useState("");
	const [hora, setHora] = useState("");
	const [tiempo, setTiempo] = useState("");

	const onInputChangeNombre = (evt) => {
		setNombre(evt.target.value);
	};

	const onInputChangeHora = (evt) => {
		setHora(evt.target.value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		setNombre(nombre);
		setHora(hora);

		const horaDia = 6;
		const horaTarde = 12;
		const horaNoche = 18;

		if (hora >= horaDia && hora < horaTarde) {
			setTiempo("Buenos días");
		} else if (hora >= horaTarde && hora < horaNoche) {
			setTiempo("Buenas tardes");
		} else {
			setTiempo("Buenas noches");
		}
	};
	return (
		<div>
			<h1>Saludador 3000</h1>
			<h3>Escribe tu nombre y la hora en formato 24h así te saludaremos</h3>
			<form onSubmit={onSubmit}>
				<label>Nombre:</label>
				<input type="text" placeholder="Ingresa tú nombre" value={nombre} onChange={onInputChangeNombre} />
				<label>Hora del día: </label>
				<input
					type="number"
					placeholder="Ingresa la hora en formato 24h"
					value={hora}
					onChange={onInputChangeHora}
				/>
				<button>Saludaaaaaa</button>
				<hr />
			</form>
			<p>
				{tiempo}, {nombre}
			</p>
		</div>
	);
};

export default Saludar;
