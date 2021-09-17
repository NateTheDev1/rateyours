import { faInbox } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { TextInput } from '../../components/Inputs/TextInput';
import { Navbar } from '../../components/Navbar/Navbar';
import { useSendPasswordResetMutation } from '../../graphql';

const ForgotPassword = () => {
	const [forgotPassword, forgotPasswordData] = useSendPasswordResetMutation();
	const [email, setEmail] = useState('');

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		forgotPassword({ variables: { email } });
	};

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Helmet>
				<title>rateit | Forgot Password</title>
				<meta name="description" content="Login to rateit" />
			</Helmet>
			<Navbar showLogin={false} />
			<div className="mb-auto mt-2 m-auto lg:max-w-screen-lg w-full lg:p-8 p-4">
				{!forgotPasswordData.data && (
					<>
						<h1 className="font-medium font-sans text-3xl">
							Reset Your Password
						</h1>
						<p className="text-light opacity-70 leading-loose my-8">
							Enter the email associated with your account and we
							will send an email with instructions to reset your
							password. If you no longer have access to your email
							address please contact support.
						</p>
						<form onSubmit={onSubmit}>
							<TextInput
								name="email"
								type="email"
								className="mt-8"
								value={email}
								setValue={setEmail}
								required
								label="Email Address"
							/>
							{forgotPasswordData.error && (
								<p className="text-red-500">
									A user with this email does not exist.
								</p>
							)}
							<button
								disabled={forgotPasswordData.loading}
								type="submit"
								className="rounded-lg text-white w-full mt-8 p-3 transition-all btn font-medium"
							>
								Confirm
							</button>
						</form>
					</>
				)}
				{forgotPasswordData.data && (
					<div className="flex flex-col justify-center items-center">
						<FontAwesomeIcon
							icon={faInbox}
							size="3x"
							className="mb-4"
						/>
						<h4 className="text-center text-lg font-medium">
							Please check your inbox for our email instructions
							to finish resetting your password.
						</h4>
						<Link
							to="/login"
							className="rounded-lg text-white w-32 mt-8 p-3 transition-all btn font-medium text-center"
						>
							Okay
						</Link>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default ForgotPassword;
