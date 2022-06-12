import React from 'react'
import Fullpage, {FullpageSection, FullPageSections, FullpageNavigation} from '@ap.cx/react-fullpage';
import Home from './Components/Home';
import NavBar from './Components/Navbar/NavBar';

const FullPageScroll = () => {
    const SectionStyle={
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <Fullpage>
    {/* <NavBar/> */}
        <FullpageNavigation/>
        <FullPageSections>
            <FullpageSection style={SectionStyle}>
                <Home/>
            </FullpageSection>
            <FullpageSection style={SectionStyle}>
                <h1>
                    screen2
                </h1>
            </FullpageSection>
            <FullpageSection style={SectionStyle}>
                <h1>
                    screen3
                </h1>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll;