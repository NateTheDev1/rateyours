import {
	Button,
	Dialog,
	DialogActions,
	DialogContent
} from '@material-ui/core';
import { FormEvent, useEffect, useState } from 'react';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import {
	useHasRequestedProfilePriorityQuery,
	useRequestProfilePriorityMutation
} from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';

const ProfilePriorityRequestModal = ({
	open,
	setOpen,
	entityId
}: {
	open: boolean;
	setOpen: (val: boolean) => void;
	entityId: number;
}) => {
	const [why, setWhy] = useState('');
	const userId = UserSelectors.useSelectUserId()!;

	const { data, loading, refetch } = useHasRequestedProfilePriorityQuery({
		variables: { entityId },
		nextFetchPolicy: 'network-only'
	});

	const [requestPriority, requestPriorityData] =
		useRequestProfilePriorityMutation();

	const onSubmit = (e?: FormEvent) => {
		if (e) {
			e.preventDefault();
		}

		requestPriority({
			variables: { request: { entityId, why, requestedBy: userId } }
		}).then(res => {
			if (res.data?.requestProfilePriority === true) {
				setOpen(false);
			}
		});
	};

	useEffect(() => {
		if (open) {
			refetch();
		}
	}, [open]);

	return (
		<Dialog
			maxWidth="md"
			fullWidth
			open={open}
			onClose={() => setOpen(false)}
		>
			<DialogContent>
				{(loading || requestPriorityData.loading) && (
					<LoadingCircle loading={true} />
				)}
				{!loading && data?.hasRequestedProfilePriority === false && (
					<form onSubmit={onSubmit} className="p-4">
						<p className="mb-8 text-xl leading-loose font-medium">
							Tell us why, or you can submit the form blank and
							your request will still be received.
						</p>
						<div className="flex flex-col">
							<label
								htmlFor="body"
								className="font-light opacity-50 text-sm font-sans"
							>
								Why do you want this profile prioritized? (Not
								Required)
							</label>
							<textarea
								value={why}
								onChange={e => setWhy(e.target.value)}
								name="why"
								id="why"
								rows={6}
								className="mt-4 w-full border border-gray-300 rounded-md outline-none focus:outline-none p-4 transition-colors text-sm font-sans bg-gray-100 focus:bg-white resize-none"
							></textarea>
						</div>
					</form>
				)}
				{!loading && data?.hasRequestedProfilePriority === true && (
					<h4 className="text-center">
						Uh oh! You have already requested priority for this
						profile. We have received your request and will handle
						it as soon as possible. You may close this window.
					</h4>
				)}
			</DialogContent>
			<DialogActions>
				<Button variant="outlined" onClick={() => setOpen(false)}>
					Close
				</Button>
				<Button variant="outlined" onClick={onSubmit}>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ProfilePriorityRequestModal;
