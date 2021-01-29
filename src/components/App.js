import { useState } from "react";

import Header from './Header';
import Main from './Main';
import InputArea from './InputArea';
import OutputArea from './OutputArea';
import PreviewArea from './PreviewArea';
import GithubArea from './GithubArea';
import AdvancedSettingsArea from './AdvancedSettingsArea';

import useAlphabetizer from '../hooks/useAlphabetizer';
import {
  DEFAULT_BLANK_VALUE,
  DEFAULT_PREFIX_VALUE,
  DEFAULT_WORD_MAP_VALUE,
  DEFAULT_SPACES_BETWEEN_EMOJI_VALUE,
} from '../utilities/constants';

const App = () => {
  // Input:
  const [inputValue, setInputValue] = useState("");

  // Settings:
  const [isShowingSettings, setIsShowingSettings] = useState(false);
  const showSettings = () => setIsShowingSettings(true);
  const hideSettings = () => setIsShowingSettings(false);
  const [prefixValue, setPrefixValue] = useState(DEFAULT_PREFIX_VALUE);
  const [blankValue, setBlankValue] = useState(DEFAULT_BLANK_VALUE);
  const [wordMapValue, setWordMapValue] = useState(DEFAULT_WORD_MAP_VALUE);
  const [spacesBetweenEmojiValue, setSpacesBetweenEmojiValue] = useState(DEFAULT_SPACES_BETWEEN_EMOJI_VALUE);

  // Output:
  const [outputValue, previewValue] = useAlphabetizer({
    inputValue,
    prefixValue,
    blankValue,
    wordMapValue,
    spacesBetweenEmojiValue,
  });

  return (
    <>
      <Header />
      <Main>
        <InputArea
          inputValue={inputValue}
          setInputValue={setInputValue}
          showSettings={showSettings}
        />
        <OutputArea
          outputValue={outputValue}
        />
        <PreviewArea
          previewValue={previewValue}
        />
        <GithubArea />
        {isShowingSettings && (
          <AdvancedSettingsArea
            hideSettings={hideSettings}
            prefixValue={prefixValue}
            setPrefixValue={setPrefixValue}
            blankValue={blankValue}
            setBlankValue={setBlankValue}
            wordMapValue={wordMapValue}
            setWordMapValue={setWordMapValue}
            spacesBetweenEmojiValue={spacesBetweenEmojiValue}
            setSpacesBetweenEmojiValue={setSpacesBetweenEmojiValue}
          />
        )}
      </Main>
    </>
  );
};

export default App;
