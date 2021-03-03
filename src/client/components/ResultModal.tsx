import React, { Dispatch, SetStateAction } from 'react';
import { Modal } from 'react-bootstrap';
import { WinModal } from './WinModal';
import { FailedModal } from './FailedModal';
interface IProps {
  show: boolean;
  isSolve: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const ResultModal1: React.FC<IProps> = (props: IProps) => {
  const handleClose = () => props.setShow(false);

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        {props.isSolve ? <WinModal /> : <FailedModal />}
      </Modal>
    </>
  );
};

export const ResultModal = React.memo(ResultModal1);
