import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    };

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    };

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                style={{ display: 'flex' }}>
                <input
                    style={{ flex: '10', padding: '5px' }}
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    placeholder="Add Todo ..." />
                <input
                    type="submit"
                    value="Submit"
                    style={{ flex: '1' }}
                    className="btn" />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

export default AddTodo
