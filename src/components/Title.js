import styles from '../App.module.css';
import { Link } from 'react-router-dom';



export const Title = () => {
	return (
		<div className={styles.title}>
			<h1>Todo list</h1>
			<div><Link to='/' >Главная</Link></div>
		</div>
	);
};
