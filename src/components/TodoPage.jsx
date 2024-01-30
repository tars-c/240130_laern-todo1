import React, { useState } from 'react';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

function TodoPage() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <TodoList
                todos={todos}
                onChangeTodos={setTodos}
            />
            <InputTodo onChangeTodos={setTodos} />
            {/* InputTodo에서 입력한 것을 TodoList에서 받아내기 */}
        </>
    );
}

export default TodoPage;
