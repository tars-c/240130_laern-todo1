import React, { useState } from 'react';

function InputTodo(props) {
    const [todo, setTodo] = useState('');
    const [isAddBtnDisabled, setIsAddBtnDisabled] = useState(true);
    const { onChangeTodos } = props;
    // const [isEditMode, setIsEditMode] = useState(false);

    const onTodoAddItem = e => {
        setTodo('');
        onChangeTodos(prev => [...prev, { id: (prev.length + 1) * 100, text: todo }]);
        setIsAddBtnDisabled(true);
    };
    return (
        <div>
            <input
                type="text"
                value={todo}
                onChange={e => {
                    if (e.target.value.length > 0) {
                        setIsAddBtnDisabled(false);
                    } else {
                        setIsAddBtnDisabled(true);
                    }
                    setTodo(e.target.value);
                }}
            />
            <button
                type="button"
                onClick={onTodoAddItem}
                disabled={isAddBtnDisabled}
            >
                추가
            </button>
        </div>
    );
}

export default InputTodo;
