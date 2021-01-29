const MainSection = ({ className = "", children, ...props }) => (
	<section className={"bodySection " + className} {...props}>
		{children}
	</section>
);

export default MainSection;
