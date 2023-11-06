const Hamburger = ({ classes, addClasses }) => {
	const line1 = classes ? "linea1 linea11" : "linea1";
	const line2 = classes ? "linea2 linea22" : "linea2";
	const line3 = classes ? "linea3 linea33" : "linea3";

	return (
		<button className="md:hidden" onClick={addClasses}>
			<div className={line1}></div>
			<div className={line2}></div>
			<div className={line3}></div>
		</button>
	);
};
export default Hamburger;
