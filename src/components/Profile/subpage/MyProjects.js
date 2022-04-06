import React, { useEffect, useState } from 'react'
import { Button, Image, Label, Modal, Popup, TransitionablePortal } from 'semantic-ui-react'

import T1img from '../../../assets/mypoject/eco-tyre/t1.jpg'
// import T2img from '../../../assets/mypoject/eco-tyre/t2.jpg'
import T3img from '../../../assets/mypoject/eco-tyre/t3.jpg'
import T4img from '../../../assets/mypoject/eco-tyre/t4.jpg'
import T5img from '../../../assets/mypoject/eco-tyre/t5.jpg'
import T6img from '../../../assets/mypoject/eco-tyre/t6.jpg'
import T7img from '../../../assets/mypoject/eco-tyre/t7.jpg'
import T8img from '../../../assets/mypoject/eco-tyre/t8.jpg'
import T9img from '../../../assets/mypoject/eco-tyre/t9.jpg'
import T10img from '../../../assets/mypoject/eco-tyre/t10.jpg'
import TyreSticker from '../../../assets/mypoject/eco-tyre/tyre-sticker.png'
import TyreStickerFull from '../../../assets/mypoject/eco-tyre/tyre-sticker-full.png'

import M1img from '../../../assets/mypoject/eco-motors/m1.jpg'
import M2img from '../../../assets/mypoject/eco-motors/m2.jpg'
import M3img from '../../../assets/mypoject/eco-motors/m3.jpg'
import M4img from '../../../assets/mypoject/eco-motors/m4.jpg'
import M5img from '../../../assets/mypoject/eco-motors/m5.jpg'
import M6img from '../../../assets/mypoject/eco-motors/m6.jpg'
import M7img from '../../../assets/mypoject/eco-motors/m7.jpg'
import M8img from '../../../assets/mypoject/eco-motors/m8.jpg'
import M9img from '../../../assets/mypoject/eco-motors/m9.jpg'
import M10img from '../../../assets/mypoject/eco-motors/m10.jpg'
import M11img from '../../../assets/mypoject/eco-motors/m11.jpg'
import M12img from '../../../assets/mypoject/eco-motors/m12.jpg'
import M13img from '../../../assets/mypoject/eco-motors/m13.jpg'
import M14img from '../../../assets/mypoject/eco-motors/m14.jpg'
import M15img from '../../../assets/mypoject/eco-motors/m15.jpg'
// import M16img from '../../../assets/mypoject/eco-motors/m16.jpg'
import MotorsSticker from '../../../assets/mypoject/eco-motors/motors-sticker.png'
import MotorsStickerFull from '../../../assets/mypoject/eco-motors/motors-sticker-full.jpg'

const photosTyre = [
  {
    id: 1,
    name: "1",
    description: "Main Page",
    image: T1img 
  }, 
  // {
  //   id: 2,
  //   name: "2",
  //   description: "Entrepreneur Registration",
  //   image: T2img
  // }, 
  {
    id: 3,
    name: "3",
    description: "ECO Sticker Tyre Registration",
    image: T3img
  }, 
  {
    id: 4,
    name: "4",
    description: "ECO Sticker Register Dashboard",
    image: T4img
  }, 
  {
    id: 5,
    name: "5",
    description: "ECO Sticker Detail",
    image: T5img
  }, 
  {
    id: 6,
    name: "6",
    description: "ECO Sticker Tyre License",
    image: T6img
  }, 
  {
    id: 7,
    name: "7",
    description: "Admin OIE Entrepreneur Register Dashbord",
    image: T7img
  }, 
  {
    id: 8,
    name: "8",
    description: "Admin OIE Entrepreneur Approval Detail",
    image: T8img
  }, 
  {
    id: 9,
    name: "9",
    description: "Admin OIE ECO Sticker Tyre Register Dashbord",
    image: T9img
  },
  {
    id: 10,
    name: "10",
    description: "Admin OIE ECO Sticker Tyre Aprroval Detail",
    image: T10img
  },
  {
    id: 11,
    name: "11",
    description: "Example ECO Sticker Tyre",
    image: TyreSticker 
  }, 
];

