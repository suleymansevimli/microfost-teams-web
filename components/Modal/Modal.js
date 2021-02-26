import React from 'react';
import styles from './modal.module.css';
import { useId } from '@uifabric/react-hooks';
import { ContextualMenu, IconButton, Modal as OfficeUIModal } from 'office-ui-fabric-react';

const Modal = ({children,isModalOpen,onModalClose,title}) => {
	const dragOptions = {
		moveMenuItemText: 'Move',
		closeMenuItemText: 'Close',
		menu: ContextualMenu
	};

	const cancelIcon = { iconName: 'Cancel' };
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
				<span id={titleId} className={styles.modalTitle}>{title}</span>
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

export default React.memo(Modal);