import "./AddForm.scss";
import { TABLE_HEADERS, DB_ENDPOINT } from "../../_const";

function AddForm({ className }) {
	return (
		<form
			className={`add-form ${className}`}
			onSubmit={submitHandler}
			action={DB_ENDPOINT}
			method="post"
		>
			<input
				type="number"
				id={TABLE_HEADERS[0].toLowerCase()}
				name={TABLE_HEADERS[0].toLowerCase()}
				placeholder={TABLE_HEADERS[0]}
				aria-label={TABLE_HEADERS[0]}
				className="add-form__input add-form__input--id"
				required
			/>
			<input
				type="text"
				name={TABLE_HEADERS[1].toLowerCase()}
				placeholder={TABLE_HEADERS[1]}
				aria-label={TABLE_HEADERS[1]}
				autoComplete="name"
				className="add-form__input add-form__input--client"
				required
			/>
			<input
				type="text"
				name="pickup_address"
				aria-label={TABLE_HEADERS[2]}
				placeholder="Address"
				autoComplete="street-address"
				className="add-form__input add-form__input--address"
				required
			/>
			<input
				type="text"
				name="dropoff_address"
				aria-label={TABLE_HEADERS[3]}
				placeholder="Address"
				autoComplete="street-address"
				className="add-form__input"
				required
			/>
			<input
				type="text"
				name={TABLE_HEADERS[4].toLowerCase()}
				placeholder={TABLE_HEADERS[4]}
				aria-label={TABLE_HEADERS[4]}
				autoComplete="name"
				className="add-form__input add-form__input--courier"
				required
			/>
			<button type="submit" className="add-form__submit">
				Add
			</button>
		</form>
	);
}

function submitHandler(evt) {
	evt.preventDefault();

	const data = new FormData(evt.target);
	const newItem = {};

	for (let pair of data.entries()) {
		newItem[pair[0]] = pair[1];
	}

	const headers = { "Content-Type": "application/json" };

	return fetch(evt.target.action, {
		method: evt.target.method,
		body: JSON.stringify(newItem),
		headers: headers,
	}).then((response) => {
		if (response.ok) {
			window.location.reload();
		}
		return response.json().then((error) => {
			const e = new Error("Something went wrong");
			e.data = error;
			throw e;
		});
	});
}

export default AddForm;
