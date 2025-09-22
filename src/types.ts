export interface ApiResponse {
	copyright: string;
	response: SearchResponse;
}

export interface SearchResponse {
	docs: Item[];
	meta: { hits: number };
}

export interface Item {
	abstract: string;
	web_url: string;
	snippet: string;
	lead_paragraph: string;
	print_section: string;
	print_page: string;
	source: string;
	multimedia: Multimedum[];
	headline: Headline;
	keywords: Keyword[];
	pub_date: string;
	document_type: string;
	news_desk: string;
	section_name: string;
	subsection_name: string;
	byline: Byline;
	type_of_material: string;
	_id: string;
	word_count: number;
	uri: string;
}

export interface Multimedum {
	rank: number;
	subtype: string;
	caption: string;
	credit: string;
	type: string;
	url: string;
	height: number;
	width: number;
	subType: string;
	crop_name: string;
	legacy: Legacy;
}

export interface Legacy {
	xlarge?: string;
	xlargewidth?: number;
	xlargeheight?: number;
	thumbnail?: string;
	thumbnailwidth?: number;
	thumbnailheight?: number;
}

export interface Headline {
	main: string;
	kicker: string;
	content_kicker: string;
	print_headline: string;
	name: string;
	seo: undefined;
	sub: undefined;
}

export interface Keyword {
	name: string;
	value: string;
	rank: number;
	major: string;
}

export interface Byline {
	original: string;
	person: Person[];
	organization: string;
}

export interface Person {
	firstname: string;
	middlename: string;
	lastname: string;
	qualifier: string;
	title: string;
	role: string;
	organization: string;
	rank: number;
}
