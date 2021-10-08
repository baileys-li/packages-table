import "./SearchInput.scss";
import { ReactComponent as LoupeIcon } from "../icon/loupe.svg";

import { connect } from "react-redux";
import { inputFilter } from "../../actions/filterAction";

function SearchInput({ search }) {
	return (
		<label className="search">
			<LoupeIcon
				width="25"
				height="25"
				fill="currentColor"
				aria-label="Search"
				className="search__icon"
			/>
			<input
				type="search"
				name="search"
				placeholder="Search package, client or courier"
				className="search__input"
				onInput={(evt) => {
					search(evt.target.value);
				}}
				id="search"
			/>
		</label>
	);
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		search: (value) => dispatch(inputFilter(value)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
