const GameId = ({
	className,
	placeholder,
	onChangeHandler,
}) => (
	<input
		className={`search-box ${className}`}
		type="number"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default GameId;
