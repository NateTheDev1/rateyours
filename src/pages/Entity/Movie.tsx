import { Movie as MovieType } from './parseEntity';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';

const Movie = ({ movie, title }: { movie: MovieType; title: string }) => {
	const [hideImage, setHideImage] = useState(false);

	return (
		<div className="mt-4 mb-4 flex">
			{!hideImage && (
				<LazyLoadImage
					src={movie.posterUrl}
					alt={title}
					effect="blur"
					onError={() => setHideImage(true)}
				/>
			)}
			<div className="mt-4 flex flex-col items-start ml-4">
				<p className="font-medium opacity-50 uppercase mt-4">
					{movie.runtime} minutes
				</p>
				<p className="font-medium opacity-50 text-md uppercase mt-4">
					cast
				</p>
				<p className="font-medium text-sm opacity-50 mt-4">
					{movie.actors}
				</p>

				<p className="font-medium text-sm opacity-50 mt-4">
					Directed By {movie.director}
				</p>
			</div>
		</div>
	);
};

export default Movie;
