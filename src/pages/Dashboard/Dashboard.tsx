import { Helmet } from 'react-helmet';

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Helmet>
				<title>rateit | Dashboard</title>
				<meta name="description" content="rateit user dashboard" />
			</Helmet>
		</div>
	);
};

export default Dashboard;
