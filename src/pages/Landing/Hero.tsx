//@ts-ignore
import TextLoop from 'react-text-loop';

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
	return (
		<div className="bg-darkgray">
			<div className=" max-w-screen-xl m-auto h-96 flex justify-between">
				<div className="w-3/5 flex flex-col p-16">
					<h1 className="text-primary text-5xl font-bold leading-normal mb-4">
						Get accurate information with{' '}
						<span className="text-white font-black">rateit.</span>
					</h1>
					<p className="text-gray-300 text-xl mb-8">
						Read and write your own reviews on almost anything from
						businesses, books, movies, music, teachers, and more.
					</p>
					<button className="p-4 rounded-md bg-green-500 text-white h-10 flex items-center w-52 justify-center font-medium text-sm hover:opacity-90 transition">
						Create An Account
					</button>
				</div>
				<div className="flex justify-center items-center w-2/5">
					<div
						className="bg-white flex justify-center items-center h-2/3"
						style={{ width: '100%' }}
					>
						<h3 className="text-black font-black text-2xl">
							Read about{' '}
							<TextLoop interval={2000}>
								{textLoopList.map((text, key) => (
									<p
										className="font-black text-primary text-2xl"
										key={key}
									>
										{text}
									</p>
								))}
							</TextLoop>
							.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
