import React from 'react';
import './Footer.css';
import Wave from '../../assets/img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>arhipovanatoly@gmail.com</span>
                <div className="f-icons">
                    <a href="https://github.com/ArkhipovAnatoly" target="_blank" rel="noreferrer">
                        {' '}
                        <Github color="white" size={'3rem'} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
