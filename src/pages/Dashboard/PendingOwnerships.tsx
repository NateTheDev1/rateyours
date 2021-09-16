import { Link, useHistory } from 'react-router-dom';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import NoContent from '../../components/business/Loading/NoContent';
import { useGetEntityOwnershipRequestsQuery } from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';

export const PendingOwnerships = () => {
	const id = UserSelectors.useSelectUserId()!;
	const { data, loading } = useGetEntityOwnershipRequestsQuery({
		variables: { id }
	});
	const history = useHistory();

	return (
		<div>
			<h2 className="font-bold text-xl mt-8">Your Pending Ownerships</h2>
			<div className="flex-col my-3">
				<p className="leading-loose opacity-50">
					These are entities that you requested to own. They are
					marked as pending. If you no longer see a request or it has
					been pending for more than 2 months your request has been
					denied.
				</p>
				<Link
					to="/support/owning-entities#pending"
					className="underline opacity-50 mt-3"
				>
					What does it mean if it is pending?
				</Link>
				{loading && <LoadingCircle loading={true} />}
				<div className="mt-4">
					{data && data.getEntityOwnershipRequests.length < 1 && (
						<NoContent />
					)}
					{data?.getEntityOwnershipRequests.map((request, key) => (
						<div
							key={key}
							className="border border-gray-100 rounded-md p-4 shadow-sm flex flex-wrap justify-between items-center"
						>
							<div className="mr-4">
								<h4 className="font-medium">
									Ownership requested for entity{' '}
									<span className="font-bold">
										{request?.entity}
									</span>
								</h4>
							</div>
							<div className="flex-col mt-4 lg:mt-0">
								<h4 className="font-medium text-xs uppercase text-yellow-500">
									{request?.approved
										? 'Approved'
										: 'Pending Approval'}
								</h4>
								<button
									onClick={() =>
										history.push(
											'/search/results/entity/' +
												request?.entity
										)
									}
									className="bg-primary text-white font-medium p-2 w-full mt-3 rounded-md shadow-sm transition hover:opacity-80"
								>
									View Entity
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PendingOwnerships;
