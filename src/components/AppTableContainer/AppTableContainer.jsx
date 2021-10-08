import { useState, useEffect } from "react";

import AppTable from "../AppTable/AppTable";
import AddForm from "../AddForm/AddForm";
import "./AppTableContainer.scss";

import { connect } from "react-redux";
import { DB_ENDPOINT } from "../../_const";

function AppTableContainer(props) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const { formShowing } = props;

	useEffect(() => {
		fetch(DB_ENDPOINT)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <p>Something went wrong 😟</p>;
	}

	if (!isLoaded) {
		return <p>Wait a little 😇</p>;
	}

	return (
		<div className="scroll-container">
			<AppTable items={items} />
			{formShowing && <AddForm className="scroll-container__bottom" />}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		formShowing: state.formShower.showForm,
	};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTableContainer);
