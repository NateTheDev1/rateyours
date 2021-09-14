import { useHistory } from 'react-router';
import { City as CityType } from './parseEntity';

const City = ({ city }: { city: CityType }) => {
	const history = useHistory();

	return (
		<div className="mt-4 mb-4 flex">
			<p className="font-medium mt-4 opacity-70">
				Located in{' '}
				<span
					className="underline cursor-pointer"
					onClick={() =>
						history.push('/search/results/entity/' + city.countryId)
					}
				>
					{city.countryName}
				</span>
			</p>
		</div>
	);
};

export default City;
