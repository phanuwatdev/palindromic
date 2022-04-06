import React, { useEffect, useState } from 'react'
import { Menu, Transition } from 'semantic-ui-react'
// import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
// import { createMedia } from "@artsy/fresnel"


import Home from './subpage/Home'
import About from './subpage/About'
import MyProjects from './subpage/MyProjects';
import Timeline from './subpage/Timeline';

// const { MediaContextProvider, Media } = createMedia({
//   breakpoints: {
//     sm: 0,
//     md: 768,
//     lg: 1024,
//     xl: 1192,
//   },
// })

export default function Profile() {

    const [activeItem, setActiveItem] = useState('Hello')

    //Transition
    const [visible, setVisible] = useState(true)

    const handleClickMenu = (e, {id, name}) => {
        setActiveItem(name)
        setVisible(!visible)
    }

    // const size = useWindowSize();
    const viewPortSize = useWindowSize().width;

    useEffect(() => {
      return () => {
        setVisible(true)
      }
    }, [visible])
    
    return (
      <div style={{ backgroundColor: 'blue' }}>
        <div className="backgroud-color">

          {/* {console.log(size)}
          {console.log(viewPortSize)} */}

          {/* <MediaContextProvider>
            <Media at="sm">
            </Media>
            <Media lessThan="lg">
            </Media>
          </MediaContextProvider> */}

          {viewPortSize <= 1024 ? (
            <div style={{ backgroundColor: 'white' }}>
              <Menu
                secondary
                pointing
                size='large'
                style={{ borderWidth: '0px', padding: '20px' }}
              >
                <Menu.Item 
                  as='a' id='Hello' 
                  name='Hello' 
                  active={activeItem === 'Hello'} 
                  position='right' 
                  onClick={handleClickMenu}
                  className={activeItem === 'Hello' ? "mobile-menu-active" : ""}
                >
                  Hello
                </Menu.Item>
                <Menu.Item 
                  as='a' 
                  id='About' 
                  name='About' 
                  active={activeItem === 'About'} 
                  onClick={handleClickMenu}
                  className={activeItem === 'About' ? "mobile-menu-active" : ""}
                >
                  About
                </Menu.Item>
                <Menu.Item 
                  as='a' 
                  id='My Projects' 
                  name='My Projects' 
                  active={activeItem === 'My Projects'} 
                  onClick={handleClickMenu}
                  className={activeItem === 'My Projects' ? "mobile-menu-active" : ""}
                >
                  My Projects
                </Menu.Item>
                <Menu.Item 
                  as='a' 
                  id='Timeline' 
                  name='Timeline' 
                  active={activeItem === 'Timeline'} 
                  onClick={handleClickMenu}
                  className={activeItem === 'Timeline' ? "mobile-menu-active" : ""}
                >
                  Timeline
                </Menu.Item>
              </Menu>
            </div>
          ):(
            <div className="leftpart">
              <div className="leftpart-inner">
                <h2 className="leftpart-logo">
                  PHANUWATDEV
                </h2>

                <div className="leftpart-menu-box">
                  <Menu
                    size='large'
                    text
                    vertical
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <Menu.Item 
                      as='a' id='Hello' 
                      name='Hello' 
                      active={activeItem === 'Hello'} 
                      position='right' 
                      onClick={handleClickMenu}
                      className={activeItem === 'Hello' ? "left-menu-active" : "left-menu-text"}
                    >
                      Hello
                    </Menu.Item>
                    <Menu.Item 
                      as='a' 
                      id='About' 
                      name='About' 
                      active={activeItem === 'About'} 
                      onClick={handleClickMenu}
                      className={activeItem === 'About' ? "left-menu-active" : "left-menu-text"} 
                    >
                      About
                    </Menu.Item>
                    <Menu.Item 
                      as='a' 
                      id='My Projects' 
                      name='My Projects' 
                      active={activeItem === 'My Projects'} 
                      onClick={handleClickMenu}
                      className={activeItem === 'My Projects' ? "left-menu-active" : "left-menu-text"} 
                    >
                      My Projects
                    </Menu.Item>
                    <Menu.Item 
                      as='a' 
                      id='Timeline' 
                      name='Timeline' 
                      active={activeItem === 'Timeline'} 
                      onClick={handleClickMenu}
                      className={activeItem === 'Timeline' ? "left-menu-active" : "left-menu-text"} 
                    >
                      Timeline
                    </Menu.Item>
                  </Menu>
                </div>

                <div className="leftpart-coppyright">
                  © 2021
                  <br/>
                  Created by <b>PhanuwatDev</b>
                </div>
              </div>
            </div>
          )}
          
          <div className="rightpart">
            <Transition onStart={()=>setVisible(!visible)} visible={visible} animation='fade left' duration={300}>
              <div className="rightpart-inner">
                {activeItem === 'Hello' && (
                  <React.Fragment>
                    <Home/>
                  </React.Fragment>
                )}

                {activeItem === 'About' && (
                  <React.Fragment>
                    <About/>
                  </React.Fragment>
                )}

                {activeItem === 'My Projects' && (
                  <React.Fragment>
                    <MyProjects/>
                  </React.Fragment>
                )}    

                {activeItem === 'Timeline' && (
                  <React.Fragment>
                    <Timeline/>
                  </React.Fragment>
                )}
              </div>
            </Transition>
          </div>
        </div>
      </div>
    )
}


// Hook Detect Screen Size
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}