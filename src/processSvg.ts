import { generateRandomId } from './utils';

type Dict = { [key: string]: string };

const processSvg = (svg: Element): Element => {
	const originalToGenerated: Dict = {};
	const styleCollection = svg.getElementsByTagName('style');

	const styleLen = styleCollection.length;

	// Iterate over all the style tags
	for (let i = 0; i < styleLen; i++) {
		const styleElem = styleCollection[i] as HTMLStyleElement;
		const cssRules = Array.from(styleElem.sheet.rules);
		// InnerHTML doesn't change by itself when changing the rules
		let styleInnerHtml = '';

		// generate random class name
		cssRules.forEach((e: CSSStyleRule) => {
			const original = e.selectorText;
			const generated = original + generateRandomId();
			originalToGenerated[original] = generated;

			e.selectorText = generated;
			styleInnerHtml += e.cssText;
		});
		styleElem.innerHTML = styleInnerHtml;
	}

	// Loop through all the children
	const tagCollection = svg.getElementsByTagName('*');
	const tagLen = tagCollection.length;
	for (let i = 0; i < tagLen; i++) {
		const elem = tagCollection[i];

		const classList = elem.classList;
		classList.forEach((e) => {
			if ('.' + e in originalToGenerated) {
				classList.replace(e, originalToGenerated['.' + e].slice(1));
			}
		});
	}
	return svg;
};

export default processSvg;
