
import styles from './App.module.css';
import { Title } from './components/Title';
import { TodoList } from './components/todo-list/todo-list';
import { Routes, Route } from 'react-router-dom';
import { TodoListLayout } from './components/todo-list/todo-list-layout';
import { Todo } from './components/todo/todo';
import { NoteFoundPage } from './components/NotFoundPage/NoteFoundPage';
import { Task } from './components/todo-list/todo-list-layout';
//import { MainPage } from './components/todo-list/todo-list-layout';



export const App = () => {


	return (
		<>
		<div className={styles.app}>

		<Title />
		<TodoList />

		</div>


		<Routes>
			<Route path="/" element={<TodoListLayout/>}/>

			<Route path="/todo" element={<Todo/>}>
				<Route path="task" element={<Task/>}/>
			</Route>
			<Route path="*" element={<NoteFoundPage/>}/>


		</Routes>
		</>
	);
};











