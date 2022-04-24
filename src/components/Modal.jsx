import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onclose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className="overlay" onClick={this.handleBackdropClick}>
                <div className="modal">
                    {this.props.children}
                </div>
            </div>
            , modalRoot);
    }
}

export default Modal;