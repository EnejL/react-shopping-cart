import React from 'react';
import Section from './Section';

function Modal ({ show, close }) {

    return (
      <div className="ModalWrapper"
        style={{
            display: show ? 'flex' : 'none'
        }}
      >
        <div className="ModalContent">
            <div className="ModalHeader">
              <h3>Order</h3>
                <button onClick={close} className="BtnExit"></button>
            </div>
            <div className="ModalBody">
                {<Section />}
                <div className="TotalSumWrapper">
                  <p>Total:</p>
                  <span></span>
                </div>
            </div>
            <div className="ModalFooter">
                <button className="Btn BtnSubmit">Buy</button>
                <button className="Btn BtnCancel" onClick={close}>Cancel</button>
            </div>
        </div>
      </div>
    )
};

export default Modal;
