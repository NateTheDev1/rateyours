import { JsonLd } from 'react-schemaorg';
import { Organization } from 'schema-dts';
import { SITE_URL } from './constants';

const BaseSchema = () => {
	return (
		<JsonLd<Organization>
			item={{
				'@context': 'https://schema.org',
				'@type': 'Organization',
				sameAs: [],
				name: 'rateit',
				description:
					'rateit is your one stop shop to let everyone know how you rate everyday things such as businesses, schools, credit cards, food products, your therapist, and more.',
				url: SITE_URL,
				foundingDate: '2021'
			}}
		/>
	);
};

export default BaseSchema;
