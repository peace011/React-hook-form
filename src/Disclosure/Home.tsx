import React from 'react'
import { useDisclosure } from './useDisclosure'
import { Modal } from './Modal'
import UserProfile from './UserProfile'
import { ProfileCards } from './ProfileCards'

const Home = () => {
    const action={
        onOpen:()=>console.log("open"),
        onClose:()=>console.log("close"),

    }
    const userProfileModal=useDisclosure(false,action);
  return (
    <div>
        <ProfileCards openUserProfile={userProfileModal.open}/> 
         {/* button click garda openUserProfile trigger hunx jasle chai state true return garx 
        so modal ma state true hunx */}
        <Modal
						isOpen={userProfileModal.state}
						isClose={userProfileModal.close}
					>
						<UserProfile
							closeModal={userProfileModal.close}
						/>
					</Modal>
    </div>
  )
}

export default Home;