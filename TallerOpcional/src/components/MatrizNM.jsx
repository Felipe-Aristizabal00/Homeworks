import React from "react";

const MatrizNM = () => {
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[10, 11, 12],
	];

	const datosTabla = () => {
		return matrix.map((row, index) => {
			const rowData = row.map((data, index) => {
				return <td key={index}>{data}</td>;
			});
			return <tr key={index}>{rowData}</tr>;
		});
	};

	const encabezadoTabla = () => {
		const header = matrix[0].map((col, index) => {
			return <th key={index}>Column {index + 1}</th>;
		});
		return <tr>{header}</tr>;
	};

	const sumaColumnas = () => {
		const sumas = Array(matrix[0].length).fill(0);
		matrix.forEach((row) => {
			row.forEach((data, index) => {
				sumas[index] += data;
			});
		});
		return sumas.map((sum, index) => {
			return <td key={index}>{sum}</td>;
		});
	};

	return (
		<table>
			<tbody>
				{encabezadoTabla()}
				{datosTabla()}
				<tr>{sumaColumnas()}</tr>
			</tbody>
		</table>
	);
};

export default MatrizNM;
