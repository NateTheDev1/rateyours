import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Body = () => {
	const history = useHistory();
	const [searchQuery, setSearchQuery] = useState('');

	const onSearch = (e?: FormEvent) => {
		if (e) {
			e.preventDefault();
		}

		history.push('/search/results/?query=' + searchQuery);
	};

	return (
		<div className="flex flex-col items-center justify-center max-w-screen-lg m-auto lg:p-0 p-4">
			<Helmet>
				<title>Rateit | Leave a rating on anything</title>
				<meta
					name="description"
					content="Rateit is your one stop shop to let everyone know how you rate everyday things such as businesses, schools, credit cards, food products, and more."
				/>
			</Helmet>
			<h2 className="font-bold lg:text-3xl text-xl mt-14 text-center">
				Search over 20 categories to get information about anything
			</h2>
			<div className="search-form flex items-center bg-gray-200 rounded-3xl px-4 py-4 mt-8 w-full">
				<FontAwesomeIcon icon={faSearch} className="mr-2 opacity-50" />

				<form
					className="flex items-center"
					style={{ width: '100%' }}
					onSubmit={onSearch}
				>
					<input
						type="text"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						style={{ width: '100%' }}
						placeholder="Search for something"
						className="bg-gray-200 lg:text-lg text-md outline-none font-medium"
					/>
				</form>
			</div>
			<button
				onClick={() => onSearch()}
				className="p-4 mt-8 rounded-md bg-green-500 text-white h-10 flex items-center w-40 justify-center font-medium text-sm hover:opacity-90 transition"
			>
				Search
			</button>
			<div className="about mt-36">
				<h2 className="font-bold lg:text-4xl text-2xl text-center mb-8">
					What are we all about?
				</h2>
				<p className="text-center leading-loose font-medium lg:text-lg text-md opacity-50 mb-12">
					We are a tool you can use to express your opinion about
					everyday things such as business, products, music and more.
					Along wit this, rateit can also act as your own source of
					truth for finding information on the same things as well. At
					rateit we hold a quality standard to our team to bring
					uncensored raw information and put it in the ands of the
					people.
				</p>
			</div>
			<div className="stories flex flex-col mb-20 mt-12 justify-center items-center">
				<div className="story lg:flex flex-col">
					<h4 className="font-medium text-primary lg:text-2xl text-xl w-3/5 lg:mb-0 mb-8">
						Truthful Information
					</h4>
					<p className="leading-loose">
						We are dedicated to bringing you the information you
						need without hiccups and will work hard to make reading
						reviews on rateit something you can trust. Along with
						reading other user's reviews, you can trust our team of
						verified reviewers to get you a guaranteed organic
						opinion.
					</p>
				</div>
				<hr className="w-full my-14" />

				<div className="story lg:flex flex-col">
					<h4 className="font-medium text-primary lg:text-2xl text-xl w-3/5 lg:mb-0 mb-8">
						Free Information
					</h4>
					<p className="leading-loose">
						Our promise to you is to never censor or remove poor
						ratings like other sites may do. At rateit we will work
						hard to stop automated reviewers or investigate fake
						reviews to ensure the best experience for our users.
					</p>
				</div>
				<hr className="w-full my-14" />

				<div className="story lg:flex flex-col">
					<h4 className="font-medium text-primary lg:text-2xl text-xl w-3/5 lg:mb-0 mb-8">
						Creating Change
					</h4>
					<p className="leading-loose">
						This platform is not meant to deter you away from a
						business or product, but it is meant to create change in
						the areas that need it the most. On our site we reach
						out out to these business, products, people, and more to
						show them what people are saying and how things can be
						changed for the better. Whether you are leaving a review
						or reading a review, you can make an impact.
					</p>
				</div>
			</div>
			<div className="sponsored mt-24">
				<h2 className="font-bold lg:text-4xl text-2xl text-center mb-8">
					Do you have a passion for spreading authentic information?
				</h2>
				<p className="text-center leading-loose font-medium text-md opacity-30 mb-8">
					Our Partner Program
				</p>
				<p className="text-center leading-loose font-medium text-lg opacity-50 mb-12">
					If you have a passion for spreading authentic and truthful
					information in a free environment we are looking for people
					like you! We are looking for people to join us and our
					partner program to be a part of a team that strives to bring
					quality information to our users.
					<br></br>
					<span>
						<Link to="/partners" className="underline">
							Want to learn more?
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
};
