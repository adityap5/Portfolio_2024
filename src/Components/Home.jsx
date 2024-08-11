import React from 'react'
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HearoStyle'
import HeroBgAnimation from './HeroBgAnimation/HeroBgAnimation.jsx';
import Skills from './Skills'
import { Bio } from '../Data/data';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact.jsx';
function Home() {
  return (
    <>
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <button className='bg-slate-400 self-center h-12 w-24 font-semibold  text-2xl rounded-lg hover:bg-blue-300 hover:scale-105 md:w-48'
                         ><a href="https://drive.google.com/file/d/1qOUvd3jlwUF8d-YOwBS_NOldmG-eTbFm/view?usp=sharing" download> Check Resume</a></button>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src="/hero.jpeg" alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
<Skills/>
<Projects/>
<Contact/>
   </>
  )
}

export default Home
