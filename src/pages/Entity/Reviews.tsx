export const Reviews = ({
	entityId,
	entityName
}: {
	entityName: string;
	entityId: number;
}) => {
	return (
		<div className="bg-gray-100 p-8">
			<h3 className="font-light font-sans text-lg">
				Read reviews about{' '}
				<span className="text-primary font-bold">{entityName}</span>
			</h3>
		</div>
	);
};

export default Reviews;
