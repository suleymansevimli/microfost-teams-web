import React from 'react';
import PropTypes from 'prop-types'
import styles from './modal.module.css';
import { useId } from '@uifabric/react-hooks';
import cn from 'classnames'
import { ContextualMenu, IconButton, Modal as OfficeUIModal } from 'office-ui-fabric-react';

const Modal = ({children,isModalOpen,onModalClose,title,width}) => {
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
			containerClassName={cn([styles.container,width ? styles[width]: styles.min50])}
			dragOptions={undefined}
		>
			<div className={styles.header}>
				{title && (
					<>
						<span id={titleId} className={styles.modalTitle}>
							{title}
						</span>

						<IconButton
							className={styles.closeIcon}
							iconProps={cancelIcon}
							ariaLabel="Close popup modal"
							onClick={onModalClose}
						/>
					</>
				)}
			</div>
			<div className={styles.body}>{children}</div>
		</OfficeUIModal>
	);
};

export default React.memo(Modal);

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	isModalOpen: PropTypes.bool.isRequired,
	onModalClose: PropTypes.func.isRequired,
	title: PropTypes.string,
	width: PropTypes.oneOf(['min50','min60','min70','min80'])
}

Modal.defaultProps = {
	width: 'min80'
}