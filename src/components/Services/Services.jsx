import React, { useContext } from 'react';
import './Services.css';
import Card from '../Card/Card';
import HeartEmoji from '../../assets/img/heartemoji.png';
import Glasses from '../../assets/img/glasses.png';
import Humble from '../../assets/img/humble.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import CV from './CV.pdf';

const Services = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // transition
    const transition = {
        duration: 1,
        type: 'spring',
    };

    return (
        <div className="services" id="services">
            {/* left side */}
            <div className="awesome">
                {/* dark mode */}
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>skills</span>

                <a href={CV} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right */}
            <div className="cards">
                {/* first card */}
                <motion.div initial={{ left: '25rem' }} whileInView={{ left: '14rem' }} transition={transition}>
                    <Card emoji={HeartEmoji} heading={'Frameworks'} detail={'ReactJS+Redux,NextJS'} />
                </motion.div>
                {/* second card */}
                <motion.div
                    initial={{ left: '-11rem', top: '12rem' }}
                    whileInView={{ left: '-4rem' }}
                    transition={transition}
                >
                    <Card emoji={Glasses} heading={'Languages'} detail={'HTML, CSS, JavaScript,TypeScript'} />
                </motion.div>
                {/* 3rd */}
                <motion.div
                    initial={{ top: '19rem', left: '25rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}
                >
                    <Card
                        emoji={Humble}
                        heading={'in addition'}
                        detail={'Git, Figma, RestAPI, MongoDB, WebPack '}
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
            </div>
        </div>
    );
};

export default Services;
