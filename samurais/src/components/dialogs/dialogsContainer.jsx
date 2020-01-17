import {connect} from "react-redux";
import {addMessageCreateAction, addNewSymbolMessageCreateAction} from '../../redux/dialogsReducer';
import Dialogs from "./dialogs";

const mapStateToProps = (state) => {

	return {
		dialogsData: state.dialogs.dialogsData,
		messagesData: state.dialogs.messagesData,
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		addMessage() {
			dispatch(addMessageCreateAction());
		},
		addNewSymbolMessage(newText) {
			dispatch(addNewSymbolMessageCreateAction(newText));
		}
	}
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;