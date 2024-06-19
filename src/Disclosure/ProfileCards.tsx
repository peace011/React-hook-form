import { NavLink } from 'react-router-dom';
import React from 'react';

interface WeeklyMeetingCountData {
	getWeeklyMeetingCount: {
		meetingCount: number;
	};
}

interface ProfileCardsProps {
	openUserProfile: () => void;
}

export const ProfileCards = ({ openUserProfile }: ProfileCardsProps) => {

	

	return (
		<div className='bg-[url("/card.png")] m-2 bg-cover md:bg-repeat-round w-full h-full rounded-3xl border border-[#CECFD1]'>
			<div className="inline-flex flex-col items-start p-6 md:p-[1.8rem] gap-2">
				<span className="text-primary-800 text-sm font-bold md:text-xl">
					Hello
				</span>
				<div className="flex justify-center items-center space-x-4">
					<div className="rounded-full w-12 h-12 md:w-18 md:h-18 overflow-hidden">
						<img
							src=
								 'https://api.dicebear.com/8.x/avataaars/svg?seed=Simon'
							
							alt="Male"
							onClick={() => openUserProfile()}
						/>
					</div>
					<span className="text-primary-500 text-2xl md:text-4xl font-bold capitalize">
						James
					</span>
				</div>

				<div className="flex justify-center items-center space-x-2">
					<span className="text-primary-800 text-sm md:text-base font-normal">
						This week you have{' '}
					</span>
					<span className="text-primary-800 text-sm md:text-base font-semibold underline">
						 meetings
					</span>
				</div>

				<div className="flex py-3 justify-center items-center space-x-2">
					<button
					
							className= 'w-full px-6 py-3 md:px-10 md:py-3'
					>
						<NavLink to="/meeting" className="flex gap-x-3 items-center">
							<span className="text-secondary-400 text-base font-semibold">
								Schedule a meeting
							</span>
							<span className="items-center">
							</span>
						</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
};
