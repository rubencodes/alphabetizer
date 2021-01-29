import { useState, useEffect } from 'react';
import MainSectionTitle from './MainSectionTitle';

const AdvancedSettingsArea = ({
	hideSettings,
	prefixValue,
	setPrefixValue,
	blankValue,
	setBlankValue,
	setWordMapValue,
	spacesBetweenEmojiValue,
	setSpacesBetweenEmojiValue,
}) => {
	const [customWordList, setCustomWordList] = useState([{ key: "", value: "" }]);
	const onAddCustomWord = () => {
		setCustomWordList((currentCustomWordList) => {
			return [...currentCustomWordList, { key: "", value: "" }];
		});
	};
	const onRemoveCustomWord = (index) => {
		setCustomWordList((currentCustomWordList) => {
			return [
				...currentCustomWordList.slice(0, index),
				...currentCustomWordList.slice(index + 1),
			];
		});
	};
	const updateKey = (index, key) => {
		setCustomWordList((currentCustomWordList) => {
			return [
				...currentCustomWordList.slice(0, index),
				{ ...currentCustomWordList[index], key },
				...currentCustomWordList.slice(index + 1),
			];
		});
	};
	const updateValue = (index, value) => {
		setCustomWordList((currentCustomWordList) => {
			return [
				...currentCustomWordList.slice(0, index),
				{ ...currentCustomWordList[index], value },
				...currentCustomWordList.slice(index + 1),
			];
		});
	};
	useEffect(() => {
		const updatedWordMapValue = customWordList
			.reduce((acc, { key, value }) => {
				if (!key || !value) {
					return acc;
				}

				return {
					...acc,
					[key]: value,
				};
			}, {});

		setWordMapValue(updatedWordMapValue);
	}, [customWordList]);

	return (
		<div className="advancedOptionsSection">
			<div className="advancedOptionsContainer">
				<MainSectionTitle>
					Advanced Settings
					<button
						className="advancedOptionXButton"
						onClick={hideSettings}
					>
						✖
					</button>
				</MainSectionTitle>
				<div>
					<h4 className="advancedOptionTitle">
						Custom Prefix
					</h4>
					<input
						className="advancedOptionInput"
						placeholder={DEFAULT_PREFIX_VALUE}
						value={prefixValue}
						onChange={(e) => setPrefixValue(e.target.value)}
					/>
				</div>
				<div>
					<h4 className="advancedOptionTitle">
						Custom Blanks
					</h4>
					<input
						className="advancedOptionInput"
						placeholder={DEFAULT_BLANK_VALUE}
						value={blankValue}
						onChange={(e) => setBlankValue(e.target.value)}
					/>
				</div>
				<div>
					<h4 className="advancedOptionTitle">
						Custom Emoji
						<button
							className="advancedOptionsButton"
							onClick={onAddCustomWord}
						>
							+ Add
						</button>
					</h4>
					{customWordList.map(({ key, value }, index) => (
						<li className="advancedOptionListItem">
							<input
								className="advancedOptionInput"
								placeholder="lol"
								value={key}
								onChange={(e) => updateKey(index, e.target.value)}
							/>
							<input
								className="advancedOptionInput"
								placeholder=":lol:"
								value={value}
								onChange={(e) => updateValue(index, e.target.value)}
							/>
							<button
								className="advancedOptionXButton"
								onClick={() => onRemoveCustomWord(index)}
							>
								✖
							</button>
						</li>
					))}
				</div>
				<div>
					<h4 className="advancedOptionTitle">
						Spaces between emojis?
					</h4>
					<input
						className="advancedOptionInput spacesBetweenEmojisInput"
						type="checkbox"
						value={spacesBetweenEmojiValue}
						onChange={(e) => setSpacesBetweenEmojiValue(e.target.checked)}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdvancedSettingsArea;
