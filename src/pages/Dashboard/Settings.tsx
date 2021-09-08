import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TextInput } from '../../components/Inputs/TextInput';
import { UserSelectors } from '../../redux/User/selectors';
import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTimes } from '@fortawesome/pro-light-svg-icons';

const Settings = () => {
	const user = UserSelectors.useSelectUser()!;
	const [formValues, setFormValues] = useState<{
		fullName: string;
		birthday: Date;
	}>({
		fullName: user.fullName ?? '',
		birthday: new Date()
	});

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

			<form>
				<TextInput
					className="mt-8"
					type="text"
					name="fullName"
					value={formValues.fullName}
					setValue={val =>
						setFormValues({ ...formValues, fullName: val })
					}
					label="Full Name"
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
					className="mt-3 w-full lg:w-1/3 h-12"
					clearIcon={<FontAwesomeIcon icon={faTimes} />}
					calendarClassName="p-4"
					value={formValues.birthday}
				/>
			</form>
		</div>
	);
};

export default Settings;
