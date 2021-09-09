//@ts-ignore
import randomColor from 'randomcolor';

export const TAG_COLORS_CONFIG: { [key: string]: string } = {
	music: randomColor({ luminosity: 'dark' }),
	podcasts: randomColor({ luminosity: 'dark' }),
	businesses: randomColor({ luminosity: 'dark' }),
	teachers: randomColor({ luminosity: 'dark' }),
	schools: randomColor({ luminosity: 'dark' }),
	products: randomColor({ luminosity: 'dark' }),
	books: randomColor({ luminosity: 'dark' }),
	movies: randomColor({ luminosity: 'dark' }),
	people: randomColor({ luminosity: 'dark' }),
	countries: randomColor({ luminosity: 'dark' }),
	games: randomColor({ luminosity: 'dark' }),
	cities: randomColor({ luminosity: 'dark' })
};

export const getTagColor = (type: string) => {
	console.log(TAG_COLORS_CONFIG[type as any], type);
	return TAG_COLORS_CONFIG[type.toLowerCase() as any];
};
