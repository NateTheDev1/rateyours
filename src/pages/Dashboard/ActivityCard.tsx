import { GetUserActivityQuery } from '../../graphql';

const AcitivityCard = ({
	review
}: {
	review: GetUserActivityQuery['getUserActivity']['reviews'][0];
}) => {
	return (
		<div className="rounded-lg shadow-md p-4 my-4">
			<h4>{review?.title}</h4>
		</div>
	);
};

export default AcitivityCard;
