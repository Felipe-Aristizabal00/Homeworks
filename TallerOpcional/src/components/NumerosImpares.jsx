import React, { useState } from "react";

const NumerosImpares = () => {
	const [numero, setNumero] = useState("");
	const [numerosImpares, setNumerosImpares] = useState([]);

	const onInputChange = (event) => {
		setNumero(parseInt(event.target.value));
	};

	const generarImpares = () => {
		const impares = [];
		for (let i = 1; i <= numero; i += 2) {
			impares.push(i);
		}
		setNumerosImpares(impares);
	};

	return (
		<div>
			<h1>OrdenarNúmeros</h1>
			<form>
				<label>
					Ingrese un número para obtener la lista de impares que le preceden:
					<input type="number" value={numero} onChange={onInputChange} />
				</label>
				<br />
				<button type="button" onClick={generarImpares}>
					Generar Impares
				</button>
			</form>
			{numerosImpares.length > 0 ? (
				<ul>
					{numerosImpares.map((numeroImpar, key) => {
						return <li key={key}>{numeroImpar}</li>;
					})}
				</ul>
			) : (
				<p>No hay número impares</p>
			)}
		</div>
	);
};

export default NumerosImpares;
