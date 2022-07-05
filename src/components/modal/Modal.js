import classes from './Modal.module.css';
import {CgClose} from 'react-icons/cg'

const Modal = ({ closeModal }) => {

    
  return (
    <>
        <div className={classes.modalBackground}>
            <div className={classes.modalContainer}>
                <button className={classes.CloseButton} onClick={() => closeModal(false)} ><CgClose size={25}/></button>
                <div className={classes.modalTitle}><h1>Pesan Berhasil Terkirim</h1></div>
                <div className={classes.modalBody}>
                    <p>Cek Inbox Email anda untuk informasi selanjutnya</p>
                </div>
                <div className={classes.modalFooter}></div>
            </div>
        </div>
    </>
  )
}

export default Modal