import React from "react";
import { useState } from "react";

const ConvertirSegundos = () => {
	const [sec, setSec] = useState("");
	const [horas, setHoras] = useState("");
	const [minutos, setMinutos] = useState("");
	const [segundos, setSegundos] = useState("");

	const onInputChange = (evt) => {
		setSec(parseInt(evt.target.value));
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		var horas = Math.floor(sec / 3600);
		horas = horas < 10 ? "0" + horas : horas;
		var minutos = Math.floor((sec / 60) % 60);
		minutos = minutos < 10 ? "0" + minutos : minutos;
		var segundos = sec % 60;
		segundos = segundos < 10 ? "0" + segundos : segundos;

		setHoras(horas);
		setMinutos(minutos);
		setSegundos(segundos);
	};

	return (
		<div>
			<h1>Convertidor mágico</h1>
			<h3>Pasa de segundos a Horas, Minutos y Segundos</h3>
			<form onSubmit={onSubmit}>
				<input type="number" placeholder="Ingresar segundos" value={sec} onChange={onInputChange} />
				<button>Convertir a formato</button>
			</form>
			<hr />
			<p>
				Horas: {horas}, Minutos: {minutos}, Segundos: {segundos}
			</p>
		</div>
	);
};

export default ConvertirSegundos;
