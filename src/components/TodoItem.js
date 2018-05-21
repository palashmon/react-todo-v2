import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object,
        editing: PropTypes.bool,
        onToggle: PropTypes.func,
        onDeleteClick: PropTypes.func,
        onEdit: PropTypes.func,
        onSave: PropTypes.func,
        onCancel: PropTypes.func
    };
    state = {
        editText: this.props.todo.title
    };

    shouldComponentUpdate = (nextProps, nextState) =>
        nextProps.todo !== this.props.todo ||
        nextProps.editing !== this.props.editing ||
        nextState.editText !== this.state.editText;

    /**
     * Safely manipulate the DOM after updating the state when invoking
     * `this.props.onEdit()` in the `handleEdit` method above.
     * For more info refer to notes at https://reactjs.org/docs/react-component.html#setstate
     * and https://reactjs.org/docs/react-component.html#componentdidupdate
     */
    componentDidUpdate = prevProps => {
        if (!prevProps.editing && this.props.editing) {
            // debugger; // eslint-disable-line
            let node = this.editField;

            // This is used to focus on the element
            // and to put the focus at the end of the text
            node.focus();
            node.setSelectionRange(node.value.length, node.value.length);
        }
    };

    handleEdit = () => {
        this.props.onEdit();
        this.setState({ editText: this.props.todo.title });
    };

    handleChange = event => {
        if (this.props.editing) {
            this.setState({ editText: event.target.value });
        }
    };

    handleSubmit = event => {
        let val = this.state.editText.trim();
        if (val) {
            this.props.onSave(val);
        } else {
            this.props.onDeleteClick();
        }
    };

    handleKeyDown = event => {
        if (event.which === ESCAPE_KEY) {
            this.setState({ editText: this.props.todo.title });
            this.props.onCancel(event);
        } else if (event.which === ENTER_KEY) {
            this.handleSubmit(event);
        }
    };

    render() {
        let liClasses = classNames({
            'main-class': true,
            completed: this.props.todo.completed,
            editing: this.props.editing
        });

        return (
            <li className={liClasses}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.todo.completed}
                        onChange={this.props.onToggle}
                    />
                    <label onDoubleClick={this.handleEdit}>{this.props.todo.title}</label>
                    <button className="destroy" onClick={this.props.onDeleteClick} />
                </div>
                <input
                    ref={node => {
                        this.editField = node;
                    }}
                    className="edit"
                    value={this.state.editText}
                    onChange={this.handleChange}
                    onBlur={this.handleSubmit}
                    onKeyDown={this.handleKeyDown}
                />
            </li>
        );
    }
}

export default TodoItem;