const photosMotors = [
  {
    id: 1,
    name: "1",
    description: "Main Page",
    image: M1img
  }, 
  {
    id: 2,
    name: "2",
    description: "Entrepreneur Registration",
    image: M2img
  }, 
  {
    id: 3,
    name: "3",
    description: "Motorcycle Registration",
    image: M3img
  }, 
  {
    id: 4,
    name: "4",
    description: "Motorcycle Register Draft",
    image: M4img
  }, 
  {
    id: 5,
    name: "5",
    description: "Motorcycle Register History",
    image: M5img
  }, 
  {
    id: 6,
    name: "6",
    description: "Motorcycle Register Detail",
    image: M6img
  }, 
  {
    id: 7,
    name: "7",
    description: "EXAMPLE Motorcycle Approve",
    image: M7img
  }, 
  {
    id: 8,
    name: "8",
    description: "EXAMPLE Motorcycle Sticker",
    image: M8img
  }, 
  {
    id: 9,
    name: "9",
    description: "Admin OIE Entrepreneur Registration Dashboard",
    image: M9img
  },
  {
    id: 10,
    name: "10",
    description: "Motorcycle Registrater Detail",
    image: M10img
  },
  {
    id: 11,
    name: "11",
    description: "Motorcycle Register Admin OIE Panel",
    image: M11img
  },
  {
    id: 12,
    name: "12",
    description: "Admin OIE Motorcycle Register Dashboard",
    image: M12img
  },
  {
    id: 13,
    name: "13",
    description: "Admin EXCISE Motorcycle Register Dashboard",
    image: M13img
  },
  {
    id: 14,
    name: "14",
    description: "Admin EXCISE Entrepreneur Register Dashboard",
    image: M14img
  },
  {
    id: 15,
    name: "15",
    description: "Technical Service Motorcycle Sticker",
    image: M15img
  },
  // {
  //   id: 16,
  //   name: "16",
  //   description: "Motorcycle Search",
  //   image: M16img
  // },
  {
    id: 17,
    name: "17",
    description: "Example ECO Sticker Motorcycle",
    image: MotorsSticker
  }, 
];

 

