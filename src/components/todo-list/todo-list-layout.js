import styles from './todo-list.module.css';
import { AddNewTodoForm } from '../addNewTodoForm/addNewTodoForm';
import { Todo } from '../todo/todo';
import {  Outlet } from 'react-router-dom';


export const Task = () => <div>Контент страницы туду</div>;
//export const MainPage = () => <div>Контент</div>

export const TodoListLayout = ({
	value,
	setValue,
	requestAddNewTodo,
	getSortedTodos,
	isSorted,
	setIsSorted,
	requestUpdateTodo,
	requestDeleteTodo,
	edit,
	setEdit,
	updateInputValue,
	setUpdateInputValue,
	todos,
	onSearch
}) => {
	return (
		<>
			<AddNewTodoForm
				value={value}
				setValue={setValue}
				requestAddNewTodo={requestAddNewTodo}
				isSorted={isSorted}
				getSortedTodos={getSortedTodos}
				setIsSorted={setIsSorted}
				onSearch={onSearch}
			/>
			<ul className={styles.todoList}>
				{todos.map(({ id, text }) => (
					<Todo
						key={id}
						text={text}
						id={id}
						edit={edit}
						requestUpdateTodo={requestUpdateTodo}
						requestDeleteTodo={requestDeleteTodo}
						updateInputValue={updateInputValue}
						setUpdateInputValue={setUpdateInputValue}
						setEdit={setEdit}
					/>
				))}

			</ul>
			<Outlet/>

		</>
	);
};
