import React, { useState } from "react";

const NumerosAleatorios = () => {
	const [numeros, setNumeros] = useState(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)));

	const [posicion, setPosicion] = useState("");
	const [resultado, setResultado] = useState([]);

	const handlePositionChange = (event) => {
		setPosicion(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const pos = parseInt(posicion, 10);
		if (isNaN(pos) || pos < 0 || pos >= numeros.length) {
			setResultado([]);
			return;
		}
		setResultado(numeros.map((n) => n / numeros[pos]));
	};

	return (
		<div>
			<h1>Divisor de números aleatorios</h1>
			<form onSubmit={handleFormSubmit}>
				<label>
					Posición:
					<input type="text" value={posicion} onChange={handlePositionChange} />
				</label>
				<button type="submit">Dividir</button>
			</form>
			<ul>
				{resultado.map((result, index) => (
					<li key={index}>
						{numeros[index]} {result}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NumerosAleatorios;
