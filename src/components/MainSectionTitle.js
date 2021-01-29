const MainSectionTitle = ({ className = "", children, ...props }) => (
	<h3 className={"bodySectionTitle " + className} {...props}>
		{children}
	</h3>
);

export default MainSectionTitle;
