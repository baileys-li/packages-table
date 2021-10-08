import "./AddButton.scss";
import { ReactComponent as PlusIcon } from "../icon/plus.svg";

import { connect } from "react-redux";
import { changeFormShowing } from "../../actions/showFormActions";

function AddButton(props) {
	const { label, className, changeState, isOpened } = props;

	return (
		<button
			className={`add-button ${isOpened && "add-button--opened"} ${className}`}
			aria-label={label}
			title={label}
			onClick={() => {
				changeState();
			}}
		>
			<PlusIcon
				aria-hidden="true"
				width="11"
				height="11"
				fill="currentColor"
				className="add-button__icon"
			/>
		</button>
	);
}

function mapStateToProps(state) {
	return {
		isOpened: state.formShower.showForm,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changeState: () => dispatch(changeFormShowing()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
