import './Dice.css';
import Die from './Die.js';

function get_dice (quantity, roll){
	let dice_list = [];

for (let i = 0; i < quantity; i++) {
		dice_list.push(<Die key={i} roll={roll}/>);
	}
	return dice_list;
}

function Dice(props) { 
	return (
		<div classname="Dice">
			{get_dice(props.cantidad)}
		</div>
	);
}

export default Dice;
