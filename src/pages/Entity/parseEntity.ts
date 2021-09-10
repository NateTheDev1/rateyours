import { Entity } from '../../graphql';

export const parseEntity = (entity: Partial<Entity>) => {
	let extraContent: any = JSON.parse(entity.specialContent ?? '{}');

	return extraContent;
};

export const returnIdentifiedContent = (
	entity: Partial<Entity>
): { type: string } | null => {
	if (entity.type === 'Schools') {
		return parseEntity(entity).college;
	}

	if (entity.type === 'Movies') {
		return parseEntity(entity).movie;
	}

	if (entity.type === 'Cities') {
		return parseEntity(entity).city;
	}

	if (entity.type === 'Countries') {
		return parseEntity(entity).country;
	}

	return null;
};

export type School = {
	websites: string[];
	country: string;
};

export type Movie = {
	title: string;
	year: string;
	runtime: string;
	genres: string[];
	director: string;
	actors: string;
	plot: string;
	posterUrl: string;
};

export type City = {
	countryId: number;
	countryName: string;
};
export type Country = {
	flag: string;
	population: number;
};
