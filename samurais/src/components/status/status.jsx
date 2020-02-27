import React from 'react';
import API from "../../apiHttpRequest/api";

class Status extends React.Component {
    state = {
        status: this.props.status ? this.props.status : 'no status...',
        isEdit: false
    }

    setEdit = () => {
        if (this.props.userId === this.props.myId) {
            this.setState({isEdit: true});
        }
    }
    setShow = (e) => {
        this.setState({isEdit: false})
        this.props.setStatus(e.target.value)
    }

    inputStatus = (e) => {
        this.setState({status: e.target.value})
    }

    render() {

        let status = this.state.isEdit ?
            <input autoFocus={true} onChange={this.inputStatus} onBlur={this.setShow}/> :
            <div onDoubleClick={this.setEdit}>{this.state.status}</div>;
        return (
            <div>
                {status}
            </div>);
    }
}

export default Status;