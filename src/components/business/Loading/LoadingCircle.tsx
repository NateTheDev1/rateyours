import ClipLoader from 'react-spinners/ClipLoader';

export const LoadingCircle = ({ loading }: { loading: boolean }) => {
	return (
		<div className="w-full flex justify-center mt-12">
			<ClipLoader loading={loading} color={'#10B981'} />
		</div>
	);
};
