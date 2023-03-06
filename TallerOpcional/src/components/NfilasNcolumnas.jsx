import React from "react";
import { useState } from "react";

const NfilasNcolumnas = () => {
	const [filas, setFilas] = useState(1);
	const [columnas, setColumnas] = useState(1);

	const handleRowInputChange = (event) => {
		const value = parseInt(event.target.value);
		setFilas(value);
	};

	const handleColumnInputChange = (event) => {
		const value = parseInt(event.target.value);
		setColumnas(value);
	};

	const renderTabla = () => {
		const tabla = [];
		for (let i = 0; i < filas; i++) {
			const fila = [];
			for (let j = 0; j < columnas; j++) {
				fila.push(<td key={`${i}-${j}`}>{`Fila ${i + 1}, Columna ${j + 1}`}</td>);
			}
			tabla.push(<tr key={i}>{fila}</tr>);
		}
		return tabla;
	};

	return (
		<div>
			<div>
				<label>
					Filas:
					<input type="number" name="rows" min="1" value={filas} onChange={handleRowInputChange} />
				</label>
			</div>
			<div>
				<label>
					Columnas:
					<input type="number" name="columns" min="1" value={columnas} onChange={handleColumnInputChange} />
				</label>
			</div>
			<table>
				<tbody>{renderTabla()}</tbody>
			</table>
		</div>
	);
};

export default NfilasNcolumnas;
