import './App.css';
import Title from './Title.js';
import Dice from './Dice.js';
import RollButton from './RollButton.js';

function App() {

let [roll, setRoll] = useState(false);

function roll_dice () {
	alert("Que ruede!!!");
	setRoll(true);
}

 	return (
		<div className="rollmania">
		<Title title_text="Rollmania!!!" />
 		<main className="App">
			<Dice cantidad="3" roll={roll}/>
 		</main>
		<RollButton rollfunc={roll_dice}/>
		</div>
 );
}

export default App;