export default function MyProjects() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [open, setOpen] = React.useState(false)
  const [contentId, setContentId] = useState('')

  //Modal Open
  const modalOpen =  (name) => {
    setContentId(name)
    setOpen(true)
  }

  //clickGalleryImage 
  const [openInside, setOpenInside] = useState(false)
  const [galleryImgId, setGalleryImgId] = useState('')
  // const [galleryOpen, setGalleryOpen] = useState(false)

  const handleClickGallery = (name) => {
    setGalleryImgId(name)
    // setGalleryOpen(true)
    setOpenInside(true)
  }

  //ECO Trye Content
  const tyreConetent = () => {
    return(
      <div className="modaldesc-container">
        <div className="modaldesc-main-img-box">
          <Image
            src={T1img}
            className="modaldesc-main-img"
          />
        </div>

        <div className="modaldesc-text">
          Tyre labelling rules help consumers make an informed purchase decision,
          as the label highlights the  performance of the tyre on issues relating to fuel efficiency,
          safety and noise. then the labels drive manufacturers to innovate and strive to have their tyres classified 
          to top classes in the different categories. 
        </div>

        <div className="modaldesc-ecosticker-box">
          <div className="modaldesc-ecosticker-img">
            <Popup
              header={"EXAMPLE ECO STICKER"}
              position='right center'
              inverted
              size='tiny'
              offset={[0, 10]}
              trigger={
                <Image
                  src={TyreStickerFull}
                  className="modaldesc-tyre-sticker"
                />
              }
            />
          </div>

          <div className="modaldesc-text">
            Tyre labels provide a clear and common classification of tyres performance for rolling resistance, 
            braking on wet surfaces and external noise.

            <br/>
            <br/>

            The rolling resistance in a tyre is an indicator of its energy efficiency which has an impact on fuel consumption. 

            <br/>
            <br/>

            Different tyres can have different rolling resistance for a number of reasons, including the design and structure
            but also the tread compounds. The tyre pressure also affects rolling resistance, of factors affecting safety 
          </div>
        </div>

        <br/>
        <br/>
        <br/>

        <div className="myproj-detail-title">
          MY GALLERY _
        </div>
        
        <div className="gallery-container">
          {photosTyre.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="gallery-title">
                  <Popup
                    header={data.description}
                    position='right center'
                    inverted
                    basic
                    size='tiny'
                    offset={[0, 5]}
                    trigger={
                      <Image
                        src={data.image}
                        className="gallery-images-title" 
                        onClick={()=>handleClickGallery(data.name)}
                      />
                    }
                  />
                </div>

                {photosTyre.filter(photos =>  photos.name === galleryImgId)
                  .map(data => (  
                    <div key={data.name}>
                      <TransitionablePortal open={openInside}  transition={{ animation:'scale', duration: 300 }}>
                        <Modal
                          open={openInside}
                          // trigger={<Button>Show Modal</Button>}
                          onClose={() => setOpenInside(false)}
                          onOpen={() => setOpenInside(true)}
                          closeIcon
                          size='large'
                          className='modal-custom-style'
                        >
                          <Modal.Content>
                            <div key={data.name}>
                              <Image 
                                src={data.image} 
                                className="gallery-images-fullsize" 
                                alt="gallery-projects"
                              />
                            </div>
                          </Modal.Content>
                          <Modal.Actions>
                            <div key={data.name} className="gallery-images-label">
                              {data.description} 
                            </div>
                          </Modal.Actions>
                        </Modal>
                      </TransitionablePortal>
                    </div>
                 ))
                }
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }
 
  //ECO Motors Content
  const motorsConetent = () => {
    return(
      <div className="modaldesc-container">
        <div className="modaldesc-main-img-box">
          <Image
            src={M1img}
            className="modaldesc-main-img"
          />
        </div>

        <div className="modaldesc-text">
          The origination and objective of ECO Sticker Motorcycle was assigned to define regulation for automotive industry operator
          and importer to use ECO Sticker Motorcycle,  which would indicate fuel consumption rate and carbon dioxide emission (CO2).
          and or team develop the Application for ECO Sticker that leads to Sustainable Mobility in all types 
          of motorcycle. Furthermore, other related government agencies are able to access this database 
          for inspection and calculation for CO2 tax.
        </div>

        <div className="modaldesc-ecosticker-box">
          <div className="modaldesc-ecosticker-img">
            <Popup
              header={"EXAMPLE ECO STICKER"}
              position='right center'
              inverted
              size='tiny'
              offset={[0, 10]}
              trigger={
                <Image
                  src={MotorsStickerFull}
                  className="modaldesc-motors-sticker" 
                />
              }
            />
          </div>

          <div className="modaldesc-text" >
            Consumer is able to compare the specification of each vehicle from ECO Sticker in term of cleanness, 
            Economy and safety for his making decision to buy a car. From using the CO2 tax, 
            fuel consumption rate and safety standard are all motivate car makers to develop their product specifications
            as equal as cars that are sold in leading countries.
            <br/> 
            <br/> 
            This is not only benefits to local consumer 
            that is able to own vehicle with high level of cleanness, economy and safety but also promotion 
            the enhancement of local automotive technology development as same as in those leading countries.
          </div>
        </div>

        <br/>
        <br/>
        <br/>

        <div className="myproj-detail-title">
          MY GALLERY _
        </div>

        {/* {galleryOpen ? (
          <div className="gallery-container">
            {photosMotors.filter(photos =>  photos.name === galleryImgId)
                .map(data => (
                  <div key={data.name} onClick={()=>setGalleryOpen(false)} >
                    <Image 
                      src={data.image} 
                      className="gallery-images-fullsize" 
                      alt="gallery-projects"
                    />
                  </div>
              ))
            }
          </div>
        ):(
          <div className="gallery-container">
            {photosMotors.map((data, index) => {
              return(
                <React.Fragment key={data.name}>
                  <Segment style={{ overflow: 'hidden', padding: '0px', marginTop: '14px', width: '15vw', height: '15vw' }}>
                    <Image 
                      src={data.image} 
                      className="gallery-images" 
                      alt="gallery-projects"
                      onClick={()=>handleClickGallery(data.name)}
                    />
                    <Label color="black" attached='bottom'>{data.description}</Label>
                  </Segment>
                </React.Fragment>
              )
            })}
          </div>
        )} */}
        
        <div className="gallery-container">
          {photosMotors.map((data, index) => {
            return (
              <React.Fragment key={index}>
                {/* <Segment className='gallery-segment'>
                  <Image 
                    src={data.image} 
                    className="gallery-images" 
                    alt="gallery-projects"
                    onClick={()=>handleClickGallery(data.name)}
                  />
                  <Label color="black" attached='bottom' style={{ lineHeight: '17px' }}>{data.description}</Label>
                </Segment> */}

                <div className="gallery-title">
                  <Popup
                    header={data.description}
                    position='right center'
                    inverted
                    basic
                    size='tiny'
                    offset={[0, 5]}
                    trigger={
                      <Image
                        src={data.image}
                        className="gallery-images-title" 
                        onClick={()=>handleClickGallery(data.name)}
                      />
                    }
                  />
                </div>

                {photosMotors.filter(photos =>  photos.name === galleryImgId)
                  .map(data => (  
                    <div key={data.name}>
                      <TransitionablePortal open={openInside}  transition={{ animation:'scale', duration: 300 }}>
                        <Modal
                          open={openInside}
                          // trigger={<Button>Show Modal</Button>}
                          onClose={() => setOpenInside(false)}
                          onOpen={() => setOpenInside(true)}
                          closeIcon
                          size='large'
                          className='modal-custom-style'
                        >
                          <Modal.Content>
                            <div key={data.name}>
                              <Image 
                                src={data.image} 
                                className="gallery-images-fullsize" 
                                alt="gallery-projects"
                              />
                            </div>
                          </Modal.Content>
                          <Modal.Actions>
                            <div key={data.name} className="gallery-images-label">
                              {data.description} 
                            </div>
                          </Modal.Actions>
                        </Modal>
                      </TransitionablePortal>
                    </div>
                 ))
                }
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }

  //ECO Trye Content
  const jtepaConetent = () => {
    return(
      <div>
        jtepaConetent
      </div>
    )
  }

  return (
    <div>
      <React.Fragment>
        <div className="myproj-container">
          <div className="myproj-content">
            <div className="header-tag-box">
              <div className="header-tag">
                PORTFOILIO
              </div>
            </div>

            <div className="main-title">
              MY PROJECTS
            </div>

            <TransitionablePortal open={open}  transition={{ animation:'scale', duration: 300 }}>
              <Modal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                size={"large"}
                closeOnDimmerClick={true}
                style={{ borderRadius: '0px', margin: '50px 0 40px 0' }}
              >
                <Modal.Content>
                  <div>
                    {contentId === 'ECO Tyre' && (tyreConetent())}
                    {contentId === 'ECO Motors' && (motorsConetent())}
                    {contentId === 'JTEPA Request' && (jtepaConetent())}
                  </div>
                </Modal.Content>
                <Modal.Actions>
                  <Button basic onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </Modal.Actions>
              </Modal>
            </TransitionablePortal>

            <div className="myproj-box" onClick={() => modalOpen('ECO Tyre')}>
              <div className="myproj-image-box">
                <Image
                  src={T1img}
                  className="myproj-image"
                />
              </div>
                  
              <div className="myproj-detail-box">
                <div className="myproj-detail">
                  <div className="myproj-detail-title">
                    ECO STICKER TYRE
                  </div>
                  <div className="myproj-detail-title-desc" style={{ marginBottom: '30px' }}> 
                    Government Agencies
                  </div>
                  <div className="myproj-detail-desc">
                    Tyre labelling rules help consumers make an informed purchase decision,
                    as the label highlights the  performance of the tyre on issues relating to fuel efficiency ... <b>read more</b>
                  </div>

                  <div className="myproj-detail-subtitle">
                    USED STACK:
                  </div>

                  <div className="myproj-used-stack-label">
                    <div className="label-space">
                      <Label as='a' basic size="mini"> Html5</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">CSS3</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">JavaScripts</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">React</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">React Hooks</Label>
                    </div>
                  </div>
                </div>

                <div className="myproj-site">
                  <a href="https://www.tyre.go.th/" target="_blank" rel="noopener noreferrer" className="myproj-link-style">
                    https://www.tyre.go.th/
                  </a>
                </div>
              </div>
            </div>

            <div className="myproj-box" onClick={() => modalOpen('ECO Motors')}>
              <div className="myproj-image-box">
                <Image
                  src={M1img}
                  className="myproj-image"
                />
              </div>

              <div className="myproj-detail-box">
                <div className="myproj-detail">
                  <div className="myproj-detail-title">
                    ECO STICKER MOTORS
                  </div>
                  <div className="myproj-detail-title-desc" style={{ marginBottom: '30px' }}> 
                    Government Agencies
                  </div>
                  <div className="myproj-detail-desc">
                    The origination and objective of ECO Sticker Motorcycle was assigned to define regulation for automotive industry operator
                    and importer to use ECO Sticker Motorcycle ... <b>read more</b>
                  </div>

                  <div className="myproj-detail-subtitle">
                    USED STACK:
                  </div>

                  <div className="myproj-used-stack-label">
                    <div className="label-space">
                      <Label as='a' basic size="mini">Html5</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">CSS3</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">JavaScripts</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">React</Label>
                    </div>

                    <div className="label-space">
                      <Label as='a' basic size="mini">React Hooks</Label>
                    </div>
                  </div>
                </div>

                <div className="myproj-site">
                  <a href="https://www.motorcycle.go.th/" target="_blank" rel="noopener noreferrer" className="myproj-link-style">
                    https://www.motorcycle.go.th/
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    </div>
  )
}
