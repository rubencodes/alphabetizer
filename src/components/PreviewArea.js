import MainSection from './MainSection';
import MainSectionTitle from './MainSectionTitle';

const PreviewArea = ({ previewValue }) => (
	<MainSection>
		<MainSectionTitle>
			Preview
		</MainSectionTitle>
		<div className="previewWrapper">
			{previewValue === null && (
				<span>[Preview Unavailable]</span>
			)}
			{previewValue?.map((maybeFileName, index) => {
				const isFileName = typeof maybeFileName === 'string';
				if (!isFileName) {
					// Process each character individually.
					return maybeFileName.map((char, index) => {
						const isLineBreak = char.match(/[\r\n]/) !== null;
						if (isLineBreak) {
							return <br key={`${char}${index}`} />;
						}

						return <span key={`${char}${index}`}>{char}</span>;
					})
				}

				return <img key={`${maybeFileName}${index}`} src={maybeFileName} alt="letter slackmoji" />;
			})}
		</div>
	</MainSection>
);

export default PreviewArea;
