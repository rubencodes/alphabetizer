import MainSection from './MainSection';
import MainSectionTitle from './MainSectionTitle';

const InputArea = ({ inputValue, setInputValue, showSettings }) => (
	<MainSection>
		<MainSectionTitle>
			Type here...
			<button className="advancedOptionsButton" onClick={showSettings}>
				Advanced
			</button>
		</MainSectionTitle>
		<textarea
			className="textInput"
			placeholder="e.g. hello world"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
			autoFocus
		/>
	</MainSection>
);

export default InputArea;
