import *  as Dialog from '@radix-ui/react-dialog'
import React from 'react';

interface ModalData {
	children?: React.ReactNode;
	isOpen?: boolean;
	isClose?: () => void;
}

export const Modal = ({ children, isOpen, isClose }: ModalData) => {
	return (
		<Dialog.Root open={isOpen}>
			<Dialog.Portal>
				<Dialog.Overlay
					onClick={isClose}
					className="bg-black/50 fixed inset-0"
				/>
				{children}
			</Dialog.Portal>
		</Dialog.Root>
	);
};
