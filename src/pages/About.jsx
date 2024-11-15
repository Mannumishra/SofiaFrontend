import React from 'react';
import AboutImg from '../assets/images/aboutpic-re.png';
import { FaEnvelope } from 'react-icons/fa';
import missionImg from '../assets/images/mission.png';
import customerImg from '../assets/images/customer-re.png';


function About() {


    // cardData Data Array
    const cardData = [
        {
            title: "Manufacturing Excellence",
            text: "Our manufacturing processes adhere to the highest industry standards. We employ precision engineering and rigorous quality control measures to produce implants that meet or exceed regulatory requirements."
        },
        {
            title: "Research and Development",
            text: "At Sofia Surgicals Pvt. Ltd., innovation drives our R&D efforts. Our state-of-the-art laboratories and partnerships with leading medical institutions enable us to pioneer new technologies and materials that enhance the performance and safety of our implants."
        },
        {
            title: "Research and Development",
            text: "At Sofia Surgicals Pvt. Ltd., innovation drives our R&D efforts. Our state-of-the-art laboratories and partnerships with leading medical institutions enable us to pioneer new technologies and materials that enhance the performance and safety of our implants."
        },
        {
            title: "Research and Development",
            text: "At Sofia Surgicals Pvt. Ltd., innovation drives our R&D efforts. Our state-of-the-art laboratories and partnerships with leading medical institutions enable us to pioneer new technologies and materials that enhance the performance and safety of our implants."
        }
    ];

   

    const Card = ({ title, text }) => (
        <div className="col-md-6 pt-4">
            <div className="CardText">
                <div className="card-body text-center">
                    <div className="mb-2 fs-2">
                        <FaEnvelope style={{ color: '#3496FF' }} />
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" style={{ fontSize: '.9rem' }}>{text}</p>
                </div>
            </div>
        </div>
    );


    return (
        <>
            <section className="homeSection" style={{background:'linear-gradient(180deg, #CEE5FD 0%, #FFFFFF 100%)'
}}>
                <div className="container-fluid">
                    <div className="row px-3 px-md-5">
                        <div className="col-md-6 pt-5">
                            <div className="textSection">
                                <h2 className="h2Text">
                                    Your Trusted Source for <br />
                                    <span>
                                        Quality Orthopedic <br />
                                        Implants <span className='and'> & </span> Instruments
                                    </span>
                                </h2>
                                <p>
                                    Over 16 years of excellence in manufacturing,<br />
                                    exporting, and supplying top-quality<br />
                                    orthopedic trauma products globally.
                                </p>
                                <button type="submit" className="btn btn-primary px-4 w-30">View Products → </button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={AboutImg} alt="AboutImg" className="img-fluid" style={{ height: '400px', width:"90%" }} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid mt-5">
                <div className="explore-container">
                    <div className="explore text-center">BENEFITS</div>
                </div>
                <h2 className="text-center pt-1 explorep" style={{ fontSize: '1.75rem', fontWeight: '700' }}>How We Are Your Trusted Partner?</h2>

                <div className="container-fluid mb-5">
                    <div className="row px-3 px-md-5">
                        {cardData.map((card, index) => (
                            <Card key={index} title={card.title} text={card.text} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="aboutSection mt-3" style={{ background: 'linear-gradient(180deg, #CEE5FD, #FFFFFF 100%)' }}>
                <div className="container-fluid pt-3 mb-3">
                    <div className="row px-3 px-md-5">
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
                </div>
            </div>

            <div className="container-fluid mt-4 mb-4">
                <div className="row px-3 px-md-5">
                    <div className="col-md-8">
                        <div className="ourMission">
                            <h2 className="mission">Vision & Mission</h2>
                            <p className="missionPara">Our mission is to enhance the quality of life for
                                patients through advanced orthopedic solutions. We envision a world
                                where everyone can achieve optimal mobility and functionality, free from
                                the limitations of musculoskeletal disorders.</p>
                            {/* <p className="name">Simrat Kaur</p>
                            <p className="position">Founder of Sofia</p> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={missionImg} className="missionImg" alt="missionImg" height={'300px'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;