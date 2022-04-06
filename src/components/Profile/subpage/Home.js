import React, { useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import Avatar from '../../../assets/avatar/avatar2.jpg'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
          <React.Fragment>
            <div className="main-container">
              <div className="main-content">
                <img src={Avatar} className="main-avatar" alt="phanuwat-avatar"/>
                <div className="content-text">
                  <h3 className="content-text-name">
                    PHANUWAT SITTISAKTANAKUN
                  </h3>

                  <div className="content-typing-effect">
                    Glad to meet you!
                  </div>

                  <div className="content-social">
                    <div className="content-icon">
                      {/* <a href="https://www.facebook.com/phanuwat1996/" target="_blank" rel="noopener noreferrer" className="href-link-style"> */}
                      <a href="https://www.facebook.com/#/" target="_blank" rel="noopener noreferrer" className="href-link-style">
                        <Icon size='large' className="social-icon" name='facebook f'/>
                      </a>
                    </div>
                    {/* <a href="https://www.instagram.com/johnniieps" target="_blank" rel="noopener noreferrer" className="href-link-style"> */}
                    <a href="https://www.instagram.com/#/" target="_blank" rel="noopener noreferrer" className="href-link-style">
                      <div className="content-icon">
                        <Icon size='large' className="social-icon" name='instagram'/>
                      </div>
                    </a>
                    {/* <a href="https://www.instagram.com/johnniieps/" target="_blank" rel="noopener noreferrer" className="href-link-style" style={{ pointerEvents: 'none', cursor: 'default' }}>
                      <div className="content-icon">
                        <Icon size='large' className="social-icon" name='instagram'/>
                      </div>
                    </a> */}
                    <a href="https://gitconnected.com/phanuwatdev/resume" target="_blank" rel="noopener noreferrer" className="href-link-style">
                      <div className="content-icon">
                        <Icon size='large' className="social-icon" name='github'/>
                      </div>
                    </a>
                    <a href="mailto: phanuwat1996@hotmail.com" target="_blank" rel="noopener noreferrer" className="href-link-style">
                      <div className="content-icon">
                      <Icon size='large' className="social-icon" name='mail'/>
                      </div>
                    </a>
                  </div> 
                </div> 
              </div>
            </div>
          </React.Fragment>
        </div>
    )
}
