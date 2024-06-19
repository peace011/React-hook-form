import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';

export interface UserProfileData {
	closeModal: () => void;
}

const UserProfile = ({
	closeModal,
}: UserProfileData) => {
  return (
    <div>
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed justify-center lg:items-end top-[50%] left-[50%]  max-h-full w-[100vw] max-w-[450px] md:max-w-[592px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-secondary-700 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
			<section className="flex flex-row justify-between items-center px-6 py-3">
				<Dialog.Title className="font-semibold text-lg md:text-[20px] text-primary-400">
					User Profile
				</Dialog.Title>
				<Dialog.Close asChild>
					<button
						className="text-violet11 hover:bg-violet4 focus:shadow-violet7 md:w-8 md:h-8"
						aria-label="Close"
						onClick={closeModal}
					>
            cross
					</button>
				</Dialog.Close>
			</section>
			<hr className="-border-[0.5px] border-secondary-200 w-full mt-2 " />
			{/* upload part */}
		

			{/* form part */}
			<form >
				<div className="flex flex-col items-start gap-2 w-full">
					<div className="flex flex-col p-4 lg:p-4 gap-8 w-full ">
						{/* password button part */}
						<div className="flex items-center gap-4 w-full">
							<p className="text-secondary-300 font-bold">Password</p>
							<button
								type="button"
			
									className=
										'w-auto flex px-3 py-2 items-center rounded-lg bg-gradient-to-r from-primary-900 to-primary-300 font-bold text-base'
							
							>
								Change Password
							</button>
						</div>

						{/* change theme part */}
						<section className="inline-flex flex-col md:flex-row justify-center items-start md:justify-start gap-2 md:gap-10">
							<p className="text-secondary-300 font-bold">Change Theme Color</p>
							
						</section>
					</div>

					{/* button part */}
					<div className="flex justify-center md:justify-start items-start gap-3 md:gap-4 lg:gap-4 w-full p-4 ">
						<button>SAVE</button>
						
						<Dialog.Close asChild>
							<button
								type="button"
								onClick={closeModal}
							
									className=
										'w-full lg:w-auto flex px-16 py-2 items-center  rounded-lg bg-secondary-800 border-primary-800 font-bold text-base text-primary-800'
							
							>
								Cancel
							</button>
						</Dialog.Close>
					</div>
				</div>
			</form>
		</Dialog.Content>
    </div>
  )
}

export default UserProfile