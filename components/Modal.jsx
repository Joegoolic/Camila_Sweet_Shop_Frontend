import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {FaTimes} from 'react-icons/fa';
import styles from '@/styles/Modal.module.scss'


export default function Modal({show,onClose}) {
    const [isBrowser, setIsBrowser] = useState(false)
    //useEffect(() => setIsBrowser(true))
    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleClose = (e) => {
        e.preventDefault()
        onClose()

    }
    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <a href="#" onClick = {handleClose}>
                        <FaTimes color='black'/>
                    </a>
                </div>
                <div className = {styles.body}>
                    <h2>Thank you for using my Mila's Sweetshop</h2>
                    <h3>
                    Currently this website is a showcase of my abilities to create 
                    an e-Commerce site. If you enjoyed using this website and thought 
                    its layout was intuitive please consider me for a position, or to 
                    freelance and create you a custom website. You can send me an email 
                    directly at <a href='https://www.josephgoolic.com' rel="noreferrer" target='_blank'>josephgoolic.com</a>
                    </h3>
                    <h3>Thank you!</h3>
                </div>
            </div>
        </div>
    ) : null;
        if(isBrowser){
            return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))
        } else{
            return null
        }
}