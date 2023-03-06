import React, { useState } from "react";

const CalcularNota = () => {
	const [student, setStudent] = useState({
		name: "",
		grade1: "",
		grade2: "",
		grade3: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setStudent((prevState) => ({ ...prevState, [name]: value }));
	};

	const calculateGrade = () => {
		const { grade1, grade2, grade3 } = student;
		const averageGrade = (parseInt(grade1) + parseInt(grade2) + parseInt(grade3)) / 3;
		return averageGrade >= 3 ? "aprobado" : "reprobado";
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const grade = calculateGrade();
		alert(`${student.name} ha ${grade} la materia.`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Nombre:
					<input type="text" name="name" onChange={handleInputChange} value={student.name} />
				</label>
			</div>
			<div>
				<label>
					Nota 1:
					<input type="number" name="grade1" onChange={handleInputChange} value={student.grade1} />
				</label>
			</div>
			<div>
				<label>
					Nota 2:
					<input type="number" name="grade2" onChange={handleInputChange} value={student.grade2} />
				</label>
			</div>
			<div>
				<label>
					Nota 3:
					<input type="number" name="grade3" onChange={handleInputChange} value={student.grade3} />
				</label>
			</div>
			<button type="submit">Calcular nota final</button>
		</form>
	);
};
export default CalcularNota;
