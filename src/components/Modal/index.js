import React from "react";
import { MDBContainer, MDBModal } from "mdbreact";
import "./style.css";

const Modal = ({ item, show, toggleHandler }) => (
  <MDBContainer>
    <MDBModal isOpen={show} toggle={toggleHandler} centered>
      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-row flex-xl-row">
        <img className="item" src={item.getSrc()} alt={item.getAlt()} />
        <div className="m-3 actions-wrapper">
          <h5>share</h5>
          <a
            href={
              "https://www.facebook.com/sharer/sharer.php?u=" + item.getEmbed()
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="social m-1" src="/imgs/fb.gif" alt="facebook" />
          </a>
          <a
            href={"http://twitter.com/share?url=" + item.getEmbed()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imgs/tw.gif" className="social m-1" alt="twitter" />
          </a>
          <button
            className="m-1 copy-btn"
            onClick={() => navigator.clipboard.writeText(item.getMp4())}
          >
            Copy Link
          </button>
        </div>
      </div>
    </MDBModal>
  </MDBContainer>
);

export default Modal;
