import processSvg from './processSvg';

const svgProcessor = (svg: string | Element): string => {
	if (typeof svg === 'string') {
		let parser = new DOMParser();
		svg = parser.parseFromString(svg, 'image/svg+xml').documentElement;
	}

	if (svg.tagName === 'svg') {
		return processSvg(svg).outerHTML;
	} else {
		throw new Error(`Expected svg element, got ${svg.tagName} element.`);
	}
};

export default svgProcessor;
