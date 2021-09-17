import { faCheckCircle } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { TextInput } from '../../components/Inputs/TextInput';
import { Navbar } from '../../components/Navbar/Navbar';
import { useResetPasswordMutation } from '../../graphql';

const ForgotPassword = () => {
	const { code }: { code: string } = useParams();

	const [formValues, setFormValues] = useState({
		password: '',
		confirmPassword: '',
		email: ''
	});

	const [error, setError] = useState<string | null>(null);

	const [resetPassword, resetPasswordData] = useResetPasswordMutation();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		setError(null);

		const passwordsMatch =
			formValues.password === formValues.confirmPassword;

		if (!passwordsMatch) {
			setError('Passwords do not match.');
			return;
		}

		resetPassword({
			variables: {
				newCredentials: {
					token: code,
					newPassword: formValues.password,
					email: formValues.email
				}
			}
		});
	};

	const onChange = (
		val: string,
		name: 'email' | 'password' | 'confirmPassword'
	) => {
		setFormValues({ ...formValues, [name]: val });
	};

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Helmet>
				<title>rateit | Reset Your Password</title>
				<meta name="description" content="Login to rateit" />
			</Helmet>
			<Navbar showLogin={false} />
			<div className="mb-auto mt-2 m-auto lg:max-w-screen-lg w-full lg:p-8 p-4">
				{!resetPasswordData.data && (
					<>
						<h1 className="font-medium font-sans text-3xl mb-8">
							Reset Your Password
						</h1>
						<p className="text-light opacity-70 leading-loose my-8">
							Your new password must be unique from previously
							used passwords.
						</p>
						<form onSubmit={onSubmit}>
							<TextInput
								name="email"
								type="email"
								className="my-8"
								required
								value={formValues.email}
								setValue={val => onChange(val, 'email')}
								label="Email Address"
							/>
							<TextInput
								name="password"
								type="password"
								required
								className="my-8"
								value={formValues.password}
								setValue={val => onChange(val, 'password')}
								label="New Password"
							/>{' '}
							<TextInput
								name="confirmPassword"
								type="password"
								required
								className="my-8"
								value={formValues.confirmPassword}
								setValue={val =>
									onChange(val, 'confirmPassword')
								}
								label="Confirm Password"
							/>
							{error && <p className="text-red-500">{error}</p>}
							<button
								disabled={resetPasswordData.loading}
								type="submit"
								className="rounded-lg text-white w-full mt-8 p-3 transition-all btn font-medium"
							>
								Reset
							</button>
							{resetPasswordData.error && (
								<p className="text-red-500 mt-4 text-center font-medium">
									The link is expired or invalid. Please
									request a new link or try again later.
								</p>
							)}
							{resetPasswordData.loading && (
								<LoadingCircle loading={true} />
							)}
						</form>
					</>
				)}
				{resetPasswordData.data &&
					resetPasswordData.data.resetPassword === true && (
						<div className="flex flex-col justify-center items-center">
							<FontAwesomeIcon
								icon={faCheckCircle}
								size="3x"
								className="mb-4 text-primary"
							/>
							<h4 className="text-center text-lg font-medium">
								Your password has been reset! You can now login
								with your new password.
							</h4>
							<Link
								to="/login"
								className="rounded-lg text-white w-32 mt-8 p-3 transition-all btn font-medium text-center"
							>
								Login
							</Link>
						</div>
					)}
			</div>
			<Footer />
		</div>
	);
};

export default ForgotPassword;
