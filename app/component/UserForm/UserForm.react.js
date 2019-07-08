import React from 'react';

import './UserForm.css';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            nameColor:"",    
            ageColor:""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validAge = this.validAge.bind(this);
        this.validName = this.validName.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge=this.onChangeAge.bind(this)
    }
    onChangeAge(e) {
        var val = e.target.value;

        this.setState({ age: val })
    }
    onChangeName(e) {
        var val = e.target.value;
        this.setState({ name: val })
    }

    handleSubmit(e) {
        //e.prevenetDefault();
        this.setState({nameColor:this.validName()===true?"green":"blue"});
        this.setState({ageColor:this.validAge()===true?"green":"blue"});
        alert("lel")
    }

    validName(name) {
      this.setState({nameColor:this.validName.length>2?"green":"blue"})
    }

    validAge(age) {
        return age>18
    }

    render() {
        return (
            // onSubmit={this.handleSubmit}
            <form >
                <p>
                    <label>Name:</label><br />
                    <input type="text" value={this.state.name} onChange={this.onChangeName} style={{borderColor:this.state.nameColor}}></input>
                </p>
                <p>
                    <label>Age:</label><br/>
                    <input type="text" value={this.state.age} onChange={this.onChangeAge} style={{borderColor:this.state.ageColor}}></input>
                </p>
                <input type="button" value="Send"></input>
            </form>
        );
    }
}

export default UserForm;