import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { TextInput } from '../../components/Inputs/TextInput';
import { Navbar, useQuery } from '../../components/Navbar/Navbar';
import { useLoginMutation } from '../../graphql';
import { Helmet } from 'react-helmet';
import { UserActions } from '../../redux/User/actions';

const Login = () => {
	const query = useQuery();
	const history = useHistory();
	const [loginUser, loginData] = useLoginMutation();
	const [formValues, setFormValues] = useState({ email: '', password: '' });
	const [formError, setFormError] = useState<null | string>(null);
	const loginUserRedux = UserActions.useLogin();

	const onChange = (val: string, name: 'email' | 'password') => {
		setFormValues({ ...formValues, [name]: val });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormError(null);

		loginUser({ variables: { credentials: { ...formValues } } })
			.then(res => {
				if (res.data) {
					loginUserRedux(res.data.login.token);
					if (query.get('redirect')) {
						const redirect = query.get('redirect');
						console.log(redirect);

						if (redirect?.includes('entity-')) {
							const entityId = redirect.split('-')[1];

							history.push(
								'/search/results/entity/' +
									entityId +
									'?reviewing=true'
							);
						}
					} else {
						history.push('/');
					}
				} else {
					setFormError('Email or password is incorrect.');
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
				<title>rateit | Login</title>
				<meta name="description" content="Login to rateit" />
			</Helmet>
			<Navbar showLogin={false} />
			<div className="login mb-auto mt-14">
				<h4 className="font-medium text-center text-xl mb-8 ">
					Log In To{' '}
					<span className="text-primary font-bold">rateit</span>
				</h4>
				<div className="border border-gray-200 max-w-lg m-auto shadow-md p-10">
					<form onSubmit={e => handleSubmit(e)}>
						<TextInput
							name="email"
							type="email"
							label="Email"
							autoComplete="email"
							value={formValues.email}
							setValue={val => onChange(val, 'email')}
							required={true}
						/>
						<TextInput
							className="mt-6"
							name="password"
							type="password"
							label="Password"
							required={true}
							autoComplete="password"
							value={formValues.password}
							setValue={val => onChange(val, 'password')}
						/>
						<div className="font-sans font-light mt-6 text-primary text-right underline">
							<Link to="/password-reset">Forgot Password?</Link>
						</div>
						{loginData.loading ? (
							<LoadingCircle loading={true} />
						) : (
							<button
								disabled={
									formValues.email.length < 1 ||
									formValues.password.length < 1
								}
								type="submit"
								className="rounded-full text-white w-full mt-8 p-3 transition-all btn font-medium"
							>
								Log in
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
					New to <span className="text-primary">rateit?</span>{' '}
					<Link
						to="/signup"
						className="underline font-sans font-light"
					>
						Sign Up Instead
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
