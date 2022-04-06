import React, { useEffect } from 'react'
import { Icon, Image, Modal, Popup, Progress, TransitionablePortal } from 'semantic-ui-react'
import AboutImage from '../../../assets/image/about-image.jpg'

export default function About() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

    const [open, setOpen] = React.useState(false)
    
    return (
        <div>
          <React.Fragment>
            <div className="about-container">
              <div className="about-content">
                <div className="about-image-box">
                  <Image src={AboutImage} alt="ed-graduation-image" className="about-image"/>
                </div>

                <div className="about-name-box">
                  <h2 className="about-name">
                    Phanuwat Sittisaktanakun &
                    <br/>
                    Front End Developer
                  </h2>
                </div>

                <div className="about-me-box">
                  <div className="introduce-myself">
                    My name Phanuwat Sittisaktanakun you can call my nick name John, 
                    Now im working at Internet Thailand Public Company Limited for 3 years, 
                    I try to learning the ins and outs of front end developer. 
                    Still feel young though and inexperienced.
                    Now i'm looking for a radical change in my career. 
                    Hope to find what I am looking for in your startup, 
                    and i'm ready to bring onboard everything I’ve learned in the corp.
                  </div>

                  <div className="my-information">
                    <div className="information-inline">
                      <div className="information-title">
                        Birthday:
                      </div>  
                      <div className="information-detail">
                        15/04/1996
                      </div>
                    </div>

                    <div className="information-inline">
                      <div className="information-title">
                        Age:
                      </div>  
                      <div className="information-detail">
                        25
                      </div>
                    </div>

                    <div className="information-inline">
                      <div className="information-title">
                        Address:
                      </div>  
                      <div className="information-detail">
                        Khon Kaen, Thailand
                      </div>
                    </div>

                    <div className="information-inline">
                      <div className="information-title">
                        Email:
                      </div>  
                      <div className="information-detail">
                        phanuwat1996@hotmail.com
                      </div>
                    </div>

                    <div className="information-inline">
                      <div className="information-title">
                        Phone:
                      </div>  
                      <div className="information-detail">
                        +66 99 029 53538
                      </div>
                    </div>

                    <div className="information-inline">
                      <div className="information-title">
                        Study:
                      </div>  
                      <div className="information-detail">
                        Khon Kaen University
                      </div>
                    </div>

                    <div className="information-inline">
                      <div className="information-title">

                      </div>  
                    
                      <div className="information-detail">
                        Bachelor of Science in Computer Science
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="more-information">
                  <button onClick={() => setOpen(true)} className="information-modal-button">
                    More Information
                  </button>
                  
                  <TransitionablePortal open={open}  transition={{ animation:'scale', duration: 500 }} style={{  paddingBottom: '100px' }}>
                    <Modal
                      closeIcon
                      open={open}
                      // trigger={<button className="information-modal-button">More Information</button>}
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      size={"large"}
                      closeOnDimmerClick={true}
                      style={{ borderRadius: '0px', margin: '50px 0 50px 0' }}
                    >
                      <Modal.Content>
                        <div className="md-contents">
                          <div className="md-skill">
                            <div className="md-role">
                              <div className="md-title">
                                Role
                              </div>

                              <div className="md-progress-box">
                                <div className="md-progress-title">
                                  Front End
                                </div>
                                <div className="md-progress-bar">
                                  <Progress percent={70}  size='tiny'/>
                                </div>
                              </div>  

                              <div className="md-progress-box">
                                <div className="md-progress-title">
                                  Mobile
                                </div>
                                <div className="md-progress-bar">
                                  <Progress percent={10} size='tiny'/>
                                </div>
                              </div>  

                              <div className="md-progress-title">
                                Front End Deverloper with a 3 years of experience specific experience working with React and HTML/CSS JavaScript,
                                Finding solutions, and determining customer satisfaction.
                              </div>
                            </div>

                            <div className="md-lang-skill">
                              <div className="md-title">
                                Language Skill
                              </div>

                              <div className="md-progress-box">
                                <div className="md-progress-title">
                                  Thai (Native)
                                </div>
                                <div className="md-progress-bar">
                                  <Progress percent={75} size='tiny'/>
                                </div>
                              </div>  

                              <div className="md-progress-box">
                                <div className="md-progress-title">
                                  English (Intermediate Reading Writing Speaking)
                                </div>
                                <div className="md-progress-bar">
                                  <Progress percent={40} size='tiny'/>
                                </div>
                              </div>  
                            </div>
                          </div>

                          <div className="md-skill-box">
                            <div className="md-title">
                              Programming Skills
                            </div>

                            <div className="md-skill-img-box">
                              <div className="md-icon-box">
                                {/* <Icon name="react" size="big" className="md-icon"/> */}
                                <Popup
                                  position='top center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="React"
                                  trigger={<Icon name="react" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="vuejs" size="big" className="md-icon"/> */}
                                <Popup
                                  position='top center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Vuejs"
                                  trigger={<Icon name="vuejs" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="html5" size="big" className="md-icon"/> */}
                                <Popup
                                  position='top center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Html5"
                                  trigger={<Icon name="html5" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="js" size="big" className="md-icon"/> */}
                                <Popup
                                  position='top center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="JavaScript"
                                  trigger={<Icon name="js" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="css3 alternate" size="big" className="md-icon"/> */}
                                <Popup
                                  position='top center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Cascading Style Sheets"
                                  trigger={<Icon name="css3 alternate" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="css3 alternate" size="big" className="md-icon"/> */}
                                <Popup
                                  position='top center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="SASS & SCSS"
                                  trigger={<Icon name="sass" size="big" className="md-icon"/>}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="md-skill-box">
                            <div className="md-title">
                              Development Tools
                            </div>

                            <div className="md-skill-img-box">
                              <div className="md-icon-box">
                                {/* <Icon name="git square" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Git"
                                  trigger={<Icon name="git square" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="github" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Git Hub"
                                  trigger={<Icon name="github" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="gitlab" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Gitlab"
                                  trigger={<Icon name="gitlab" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="bitbucket" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Bitbucket"
                                  trigger={<Icon name="bitbucket" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="fork" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Fork"
                                  trigger={<Icon name="fork" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="codepen" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Codepen"
                                  trigger={<Icon name="codepen" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="npm" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="NPM"
                                  trigger={<Icon name="npm" size="big" className="md-icon"/>}
                                />
                              </div>

                              <div className="md-icon-box">
                                {/* <Icon name="chrome" size="big" className="md-icon"/> */}
                                <Popup
                                  position='bottom center'
                                  size='mini'
                                  inverted
                                  offset={[0, 10]}
                                  header="Chrome DevTools"
                                  trigger={<Icon name="chrome" size="big" className="md-icon"/>}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal.Content>
                      {/* <Modal.Actions>
                        <Button basic onClick={() => setOpen(false)}>
                          Close
                        </Button>
                      </Modal.Actions> */}
                    </Modal>
                  </TransitionablePortal>
                </div>
              </div>
            </div>
          </React.Fragment>  
        </div>
    )
}
