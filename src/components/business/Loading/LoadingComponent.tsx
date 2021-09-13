import { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { COLORS } from '../colors';

const LoadingComponent = ({ loaderSpeed = 100 }: { loaderSpeed?: number }) => {
	const ref = useRef<any>(null);

	useEffect(() => {
		if (ref !== null) {
			ref.current.continuousStart(0, loaderSpeed);
		}
	}, [ref, loaderSpeed]);

	return (
		<LoadingBar
			color={COLORS.primary}
			ref={ref}
			loaderSpeed={loaderSpeed}
		/>
	);
};

export default LoadingComponent;
