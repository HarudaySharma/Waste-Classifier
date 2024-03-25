//import EGoal1 from "../../assets/E-Goal-03-1024x1024.png";
//import EGoal2 from "../../assets/E-Goal-11-1024x1024.png";
//import EGoal3 from "../../assets/E-Goal-12-1024x1024.png";

const Goals = () => {
    return (
        <main id='main_container' className='goals__main'>
            <section className='goals__main__matter'>
                <article className='goals__main__matter__column1'>
                    <h1 className='goals__main__matter__column1__heading'>
                        <span className='green bold'>SDG's</span> Addressed
                    </h1>
                    <p className='goals__main__matter__column1__para'>
                        The Sustainable Development Goals (SDGs) are a set of
                        17 global objectives established by the United Nations to
                        address diverse challenges and promote worldwide sustainability by 2030.
                    </p>
                </article>
            </section>
            <section className='goals__main__collage'>
                <div className='goals__main__collage__img1'>
                    <a href='https://en.wikipedia.org/wiki/Sustainable_Development_Goal_3' target="_blank" className='goals__main__collage__img1__link' >
                        Know More!
                    </a>
                </div>

                <div className='goals__main__collage__img2'>
                    <a href='https://en.wikipedia.org/wiki/Sustainable_Development_Goal_11' target="_blank" className='goals__main__collage__img2__link' >
                        Know More!
                    </a>
                </div>
                <div className='goals__main__collage__img3'>
                    <a href='https://en.wikipedia.org/wiki/Sustainable_Development_Goal_12' target="_blank" className='goals__main__collage__img3__link'>
                        Know More!
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Goals;
