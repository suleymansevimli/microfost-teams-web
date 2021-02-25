import React from 'react';
import styles from './modal.module.css';
import { useBoolean, useId } from '@uifabric/react-hooks';
import { ContextualMenu, IconButton, Modal as OfficeUIModal } from 'office-ui-fabric-react';

const Modal = ({children,isModalOpen,onModalClose}) => {
	const dragOptions = {
		moveMenuItemText: 'Move',
		closeMenuItemText: 'Close',
		menu: ContextualMenu
	};

	const cancelIcon = { iconName: 'Cancel' };

	// const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
	// const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(true);

	const titleId = useId('title');

	return (
		<OfficeUIModal
			titleAriaId={titleId}
			isOpen={isModalOpen}
			responsiveMode={true}
			onDismiss={onModalClose}
			isBlocking={false}
			containerClassName={styles.container}
			dragOptions={dragOptions ? dragOptions : undefined}
		>
			<div className={styles.header}>
				<span id={titleId} className={styles.modalTitle}>Lorem Ipsum</span>
				<IconButton
					className={styles.closeIcon}
					iconProps={cancelIcon}
					ariaLabel="Close popup modal"
					onClick={onModalClose}
				/>
			</div>
			<div className={styles.body}>
				{children}
			</div>
		</OfficeUIModal>
	);
};

export default Modal;