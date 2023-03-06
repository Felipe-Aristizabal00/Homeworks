import React from "react";
import { useState } from "react";

const CalcularLlamada = () => {
	const [sec, setSec] = useState("");
	const [minutos, setMinutos] = useState("");
	const [segundos, setSegundos] = useState("");
	const [precio, setPrecio] = useState("");

	const onInputChange = (evt) => {
		setSec(parseInt(evt.target.value));
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		var minutos = Math.floor((sec / 60) % 60);
		minutos = minutos < 10 ? "0" + minutos : minutos;
		var segundos = sec % 60;
		segundos = segundos < 10 ? "0" + segundos : segundos;

		setMinutos(minutos);
		setSegundos(segundos);

		if (minutos < 3) {
			setPrecio(100);
		} else {
			setPrecio(100 + (minutos - 3) * 50);
		}
	};
	return (
		<div>
			<h1>Calcula el precio de tus llamadas</h1>
			<h3>A. Toda llamada que dure menos de 3 minutos tiene un coste de 100 pesos.</h3>
			<h3>B. Cada minuto adicional a partir de los 3 primeros cuesta 50 pesos.</h3>
			<hr />
			<h2>Ingresa los segundos para calcular</h2>
			<form onSubmit={onSubmit}>
				<input type="number" placeholder="Ingresar el total de segundos" value={sec} onChange={onInputChange} />
				<button>Calcule el precio de la llamada</button>
			</form>
			<hr />
			<p>
				La llamada duró: {minutos} minutos, con {segundos} segundos.
			</p>
			<p>Precio total: {precio} </p>
		</div>
	);
};

export default CalcularLlamada;
