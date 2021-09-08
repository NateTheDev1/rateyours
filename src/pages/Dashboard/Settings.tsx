import { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { TextInput } from '../../components/Inputs/TextInput';
import { UserSelectors } from '../../redux/User/selectors';
import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTimes } from '@fortawesome/pro-light-svg-icons';
import {
	useSendPasswordResetMutation,
	useUpdateUserDetailsMutation
} from '../../graphql';
import { UserActions } from '../../redux/User/actions';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';

const Settings = () => {
	const [updateUser, updateUserData] = useUpdateUserDetailsMutation();
	const [sendPasswordReset, sendPasswordResetData] =
		useSendPasswordResetMutation();
	const fetchUser = UserActions.useFetchUser();
	const user = UserSelectors.useSelectUser()!;
	const [formValues, setFormValues] = useState<{
		fullName: string;
		birthday: Date;
	}>({
		fullName: user.fullName ?? '',
		birthday: new Date()
	});

	const [formError, setFormError] = useState('');
	const [sentPasswordReset, setSendPasswordReset] = useState(false);

	const onSendPasswordReset = () => {
		setSendPasswordReset(true);

		sendPasswordReset({ variables: { email: user.email } });
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		updateUser({
			variables: {
				patch: {
					...formValues,
					userId: user.id!,
					birthday: formValues.birthday.toString()
				}
			}
		})
			.then(res => {
				if (res.data) {
					fetchUser();
				} else {
					setFormError(
						'We were unable to update your account. Please try again.'
					);
				}
			})
			.catch(err => {
				console.error(err);
				setFormError(
					'We were unable to update your account. Please try again.'
				);
			});
	};

	return (
		<div className="dashboard">
			<Helmet>
				<title>rateit | User Settings</title>
				<meta name="description" content="rateit user dashboard" />
			</Helmet>
			<h2 className="font-bold text-xl">Account Settings</h2>
			<p className="font-light leading-loose my-3">
				Here you can update some of your account details.
			</p>
			<form onSubmit={onSubmit}>
				<TextInput
					className="mt-8"
					type="text"
					name="fullName"
					value={formValues.fullName}
					setValue={val =>
						setFormValues({ ...formValues, fullName: val })
					}
					label="Full Name*"
					autoComplete="off"
					required={true}
				/>
				<p className="font-light opacity-50 text-sm mt-8 font-sans">
					Birthday
				</p>
				<DatePicker
					onChange={(val: any) =>
						setFormValues({ ...formValues, birthday: val as any })
					}
					calendarIcon={<FontAwesomeIcon icon={faCalendar} />}
					className="mt-3 w-full lg:w-1/3 h-12 bg-gray-100"
					clearIcon={<FontAwesomeIcon icon={faTimes} />}
					calendarClassName="p-4"
					value={formValues.birthday}
				/>
				<p className="font-light opacity-50 text-sm mt-8 font-sans">
					Account Type (Currently Unable To Change)
				</p>
				<p className="font-light opacity-50 text-sm mt-8 font-sans">
					Password
				</p>
				{!sentPasswordReset && (
					<p
						onClick={onSendPasswordReset}
						className="underline mt-3 font-medium cursor-pointer opacity-70 text-red-500"
					>
						Send password reset
					</p>
				)}
				{sentPasswordReset && (
					<p className="mt-3 font-medium text-primary">
						Password reset sent!
					</p>
				)}
				{sendPasswordResetData.loading && (
					<LoadingCircle loading={true} />
				)}

				{updateUserData.loading ? (
					<LoadingCircle loading={true} />
				) : (
					<button
						disabled={formValues.fullName.length < 1}
						type="submit"
						className=" rounded-lg text-white w-full mt-8 p-3 transition-all btn font-medium"
					>
						Update Account
					</button>
				)}

				{formError && (
					<p className="text-red-700 font-light text-sm font-sans text-center mt-4">
						{formError}
					</p>
				)}
			</form>
		</div>
	);
};

export default Settings;
