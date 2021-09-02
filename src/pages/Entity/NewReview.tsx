import {
	faExclamationCircle,
	faPlus,
	faTimes
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { TextInput } from '../../components/Inputs/TextInput';
import { useAddReviewMutation } from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';
import StartReview from './startReviewEmitter';

const NewReview = ({
	entityName,
	hasReviewed,
	entityType,
	entityId
}: {
	entityName: string;
	hasReviewed: boolean;
	entityType: string;
	entityId: number;
}) => {
	const [addReview, addReviewData] = useAddReviewMutation();
	const [formValues, setFormValues] = useState<{
		title: string;
		body: string;
		tags: string[];
		rating: number;
	}>({
		title: '',
		body: '',
		tags: [],
		rating: 5
	});
	const [currentTag, setCurrentTag] = useState<null | string>(null);
	// const [formError, setFormError] = useState<null | string>(null);
	const userId = UserSelectors.useSelectUserId()!;

	const onChange = (val: string, name: string) => {
		setFormValues({ ...formValues, [name]: val });
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		addReview({
			variables: {
				hasReviewed,
				review: {
					createdBy: userId,
					title: formValues.title,
					body: formValues.body,
					type: entityType,
					tags: formValues.tags,
					rating: formValues.rating,
					entity: entityId
				}
			}
		}).then(res => {
			if (res.data) {
				StartReview.emit('ENDED_REVIEW', res.data.addReview);
				setFormValues({
					title: '',
					body: '',
					tags: [],
					rating: 5
				});
			}
		});
	};

	const removeTag = (tag: string) => {
		const newTags = formValues.tags.filter(tagold => tagold !== tag);
		setFormValues({ ...formValues, tags: newTags });
	};

	return (
		<div className="p-6 border border-gray-100">
			{hasReviewed && (
				<div className="bg-red-500 mb-4 mt-4 text-sm text-white p-3 rounded-lg">
					<p className="leading-loose font-bold">
						<FontAwesomeIcon
							icon={faExclamationCircle}
							className="mr-2"
						/>
						Note: You have already reviewed this profile. Any
						further reviews will delete your previous review of this
						profile. Our policy only allows one review at a time per
						user.
					</p>
				</div>
			)}
			<h3 className="mt-8">
				Write a review for{' '}
				<span className="text-primary">{entityName}</span>
			</h3>

			<form
				onSubmit={onSubmit}
				className={`mb-8 ${addReviewData.loading && 'opacity-50'}`}
			>
				<TextInput
					name="Title"
					type="text"
					label="Title"
					className="mt-4 mb-4"
					autoComplete="off"
					value={formValues.title}
					setValue={val => onChange(val, 'title')}
					required={true}
				/>
				<div className="flex flex-col">
					<label
						htmlFor="body"
						className="font-light opacity-50 text-sm font-sans"
					>
						What do you think?
					</label>
					<textarea
						value={formValues.body}
						onChange={e => onChange(e.target.value, 'body')}
						name="body"
						id="body"
						rows={6}
						className="mt-4 w-full border border-gray-300 rounded-md outline-none focus:outline-none p-4 transition-colors text-sm font-sans bg-gray-100 focus:bg-white resize-none"
					></textarea>
				</div>
				<div className="flex flex-col">
					<TextInput
						label="Rating (1-5)"
						className="mt-3"
						type="number"
						name="rating-min"
						value={String(formValues.rating)}
						setValue={val => {
							if (Number(val) > 5) {
								setFormValues({ ...formValues, rating: 5 });
							} else if (Number(val) < 1) {
								setFormValues({ ...formValues, rating: 1 });
							} else {
								setFormValues({
									...formValues,
									rating: Number(val)
								});
							}
						}}
					/>
				</div>
				<div className="flex flex-col mt-4">
					<label
						htmlFor="tag"
						className="font-light opacity-50 text-sm font-sans"
					>
						Tags ({formValues.tags.length})
					</label>
					<div className="flex flex-wrap">
						{formValues.tags.map((tag, key) => (
							<div
								key={key}
								className="mt-4 mr-4 flex items-center lg:justify-around justify-center bg-primary rounded-full text-white font-bold text-center outline-none focus:outline-none p-2 lg:min-w-0 min-w-1/5 lg:text-md text-xs "
							>
								{tag}
								<FontAwesomeIcon
									onClick={() => removeTag(tag)}
									icon={faTimes}
									className="hover:opacity-50 cursor-pointer ml-2"
								/>
							</div>
						))}
						{currentTag !== null && (
							<input
								onKeyDown={e => {
									if (e.key === 'Enter') {
										setFormValues({
											...formValues,
											tags: [
												...formValues.tags,
												currentTag
											]
										});
										setCurrentTag(null);
									}
								}}
								value={currentTag}
								onChange={e => setCurrentTag(e.target.value)}
								type="text"
								name="tag"
								id="tag"
								className="mt-4 mr-4 bg-gray-200 rounded-full w-20 text-black font-bold text-center outline-none focus:outline-none p-2 text-xs "
							/>
						)}
						<div
							onClick={() => {
								if (currentTag !== null) {
									setFormValues({
										...formValues,
										tags: [...formValues.tags, currentTag]
									});
									setCurrentTag('');
								} else {
									setCurrentTag('');
								}
							}}
							className="add-tag rounded-full border transition hover:opacity-70 cursor-pointer bg-gray-100 w-12 h-8 items-center flex justify-center mt-4"
						>
							<FontAwesomeIcon icon={faPlus} />
						</div>
					</div>
				</div>
				<div className="flex items-center lg:flex-row">
					<button
						onClick={() => StartReview.emit('CANCEL_REVIEW', {})}
						className="p-4 mr-4 mt-8 rounded-md bg-red-500 text-white h-10 flex items-center w-1/3 justify-center font-medium text-sm hover:opacity-90 transition"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="p-4 mt-8 rounded-md bg-green-500 text-white h-10 flex items-center w-1/3 justify-center font-medium text-sm hover:opacity-90 transition"
					>
						Submit Review
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewReview;
