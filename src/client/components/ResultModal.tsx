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
  //   const [show, setShow] = useState(false);

  const handleClose = () => props.setShow(false);
  // const handleShow = () => props.setShow(true);
  console.log(props.isSolve);
  console.log('MODAL');
  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        {props.isSolve ? <WinModal /> : <FailedModal />}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export const ResultModal = React.memo(ResultModal1);
