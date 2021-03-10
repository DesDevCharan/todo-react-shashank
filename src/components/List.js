import React, { Component } from "react";
import { connect } from "react-redux";
import { callGetTodos, patchTodos } from "../services";

const mapStateToProps = state => {
    return { todos: state.todos, loading: state.loading };
};
const mapDispatchToProps = dispatch => {
    return {
        checkTodo: todo => dispatch(patchTodos(todo)),
        getTodos: () => dispatch(callGetTodos()),
    };
};
class ConnectedList extends Component {
    constructor() {
        super();
        this.checkTodo = this.checkTodo.bind(this);
        this.getTodos = this.getTodos.bind(this);
    }
    componentDidMount() {
        this.getTodos();
    }
    getTodos() {
        this.props.getTodos();
    }
    checkTodo(el) {
        this.props.checkTodo({ id: el.id, value: !el.isCompleted });
    }
    render() {
        let { todos } = this.props;
        const isEmpty = !todos || !todos.length ? true : false;
        return (
            <div id="holder">
                {this.props.loading &&
                    <div className="loader">
                        <p> Loading... </p>
                    </div>
                }
                { !this.props.loading &&
                    <div className="todo-holder">
                        <h2>Todos App</h2>
                        <p> {isEmpty && !this.props.loading ? "No Todos" : ""} </p>
                        <div id="todo-list">
                            <ul>
                                {this.props.todos.map(el => (
                                    <li className={"todo-item"} key={el.id}>
                                        <div style={{ marginRight: '10px' }}>
                                            <input type="checkbox" onChange={() => this.checkTodo(el)} />
                                        </div>
                                        <div className={"item-name " + (el.isCompleted ? "checkItem" : "")}>
                                            {el.description}
                                        </div>
                                        <div className={"item-name " + (el.isCompleted ? "checkItem" : "")}>
                                            {el.dueDate}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }

            </div>
        );
    }
}
const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedList);
export default List;
