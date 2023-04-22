import React, { useEffect, useState } from "react";
import { useCollection } from "../firebase/firestore";
import SideBar from "../components/SideBar";

export const Crud = () => {
	const [user, setUser] = useState({ name: "" });
	const { error, isPending, results, getAll, add, update, deleteItem } = useCollection("users");

	const [selectedId, setSelectedId] = useState(null);

	const getAllDocs = async () => {
		await getAll([]);
	};

	const save = async () => {
		await add(user);
		await getAllDocs();
	};

	const handleSetUser = (event) => {
		setUser({ name: event.target.value });
	};

	useEffect(() => {
		getAllDocs();
	}, []);

	const handleUpdateUser = async (user) => {
		await update(user);
		getAllDocs();
	};

	const handleDeleteUser = async (user) => {
		await deleteItem(user);
		getAllDocs();
	};

	return (
		<>
			<SideBar />
			<input type="text" onChange={handleSetUser} value={user.name} />
			<button type="button" onClick={save}>
				Guardar
			</button>
			{isPending ? <span> Saving... </span> : ""}
			<ul>
				{results.map((item) => {
					return (
						<div key={item.id}>
							<li> {JSON.stringify(item)} </li>;
							<button type="button" onClick={() => handleUpdateUser({ id: item.id, name: item.name })}>
								Actualizar
							</button>
							<button type="button" onClick={() => handleDeleteUser(item.id)}>
								Borrar
							</button>
						</div>
					);
				})}
			</ul>

			<hr></hr>
		</>
	);
};
