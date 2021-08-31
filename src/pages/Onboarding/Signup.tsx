import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { TextInput } from '../../components/Inputs/TextInput';
import { Navbar } from '../../components/Navbar/Navbar';
import { useCreateUserMutation } from '../../graphql';
import { Helmet } from 'react-helmet';

const Signup = () => {
	const [signupMutation, signupData] = useCreateUserMutation();
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
		fullName: '',
		confirmPassword: ''
	});

	const [formError, setFormError] = useState<null | string>(null);

	const onChange = (
		val: string,
		name: 'email' | 'password' | 'fullName' | 'confirmPassword'
	) => {
		setFormValues({ ...formValues, [name]: val });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setFormError(null);
		e.preventDefault();

		signupMutation({
			variables: {
				user: {
					email: formValues.email,
					fullName: formValues.fullName,
					password: formValues.password
				}
			}
		})
			.then(res => {
				if (res.data) {
					console.log(res.data);
				} else {
					setFormError('A user may already exist with this email.');
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
			<Helmet>
				<title>rateit | Signup</title>
				<meta name="description" content="Signup for rateit" />
			</Helmet>
			<Navbar showLogin={false} />
			<div className="login mb-auto mt-14">
				<h4 className="font-medium text-center text-xl mb-8">
					Sign Up For{' '}
					<span className="text-primary font-bold">rateit</span>
				</h4>
				<div className="border border-gray-200 max-w-lg m-auto shadow-md p-10">
					<form onSubmit={e => handleSubmit(e)}>
						<TextInput
							name="name"
							type="text"
							label="Full Name"
							autoComplete="name"
							value={formValues.fullName}
							setValue={val => onChange(val, 'fullName')}
							required={true}
						/>
						<TextInput
							className="mt-6"
							name="email"
							type="email"
							label="Email*"
							autoComplete="email"
							value={formValues.email}
							setValue={val => onChange(val, 'email')}
							required={true}
						/>
						<TextInput
							className="mt-6"
							name="password"
							type="password"
							label="Password*"
							required={true}
							autoComplete="password"
							value={formValues.password}
							setValue={val => onChange(val, 'password')}
						/>
						<TextInput
							className="mt-6"
							name="confirmPassword"
							type="password"
							label="Confirm Password*"
							autoComplete="password"
							value={formValues.confirmPassword}
							setValue={val => onChange(val, 'confirmPassword')}
						/>
						{formValues.password.length > 0 &&
							formValues.confirmPassword.length > 0 &&
							formValues.confirmPassword !==
								formValues.password && (
								<p className="text-red-700 mt-2 font-light text-sm font-sans">
									Passwords do not match.
								</p>
							)}

						{signupData.loading ? (
							<LoadingCircle loading={true} />
						) : (
							<button
								disabled={
									formValues.email.length < 1 ||
									formValues.password.length < 1 ||
									formValues.password !==
										formValues.confirmPassword
								}
								type="submit"
								className="rounded-full text-white w-full mt-8 p-3 transition-all btn font-medium"
							>
								Sign Up
							</button>
						)}
						{formError && (
							<p className="text-red-700 font-light text-sm font-sans text-center mt-4">
								{formError}
							</p>
						)}
					</form>
				</div>
				<div className="text-center mt-8 font-light text-md font-sans mb-8">
					Already have an account?{' '}
					<Link
						to="/login"
						className="underline font-sans font-light"
					>
						Log In Instead
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Signup;
