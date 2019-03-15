import React from 'react';
// this is new feat code

class form1 extends React.Component {
    constructor(props) {
        super (props)
        this.state= {
            name: '',
            email: '',
            password: '',
        };

        handleChange= event => {
            const isCheckbox = event.target.type === "checkbox";
            this.setState({
                [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
            });
        };

        handleSubmit = event => {
            event.preventDefault();
            console.log(this.state);
        };
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
              <input 
                name='name'
                placeholder='name'
                value={this.state.name}
                onChange={this.handleChange}
                />
            </div>

            <div>
              <input 
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>

            <div>
              <input 
                type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>
            <button type='submit'> Submit</button>

            </form>
            

        );
    }
}

export default form1;