import { JsonLd } from 'react-schemaorg';
import { Organization } from 'schema-dts';
import { SITE_URL } from './constants';

const EntitySchema = ({
	entityName,
	type,
	sameAs = []
}: {
	entityName: string;
	type: string;
	sameAs?: string[];
}) => {
	return (
		<JsonLd<Organization>
			item={{
				'@context': 'https://schema.org',
				'@type': type as any,
				sameAs: sameAs,
				name: entityName,
				description: '',
				url: SITE_URL,
				foundingDate: '2021'
			}}
		/>
	);
};

export default EntitySchema;
