import React, { useState } from "react";
import "../App";

const OrdenarNúmeros = (props) => {
	const [numNuevo, setNumNuevo] = useState("");
	const [numeros, setNumeros] = useState([]);

	const dataProps = props;
	const arreglo = Object.values(dataProps);
	const listaNumeros = arreglo[0];

	const onInputChange = (event) => {
		setNumNuevo(parseInt(event.target.value));
	};

	const ordenarNumeros = () => {
		numeros[0] = listaNumeros[0];
		numeros[1] = listaNumeros[1];
		numeros[2] = listaNumeros[2];
		numeros[3] = numNuevo;
		const numerosOrdenados = numeros.sort((a, b) => a - b);
		setNumeros(numerosOrdenados);
		setNumNuevo("");
	};

	return (
		<div>
			<h1>OrdenarNúmeros</h1>
			<form>
				<label>
					Ingrese un número adicional:
					<input type="number" value={numNuevo} onChange={onInputChange} />
				</label>
				<br />
				<button type="button" onClick={ordenarNumeros}>
					Ordenar números
				</button>
			</form>
			{numeros.length > 0 ? (
				<p>
					{numeros.map((num) => (
						<span key={num}> {num} </span>
					))}
				</p>
			) : (
				<p> No hay números para ordenar </p>
			)}
		</div>
	);
};

export default OrdenarNúmeros;
