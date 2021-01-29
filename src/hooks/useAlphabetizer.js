import { useMemo } from "react";

import { DEFAULT_PREFIX_VALUE, DEFAULT_BLANK_VALUE } from '../utilities/constants';
import getNumberMap from '../utilities/getNumberMap';
import getSpecialCharsMap from '../utilities/getSpecialCharsMap';

function useAlphabetizer({
	inputValue,
	prefixValue,
	blankValue,
	wordMapValue,
	spacesBetweenEmojiValue,
}) {
	const numberMap = useMemo(() => getNumberMap(), []);
	const specialCharsMap = useMemo(() => getSpecialCharsMap(prefixValue), [prefixValue]);

	const alphabetized = useMemo(() => {
		return inputValue
			.replace(/\w+/g, (match) => {
				if (wordMapValue[match.toLowerCase()]) {
					return wordMapValue[match.toLowerCase()]; // Replaces words.
				}

				return match.replace(/([A-z])+?/g, `:${prefixValue}$1:`); // Replaces letters.
			})
			.replace(/([0-9])+?/g, (match) => numberMap[match]) // Replaces numbers.
			.replace(/([^\S\r\n])+?/g, blankValue) // Replace spaces.
			.replace(/([?!#@])+?/g, (match) => specialCharsMap[match]) // Replaces special mappings.
			.replace(/(::)+?/g, `${spacesBetweenEmojiValue ? ": :" : "::"}`); // Adds optional spacing between emojis.
	}, [
		numberMap,
		specialCharsMap,
		inputValue,
		prefixValue,
		blankValue,
		wordMapValue,
		spacesBetweenEmojiValue,
	]);
	const alphabetizedPreview = useMemo(() => {
		if (prefixValue !== DEFAULT_PREFIX_VALUE ||
			Object.keys(wordMapValue).length !== 0 ||
			blankValue !== DEFAULT_BLANK_VALUE) {
			return null;
		}

		const lowerCaseLetters = [...Array(26)]
			.map((val, i) => String.fromCharCode(i + 65).toLowerCase());
		const allSupportedEmoji = [
			blankValue,
			...Object.values(wordMapValue),
			...Object.values(specialCharsMap),
			...Object.values(numberMap),
			...lowerCaseLetters.map((letter) => `:${prefixValue}${letter}:`)
		];

		const emojiNames = alphabetized.split(":")
			.filter(Boolean)
			.map((emojiName) => emojiName.toLowerCase());
		return emojiNames.map((emojiName) => {
			if (!allSupportedEmoji.includes(`:${emojiName}:`)) {
				return emojiName.split('');
			}

			return `https://assets.codepen.io/1177378/${emojiName}.png`;
		});
	}, [
		numberMap,
		specialCharsMap,
		alphabetized,
		prefixValue,
		blankValue,
		wordMapValue,
	]);

	return [alphabetized, alphabetizedPreview];
}

export default useAlphabetizer;
