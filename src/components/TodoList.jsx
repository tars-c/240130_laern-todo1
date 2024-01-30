import React from 'react';
import TodoCard from './TodoCard';

function TodoList(props) {
    const { todos, onChangeTodos } = props;

    const onDeleteTodoItem = deleteTodoItem =>
        onChangeTodos(
            todos.filter(todoItem => {
                console.log(deleteTodoItem);
                if (todoItem.id !== deleteTodoItem.id) {
                    return deleteTodoItem;
                }
            }),
        );

    const onModifyTodoItem = updateTodoItem => {
        onChangeTodos(
            todos.map(todoItem => {
                if (todoItem.id === updateTodoItem.id) {
                    console.log(updateTodoItem.text);
                    return updateTodoItem;
                }
                return todoItem;
            }),
        );
    };

    return todos.map((todo, index) => {
        return (
            <TodoCard
                key={todo.id}
                onDeleteTodoItem={onDeleteTodoItem}
                onModifyTodoItem={onModifyTodoItem}
                todoItem={todo}
            />
        );
    });
}

export default TodoList;
