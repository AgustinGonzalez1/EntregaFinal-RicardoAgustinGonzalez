import CardProduct from "./CardProduct";

const CardProductContainer = ({ data }) => {
	return (
		<div className="grid place-items-center sm:place-content-start gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{data.map((item, key) => (
				<CardProduct key={key} item={item} />
			))}
		</div>
	);
};
export default CardProductContainer;
