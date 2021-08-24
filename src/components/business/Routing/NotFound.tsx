import { useHistory } from 'react-router-dom';

const NotFound = () => {
	const history = useHistory();

	history.replace('/');

	return <></>;
};

export default NotFound;
