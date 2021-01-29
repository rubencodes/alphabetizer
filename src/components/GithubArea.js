import { useEffect } from 'react';
import MainSection from './MainSection';

const GithubArea = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://buttons.github.io/buttons.js';
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<MainSection>
			<div className="githubButtons">
				<a
					className="github-button"
					href="https://github.com/rubencodes/alphabetizer/fork"
					data-color-scheme="no-preference: light; light: light; dark: dark;"
					data-icon="octicon-repo-forked"
					data-size="large"
					data-show-count="true"
					aria-label="Fork rubencodes/alphabetizer on GitHub"
				>
					Fork
			</a>
				<a
					className="github-button"
					href="https://github.com/rubencodes/alphabetizer"
					data-color-scheme="no-preference: light; light: light; dark: dark;"
					data-icon="octicon-star"
					data-size="large"
					data-show-count="true"
					aria-label="Star rubencodes/alphabetizer on GitHub"
				>
					Star
			</a>
			</div>
		</MainSection>
	);
};

export default GithubArea;
