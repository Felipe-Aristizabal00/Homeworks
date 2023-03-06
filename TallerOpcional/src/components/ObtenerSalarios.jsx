import React, { useState } from "react";

const ObtenerSalarios = () => {
	const numero_Salarios = 10;
	const incremento = 8;

	const [salarios, setSalarios] = useState([]);

	const handleSalaryInputChange = (event, index) => {
		const nuevosSalarios = [...salarios];
		nuevosSalarios[index] = parseFloat(event.target.value);
		setSalarios(nuevosSalarios);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (salarios.length == numero_Salarios) {
			const salariosConIncremento = salarios.map((salario) => salario * (1 + incremento / 100));
			setSalarios(salariosConIncremento);
		}
	};

	return (
		<div>
			<h1>Aumentador de salarios</h1>
			<form onSubmit={handleFormSubmit}>
				{Array.from({ length: numero_Salarios }, (_, index) => (
					<div key={index}>
						<label>
							Salario {index + 1}:
							<input
								type="number"
								value={salarios[index] || ""}
								onChange={(event) => handleSalaryInputChange(event, index)}
							/>
						</label>
					</div>
				))}
				<button type="submit">Calcular aumento</button>
			</form>
			{salarios.length == numero_Salarios ? (
				<h2>Ya se han recolectado los 10 salarios</h2>
			) : (
				<h2>No se han recolectado los 10 salarios, por favor, digite todos los salarios</h2>
			)}
		</div>
	);
};
export default ObtenerSalarios;
