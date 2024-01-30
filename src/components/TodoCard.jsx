import React, { useState } from 'react';

function TodoCard(props) {
    const { todoItem, onDeleteTodoItem, onModifyTodoItem } = props;
    const [isEditMode, setIsEditMode] = useState(false);
    const [modifyTodo, setModifiyTodo] = useState({});

    const onClickUpdateTodoItem = e => {
        if (isEditMode === false) {
            onDeleteTodoItem(todoItem);
        } else {
            onModifyTodoItem(modifyTodo);
            setIsEditMode(false);
        }
        e.preventDefault();
    };

    return (
        <div className="todo-card">
            <input
                type="checkbox"
                name="modifycheck"
                onChange={() => {
                    setIsEditMode(prevIsEditMode => !prevIsEditMode);
                    setModifiyTodo(todoItem);
                }}
                checked={isEditMode}
                style={{ display: 'inline-block', zoom: 1.4 }}
            />
            {isEditMode ? (
                <input
                    type="text"
                    className="todo-input"
                    value={modifyTodo.text}
                    onChange={e => {
                        setModifiyTodo({ id: todoItem.id, text: e.currentTarget.value });
                    }}
                />
            ) : (
                <span className="todo-content">{todoItem.text}</span>
            )}
            <button
                className="todo-btn"
                onClick={onClickUpdateTodoItem}
            >
                {!isEditMode ? '삭제' : '수정'}
            </button>
        </div>
    );
}

export default TodoCard;
