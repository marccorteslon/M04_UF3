import './App.css';
import Title from './Title.js';
import Die from './Die.js';

function App() {
 	return (
		<div className="rollmania">
		<Title />
 		<main className="App">
			<Die />
			<Die />
			<Die />
 		</main>
		</div>
 );
}

export default App;
