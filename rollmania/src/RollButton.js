import './RollButton.css';
	set_random();
function RollButton(props) {
return (
<button classname="RollButton" onClick={props.roll_func} >
Roll!!
</button>
);
}

export default RollButton;
