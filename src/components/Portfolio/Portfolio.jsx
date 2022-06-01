import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Museum from '../../assets/img/works/museum.jpg';
import VerticalSlider from '../../assets/img/works/VerticalSlider.jpg';
import Momentum from '../../assets/img/works/momentum.jpg';
import ArtQuiz from '../../assets/img/works/ArtQuiz.jpg';
import Lang from '../../assets/img/works/Lang.jpg';
import Christmas from '../../assets/img/works/Christmas.jpg';
import { themeContext } from '../../Context';

const deploys = [
    {
        imgSrc: Museum,
        link: 'https://museum-project-aa.netlify.app/',
    },
    {
        imgSrc: VerticalSlider,
        link: 'https://arkhipovanatoly.github.io/vertical-slider/',
    },
    {
        imgSrc: Momentum,
        link: 'https://momentum-project-aa.netlify.app/',
    },
    {
        imgSrc: ArtQuiz,
        link: 'https://artquiz-project-aa.netlify.app',
    },
    {
        imgSrc: Lang,
        link: 'https://rslang-arkhipovanatoly.netlify.app',
    },
    {
        imgSrc: Christmas,
        link: 'https://christmas-project-aa.netlify.app',
    },
];

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>My Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                breakpoints={{
                    1600: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    420: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={30}
                grabCursor={true}
                loop
                className="portfolio-slider"
            >
                {deploys.map((deploy, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <a href={deploy.link} target="_blank" rel="noreferrer">
                                {' '}
                                <img src={deploy.imgSrc} alt="" />
                            </a>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Portfolio;
