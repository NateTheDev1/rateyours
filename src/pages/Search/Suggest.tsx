import { useState } from 'react';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { TextInput } from '../../components/Inputs/TextInput';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAddCategoryMutation } from '../../graphql';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const Suggest = () => {
	const history = useHistory();
	const [addCategory, addCategoryData] = useAddCategoryMutation();
	const [formValues, setFormValues] = useState({ title: '', caption: '' });
	const [formError, setFormError] = useState<null | string>(null);

	const onChange = (val: string, name: 'title' | 'caption') => {
		setFormValues({ ...formValues, [name]: val });
	};

	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormError(null);

		addCategory({
			variables: {
				category: {
					title: formValues.title,
					caption: formValues.caption,
					iconKey: '',
					approved: false
				}
			}
		})
			.then(res => {
				if (res.data) {
					setSubmitted(true);
					// TODO: add snack notification
					toast.success(
						'Your request to add ' +
							formValues.title +
							' as a category has been sent! Redirecting you in 5 seconds.',
						{ className: 'text-sm' }
					);
					setFormValues({ title: '', caption: '' });
					setTimeout(() => {
						history.push('/categories');
					}, 5000);
				} else {
					setFormError(
						'We could not complete your request. Please try again later.'
					);
				}
			})
			.catch(err => {
				console.error(err);
				setFormError(
					'We could not complete your request. Please try again.'
				);
			});
	};

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Navbar />
			<div className="categories mb-auto mt-2 max-w-5xl m-auto p-8">
				<section className="justify-start max-w-7xl">
					<h2 className="font-bold text-2xl mt-14">
						Suggest a new category
					</h2>

					<form
						className="shadow-md w-full border border-gray-200 p-8 mt-12"
						onSubmit={handleSubmit}
					>
						<p className="mt-4 text-lg font-medium text-primary mb-4">
							How it works
						</p>
						<p className="font-light leading-loose">
							After you suggest a new category, you may wait 3-5
							business days or more for your category to be
							approved and added to our system. If your category
							is denied you may receive an email explaining why
							the decision was made to not add your category at
							this time.
						</p>
						<TextInput
							name="title"
							type="text"
							label="Category title *"
							className="mt-12"
							autoComplete="off"
							value={formValues.title}
							setValue={val => onChange(val, 'title')}
							required={true}
						/>
						<TextInput
							name="caption"
							type="text"
							label="Category caption *"
							className="mt-12 mb-8"
							autoComplete="off"
							value={formValues.caption}
							setValue={val => onChange(val, 'caption')}
							required={true}
						/>
						{addCategoryData.loading ? (
							<LoadingCircle loading={true} />
						) : (
							<button
								disabled={
									formValues.title.length < 1 ||
									formValues.caption.length < 1 ||
									submitted
								}
								type="submit"
								className="rounded-full text-white w-full mt-8 p-3 transition-all btn font-medium"
							>
								Submit Suggestion
							</button>
						)}
						{formError && (
							<p className="text-red-700 font-light text-sm font-sans text-center mt-4">
								{formError}
							</p>
						)}
					</form>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Suggest;
