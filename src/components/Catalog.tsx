import { useSelector, useStore } from "react-redux";

export function Catalog() {
	// const store = useStore();
	const catalog = useSelector((state) => state);

	console.log(catalog);

	return (
		<div>
			<h1>Catalog</h1>
		</div>
	);
}
