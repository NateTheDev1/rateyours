import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Country as CountryType } from './parseEntity';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Country = ({
	country,
	title
}: {
	country: CountryType;
	title: string;
}) => {
	return (
		<div className="mt-4 mb-4 flex flex-col">
			<LazyLoadImage
				src={country.flag}
				alt={title}
				effect="blur"
				style={{ width: '50px' }}
			/>
			<p className="font-medium mt-4 opacity-70">
				Population of{' '}
				<span className="text-red-500">
					{String(country.population).replace(
						/(.)(?=(\d{3})+$)/g,
						'$1,'
					)}
					{title === 'United States' && 'M'}
				</span>
			</p>
		</div>
	);
};

export default Country;
