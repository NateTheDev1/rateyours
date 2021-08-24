import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { TextInput } from '../../components/Inputs/TextInput';
import { Navbar } from '../../components/Navbar/Navbar';

const Login = () => {
	const [formValues, setFormValues] = useState({ email: '', password: '' });

	const onChange = (val: string, name: 'email' | 'password') => {
		setFormValues({ ...formValues, [name]: val });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="min-h-screen overflow-hidden">
			<Navbar showLogin={false} />
			<div className="login min-h-screen mt-14">
				<h4 className="font-medium text-center text-xl mb-8">
					Log In To{' '}
					<span className="text-primary font-bold">rateit</span>
				</h4>
				<div className="border border-gray-200 max-w-xl m-auto shadow-lg p-10">
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
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
