import React from 'react';
import API from "../../apiHttpRequest/api";

class Status extends React.Component {
    state = {
        status: 'No status...',
        isEdit: false
    }

    componentDidMount() {
        let id = this.props.userId === this.props.myId ? this.props.myId:this.props.userId;
        API.getStatus(id).then((status)=>{
            if(status){
                this.setState({status:status})
            }
        })
    }

    setEdit = () => {
        if (this.props.userId === this.props.myId) {
            this.setState({isEdit: true});
        }
    }
    setShow = () => {
        this.setState({isEdit: false})
        API.setStatus(this.state.status).then((resp)=>console.log(resp));
    }

    inputStatus = (e) => {
        this.setState({status: e.target.value})
    }

    render() {

        let status = this.state.isEdit ? <input autoFocus={true} onChange={this.inputStatus}/> :
            <div>{this.state.status}</div>;
        return (
            <div onDoubleClick={this.setEdit} onBlur={this.setShow}>
                {status}
            </div>);
    }
}

export default Status;