import Header from "../../components/ui/Header/Header";
import image from "../../assets/cristina-carrillo-gRL51XF4NWM-unsplash.jpg"

function About() {
    return (
        <div className="about">
            <Header />
            <main className='about__main'>
                <img src={image} className='about__main__img' />
                <section className='about__main__matter'>
                    <div className='about__main__matter__column1'>
                        <h1 className='about__main__matter__column1__heading'>
                            <span className='green bold'>About</span> Us
                        </h1>
                        <p className='about__main__matter__column1__para1'>
                            OUR APP MERGES TECHNOLOGY AND SUSTAINABILITY,
                            TACKLING WASTE WITH DETECTION, CLASSIFICATION,
                            AND RECYCLING GUIDANCE. ALIGNED WITH UN <span className='bold'>SDG-12</span>,
                            WE EMPOWER USERS TO MAKE ECO-CONSCIOUS
                            CHOICES, PROMOTING RESPONSIBLE CONSUMPTION
                            AND PRODUCTION.
                        </p>
                        <p className='about__main__matter__column1__para2'>
                            JOIN US IN FOSTERING A GREENER FUTURE THROUGH
                            PRACTICAL SOLUTIONS AND POSITIVE ENVIROMENTAL
                            IMPACT.
                        </p>
                    </div>
                    <footer className='about__main__matter__column2'>
                        <div className='about__main__matter__column2__column1'>
                            <h3>TEAM</h3>
                            <ul>
                                <li>Haruday</li>
                                <li>Harshit</li>
                                <li>Hritvik</li>
                                <li>Himanshu</li>
                            </ul>
                        </div>
                        <div className='about__main__matter__column2__column2'>
                            <h3>E-MAIL</h3>
                            <ul>
                                <li>1169@gmail.com</li>
                                <li>1168@gmail.com</li>
                                <li>1174@gmail.com</li>
                                <li>1172@gmail.com</li>
                            </ul>
                        </div>
                        <div className='about__main__matter__column2__column3'>
                            <h3>CONTACT</h3>
                            <ul>
                                <li>1234</li>
                                <li>5689</li>
                                <li>1026</li>
                                <li>4529</li>
                            </ul>
                        </div>
                    </footer>
                </section>
            </main>
        </ div >
    )
}

export default About;
