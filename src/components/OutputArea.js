import { useRef } from 'react';

import MainSection from './MainSection';
import MainSectionTitle from './MainSectionTitle';

const OutputArea = ({ outputValue }) => {
	// Handle text copying.
	const outputRef = useRef(null);
	const onCopyClick = () => {
		outputRef.current?.select();
		document.execCommand("copy");
	};

	return (
		<MainSection>
			<MainSectionTitle>
				Output
				<button className="advancedOptionsButton" onClick={onCopyClick}>
					Copy Output
				</button>
			</MainSectionTitle>
			<textarea
				ref={outputRef}
				className="textOutput"
				value={outputValue}
				readOnly
			/>
		</MainSection>
	);
};

export default OutputArea;
