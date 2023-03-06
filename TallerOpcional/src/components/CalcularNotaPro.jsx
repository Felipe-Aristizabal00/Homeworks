import React from "react";
import Estudiantes from "../assets/Estudiantes";

const CalcularNotaPro = () => {
	const notas = [];
	const estudiantes = Estudiantes;

	estudiantes.forEach((estudiante) => {
		const promedio =
			estudiante.notes.reduce((acumulado, valorActual) => acumulado + valorActual, 0) / estudiante.notes.length;
		const nota = promedio >= 3 ? "Aprobado" : "Reprobado";
		notas.push({ name: estudiante.name, nota });
	});

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Nota</th>
					</tr>
				</thead>
				<tbody>
					{notas.map((nota, index) => (
						<tr key={index}>
							<td>{nota.name}</td>
							<td>{nota.nota}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CalcularNotaPro;
