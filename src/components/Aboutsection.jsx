import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import customerImg from '../assets/images/customer-re.png';
import missionImg from '../assets/images/mission.png';
import fa110 from '../assets/images/fa110.jpeg';
import fa111 from '../assets/images/fa111.jpeg';
import fa112 from '../assets/images/fa112.jpeg';
import fa113 from '../assets/images/fa113.jpeg';
import fa114 from '../assets/images/fa114.jpeg';
import fa115 from '../assets/images/fa115.jpeg';

function Aboutsection() {

    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setCurrentImage(image);
        setShow(true);
    }

    return (
        <>

            <div className="row px-3 px-md-5 mt-4 pt-4 card-category">
                <div className="col-md-6">
                    <div className="explore-container1 ">
                        <div className="line"></div>
                        <div className="explore1">ABOUT US</div>
                    </div>
                    <div className="aboutText">
                        <h2 className='aboutHead'>Leading the Way in Orthopedic <br />Innovation Since <span>2010</span></h2>
                        <p className='para'>Our Story Founded in 2010, Sofia Surgicals Pvt. Ltd. has been at the
                            forefront of orthopedic innovation. With a commitment to improving
                            patient outcomes, our team of experts collaborates with leading
                            surgeons and researchers to develop cutting-edge orthopedic implants.
                            Sofia has an experience of 27 years as a Manufacturer since 1996. The
                            company is engaged in manufacturing: Mini Fragment Plate, Small Fragment
                            Plates, Large Fragment Plates, Hip Prosthesis, DHS/DCS Plates, Bone Screws ,
                            Locking Plates, Locking Screws , Intramedullary Nails, Spine Implants, Pins-
                            Wires-Drill-Bits, Fixator Ilizarow &amp; Clamp and Power Tools as well as various
                            Orthopedicle Instruments. Our Manufacturing unit is based in Delhi (INDIA).
                            With the aim of serving patients and medical fraternity across the global
                            market, we are always committed to provide the best products and services to
                            ensure total satisfaction of the clients. We provide our products in indian
                            competitive prices and overseas markets.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={customerImg} className="aboutImg" alt="" width={'100%'} height={'520px'} />
                </div>
            </div>

            <div className="row px-3 px-md-5 pt-5 mt-2 card-category">
                <div className="col-md-6">
                    <div className="explore-container1">
                        <div className="line"></div>
                        <div className="explore1">GLOBAL REACH</div>
                    </div>
                    <h2 className="headh2">Expansive Network Serving Over 40 Countries Worldwide</h2>
                </div>
                <div className="col-md-6 pb-4">
                    <p className="Globalpara">We have a well-spread business network extending to various parts of India and across Africa, South Asia, Middle East and Central Asia. Currently we are exporting our products to more than forty countries across the globe. We are successfully catering to the needs of medical fraternity, medical colleges, hospitals and pharmaceutical companies in these regions.</p>
                </div>
            </div>
            <div className="row px-3 px-md-5 p-2" style={{ background: '#fff', borderRadius: '10px' }}>
                <div className="col-md-3">
                    <img src={fa110} alt="" onClick={() => handleShow(fa110)} className='pt-3' height={'400px'} width={'100%'} style={{ borderRadius: '6px', cursor: 'pointer' }} />
                </div>
                <div className="col-md-3">
                    <div>
                        <img src={fa111} alt="" className='pt-3' onClick={() => handleShow(fa111)} height={'200px'} width={'100%'} style={{ borderRadius: '6px', cursor: 'pointer' }} />
                    </div>
                    <div>
                        <img src={fa112} alt="" onClick={() => handleShow(fa112)} className='pt-3' height={'200px'} width={'100%'} style={{ borderRadius: '6px', cursor: 'pointer' }} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src={fa113} alt="" className='pt-3' onClick={() => handleShow(fa113)} height={'200px'} width={'100%'} style={{ borderRadius: '6px', cursor: 'pointer' }} />
                    </div>
                    <div>
                        <img src={fa114} alt="" onClick={() => handleShow(fa114)} className='pt-3' height={'200px'} width={'100%'} style={{ borderRadius: '6px', cursor: 'pointer' }} />
                    </div>
                </div>
                <div className="col-md-3">
                    <img src={fa115} alt="" className='pt-3' onClick={() => handleShow(fa115)} height={'400px'} width={'100%'} style={{ borderRadius: '6px', cursor: 'pointer' }} />
                </div>
            </div>



            <div className="row px-3 px-md-5 mt-4 mb-4">
                <div className="col-md-8">
                    <div className="ourMission">
                        <h2 className="mission">Vision & Mission</h2>
                        <p className="missionPara">Our mission is to enhance the quality of life for
                            patients through advanced orthopedic solutions...</p>
                        <p className="name">Simrat Kaur</p>
                        <p className="position">Founder of Sofia</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={missionImg} className="missionImg" alt="missionImg" height={'300px'} />
                </div>
            </div>


            <Modal show={show} onHide={handleClose} centered>
                {/* <Modal.Header closeButton> */}
                {/* <Modal.Title>Image Preview</Modal.Title> */}
                {/* </Modal.Header> */}
                <Modal.Body>
                    <img src={currentImage} alt="Selected" width="100%" height='380px' />
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default Aboutsection;
