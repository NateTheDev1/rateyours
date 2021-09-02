import { FormEvent, useState } from 'react';
import { TextInput } from '../../components/Inputs/TextInput';
import { useAddReviewMutation } from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';

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
	const [formValues, setFormValues] = useState({
		title: '',
		body: '',
		tags: [],
		rating: 5
	});
	const [formError, setFormError] = useState<null | string>(null);
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
		});
	};

	return (
		<div className="p-6 mb-8">
			<h3>Write a review for {entityName}</h3>
			<form
				onSubmit={onSubmit}
				className={`${addReviewData.loading && 'opacity-50'}`}
			>
				<TextInput
					name="Title"
					type="text"
					label="Title"
					className="mt-4"
					autoComplete="off"
					value={formValues.title}
					setValue={val => onChange(val, 'title')}
					required={true}
				/>
			</form>
		</div>
	);
};

export default NewReview;
