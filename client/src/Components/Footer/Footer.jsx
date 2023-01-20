import React from 'react';
import './Footer.css';
import wave from '../../img/footer.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

function Footer() {
  return (
    <div className="footer">
      {/* <img src={wave} alt="" style={{ width: '100%' }} /> */}
      <div className="f-content">
        <span>nepaliharvest@gmail.com</span>
        <span>@copyright 2023</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/rajeevyadav__/?hl=en">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://github.com/rajeevy397">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/rajeev.yadav.58958343">
            <Facebook color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
