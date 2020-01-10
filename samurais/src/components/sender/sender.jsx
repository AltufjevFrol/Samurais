import React from 'react';
import styles from './sender.module.css';

function Sender(props) {
	let refField = React.createRef();

	function clickSend() {
		if (refField.current.innerText !== '') {
			refField.current.innerText = '';
			let action = props.SendCreateAction();
			props.hendlerSend(action);
		}
	}

	function keyDown(e) {
		if (e.nativeEvent.key === 'Enter') {
			e.preventDefault();
			clickSend();
		}
	}

	function enterSymbol() {
		let text = refField.current.innerText;
		let action = props.NewSymbolTextCreateAction(text);
		props.hendlerSend(action);
	}

	return (

		<div className={styles.sender}>
			<div ref={refField}
					 contentEditable="true"
					 className={styles.field}
					 onKeyDown={keyDown}
					 onInput={enterSymbol}
			/>
			<div className={styles.button} onClick={clickSend}>Send</div>
		</div>
	)


}

export default Sender;