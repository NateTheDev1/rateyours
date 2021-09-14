import { useHistory } from 'react-router-dom';
import EntitySchema from '../../components/business/EntitySchema';
import { getTagColor } from '../../components/business/tag-colors-config';
import { SearchQuery } from '../../graphql';

const getEntityType = (type: string) => {
	if (type) {
		if (type === 'Movies') {
			return 'Movie';
		}

		if (type === 'Podcasts') {
			return 'PodcastSeries';
		}

		if (type === 'Businesses') {
			return 'Corporation';
		}
	}
	return type;
};

export const SearchResultEntity = ({
	entity,
	showTag = true
}: {
	entity: SearchQuery['search']['entities'][0];
	showTag?: boolean;
}) => {
	const history = useHistory();

	return (
		<div
			onClick={() => history.push('/search/results/entity/' + entity?.id)}
			className="border rounded-md shadow-lg border-gray-200 p-8 mr-8 bg-white cursor-pointer hover:opacity-50 hover:border-gray-400 transition w-1/5 flex flex-col justify-between"
			style={{ minWidth: '300px' }}
		>
			<EntitySchema
				type={getEntityType(entity!.type as any)}
				entityName={entity!.name}
			/>
			<h4 className="font-bold text-lg">{entity?.name}</h4>
			<p className="opacity-50">{entity?.views} Views</p>
			{showTag && (
				<span
					className="inline-flex items-center justify-center px-3 py-3 text-md mt-4 font-bold leading-none text-red-100 rounded-full"
					style={{ backgroundColor: getTagColor(entity!.type) }}
				>
					{entity?.type}
				</span>
			)}
		</div>
	);
};
