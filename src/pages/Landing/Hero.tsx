//@ts-ignore
import { useHistory } from 'react-router-dom';
import TextLoop from 'react-text-loop';
import { UserSelectors } from '../../redux/User/selectors';

const textLoopList = [
	'Teachers',
	'Businesses',
	'Schools',
	'Food',
	'Movies',
	'Music',
	'Games',
	'Communities',
	'Groups',
	'Products'
];

const Hero = () => {
	const loggedIn = UserSelectors.useSelectAuthenticated();
	const history = useHistory();

	return (
		<div className="bg-darkgray">
			<div className="max-w-screen-xl m-auto flex  justify-between lg:flex-row flex-col lg:p-8 p-2">
				<div className="lg:w-3/5 w-full flex flex-col lg:p-16 p-8">
					<div className="flex lg:hidden justify-center items-center lg:w-2/5 lg:mb-0 mb-8 ">
						<div className="bg-white w-full flex justify-center items-center h-72">
							<h3 className="text-black font-black text-2xl">
								Read about{' '}
								<TextLoop interval={2000}>
									{textLoopList.map((text, key) => (
										<p
											className="font-black text-primary text-2xl"
											key={key}
										>
											{text}.
										</p>
									))}
								</TextLoop>
							</h3>
						</div>
					</div>
					<h1 className="text-primary lg:text-5xl text-4xl font-bold leading-loose mb-4">
						Get accurate information with{' '}
						<span className="text-white font-black">rateit.</span>
					</h1>
					<p className="text-gray-300 text-xl mb-8 leading-loose">
						Read and write your own reviews on almost anything from
						businesses, books, movies, music, teachers, and more.
					</p>
					{!loggedIn && (
						<button
							onClick={() => history.push('/signup')}
							className="p-4 rounded-md bg-green-500 text-white h-10 flex items-center w-52 justify-center font-medium text-sm hover:opacity-90 transition"
						>
							Create An Account
						</button>
					)}
				</div>
				<div className="lg:flex hidden justify-center items-center lg:w-2/5 w-full">
					<div className="lg:bg-white bg-darkgray w-full flex justify-center items-center h-2/3">
						<h3 className="lg:text-black text-white font-black lg:text-2xl text-xl">
							Read about{' '}
							<TextLoop interval={2000}>
								{textLoopList.map((text, key) => (
									<p
										className="font-black text-primary lg:text-2xl text-xl"
										key={key}
									>
										{text}.
									</p>
								))}
							</TextLoop>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
