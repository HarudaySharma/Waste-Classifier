import image from "../../assets/cristina-carrillo-gRL51XF4NWM-unsplash.jpg"

function About() {
    return (
        <main id='main_container' className='about__main'>
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
                    <h3 className="bold green">TEAM</h3>
                    <ul>
                        <li>
                            <div className="member-name">Himanshu</div>
                            <div className="member-email">himanshu1172.be22@chitkarauniversity.edu.in</div>
                        </li>
                        <li>
                            <div className="member-name">Haruday</div>
                            <div className="member-email">haruday1169.be22@chitkarauniversity.edu.in</div>
                        </li>
                        <li>
                            <div className="member-name">Harshit</div>
                            <div className="member-email">harshit1168.be22@chitkarauniversity.edu.in</div>
                        </li>
                        <li>
                            <div className="member-name">Hritvik</div>
                            <div className="member-email">hritvik1174.be22@chitkarauniversity.edu.in</div>
                        </li>
                    </ul>
                </footer>
            </section>
        </main>
    )
}

export default About;
