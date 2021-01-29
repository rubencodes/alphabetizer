const getSpecialCharsMap = (prefixValue) => ({
	"#": `:${prefixValue}hash:`,
	"?": `:${prefixValue}question:`,
	"!": `:${prefixValue}exclamation:`,
	"@": `:${prefixValue}at:`,
});

export default getSpecialCharsMap;
