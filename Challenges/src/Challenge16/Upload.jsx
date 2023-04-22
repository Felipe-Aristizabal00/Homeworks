import React, { useEffect } from "react";
import { useUploadHook } from "../Hooks/useUploadHook";
import SideBar from "../components/SideBar";

const Upload = () => {
	const { files, percent, handleChange, handleUpload, handleGetAll, handleDelete } = useUploadHook();

	useEffect(() => {
		handleGetAll();
	}, []);

	return (
		<div>
			<SideBar />
			<input type="file" onChange={handleChange} accept="" />
			<button onClick={() => handleUpload()}> Upload to Firebase </button>
			<p> {percent} %done </p>
			{files.map((item, key) => {
				return (
					<div key={key}>
						<img width="100px" src={item} />;
						<button onClick={() => handleDelete(item)}> Delete file from Firebase </button>
					</div>
				);
			})}
		</div>
	);
};

export default Upload;
