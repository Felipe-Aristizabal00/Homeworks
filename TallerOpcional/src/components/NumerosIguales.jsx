import React from "react";
import { useState } from "react";
import OrdenarNúmeros from "./OrdenarNúmeros";

const NumerosIguales = () => {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [num3, setNum3] = useState("");
	const [arregloNum, setArregloNum] = useState([]);
	const [cantidad, setCantidad] = useState("");

	const onInputChange1 = (event) => {
		setNum1(parseInt(event.target.value));
	};

	const onInputChange2 = (event) => {
		setNum2(parseInt(event.target.value));
	};

	const onInputChange3 = (event) => {
		setNum3(parseInt(event.target.value));
	};

	const verificarNumerosIguales = () => {
		let contador = 0;

		if (num1 === num2) {
			contador++;
		}
		if (num1 === num3) {
			contador++;
		}
		if (num2 === num3) {
			contador++;
		}
		if (num1 === num2 && num1 === num3) {
			contador--;
		}
		setCantidad(contador);
		arregloNum.push(num1);
		arregloNum.push(num2);
		arregloNum.push(num3);
		console.log(arregloNum);
	};
	return (
		<div>
			<h1>Números iguales</h1>
			<form>
				<label>
					Número 1:
					<input type="number" value={num1} onChange={onInputChange1} />
				</label>
				<br />
				<label>
					Número 2:
					<input type="number" value={num2} onChange={onInputChange2} />
				</label>
				<br />
				<label>
					Número 3:
					<input type="number" value={num3} onChange={onInputChange3} />
				</label>
				<br />
				<button type="button" onClick={verificarNumerosIguales}>
					Verificar
				</button>
			</form>
			{cantidad > 0 ? <p> {cantidad + 1} números son iguales.</p> : <p>No hay números iguales</p>}
			<OrdenarNúmeros valor={arregloNum} />
		</div>
	);
};

export default NumerosIguales;
