const Main = ({ className = "", children, ...props }) => (
	<main className={"pageMain " + className} {...props}>
		{children}
	</main>
);

export default Main;
