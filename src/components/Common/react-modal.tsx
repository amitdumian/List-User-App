
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./react-modal.css";

const ReactModal = (props:any) => {
  return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                keyboard={false}
                dialogClassName = "react-modal"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
        </>
  )
}

export default ReactModal;