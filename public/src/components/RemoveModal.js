import React from 'react';
import Modal from 'react-modal';



const RemoveModal = (props) => (
    <Modal
        isOpen={!!props.blogInRemoval ? true : false}
        contentLabel="Bloggle Removal"
        closeTimeoutMS={200}
        className="modal"
        
    >
        <h3 className="modal__title">Are you sure you want to remove {props.bloggleName}?</h3>
        <button className="button button--modal" onClick={props.onRemove}>Of course</button>
        <button className="button button--secondary button--modal" onClick={props.clearBlogInRemoval}>Nevermind!</button>
    </Modal>

);
 
export default RemoveModal;