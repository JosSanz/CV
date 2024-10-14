import styles from './App.module.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from "./components/Header";
import Skills from './components/Skills';
import Summary from './components/Summary';

function App() {
	return (
		<div className={styles.container}>
            <Header />
			<Summary />
			<Experience />
			<Education />
			<Skills />
        </div>
	);
}

export default App;
