import { Entity } from '../../graphql';

export const parseEntity = (entity: Partial<Entity>) => {
	let extraContent: any = JSON.parse(entity.specialContent ?? '{}');

	return extraContent;
};
