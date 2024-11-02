import React, { useState } from 'react';
import Carousel from './Carousel';
import img from '../images/movies/bg-65.jpeg';
import img1 from '../images/movies/bg-the-black-demon.jpeg';
import img2 from '../images/movies/bg-little-mermaid.jpg';
import img3 from '../images/movies/bg-the-tank.jpeg';
import img4 from '../images/movies/bg-the-covenant.jpeg';


import titleImg1 from '../images/the-65-title.png';
import titleImg2 from '../images/the-black-demon-title.png';
import titleImg3 from '../images/the-little-mermaid-title.png';
import titleImg4 from '../images/the-tank-title.png';
import titleImg5 from '../images/the-covenant-title.png';


function StartUp() {
    const [centerIndex, setCenterIndex] = useState(0); // State to keep track of the center index

    const images = [img, img1, img2, img3, img4];
    const texts = [
        {
            image: titleImg1,
            subtitle: `Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a 
            devastating decision that will bring the curtains down on Venom and Eddie's last dance.`,
            link: "Watch Movie",
            link2: "More Info"
        },
        {
            image: titleImg2,
            subtitle: `After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, 
            Roz bonds with the island's animals and cares for an orphaned baby goose.`,
            link: "Watch Movie",
            link2: "More Info"
        },
        {
            image: titleImg3,
            subtitle: `While scavenging the deep ends of a derelict space station, a group of young space 
            colonizers come face to face with the most terrifying life form in the universe.`,
            link: "Watch Movie",
            link2: "More Info"
        },
        {
            image: titleImg4,
            subtitle: `A fading celebrity decides to use a black market drug, a cell-replicating substance that
             temporarily creates a younger, better version of herself.`,
            link: "Watch Movie",
            link2: "More Info"
        },
        {
            image: titleImg5,
            subtitle: `The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, 
            but once were friends bonded like brothers who changed the fate of Cybertron forever.`,
            link: "Watch Movie",
            link2: "More Info"
        },
    ];
    const textStyle = {
        position: 'absolute',
        top: '35%',
        left: '20px',
        color: 'white',
        fontSize: '24px',
        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
        zIndex: 2

    };
    const backgroundStyle = {
        position: 'relative',
        height: '90vh',
        backgroundImage: `url(${images[centerIndex]})`,
        backgroundSize: 'cover',
        transition: 'background-image 0.5s ease',
        zIndex: 0
    };
    return (
        <div style={backgroundStyle} className='bg'>
            <div className="bg-overlay"></div>
            <Carousel images={images} setCenterIndex={setCenterIndex} centerIndex={centerIndex} />
            <div style={textStyle} className='startup-text'>
            <img src={texts[centerIndex].image} alt="" />
                <p >{texts[centerIndex].subtitle} </p>
                <a className='link1'><i className="fa-solid fa-play me-2"></i>{texts[centerIndex].link} </a>
                <a className='link2'>{texts[centerIndex].link2} <i className="fa-solid fa-arrow-right"></i></a>
            </div>

        </div>
    )
}

export default StartUp
