import Header from '../../components/ui/Header/Header'
import brokenGlassImg from '../../assets/broken-glass-920231_1280.jpg'
import pollutionImg from '../../assets/pollution-3441119_1280.jpg'
import garbageImg from '../../assets/garbage-4090382_1280.jpg'
import contaminationImg from '../../assets/contamination-4286704_1920.jpg'

const Info = () => {
    return (
        <div className='info'>
            <Header />
            <main className='info__main'>
                <section className='info__main__matter'>
                    <article className='info__main__matter__column1'>
                        <h1 className='info__main__matter__column1__heading'>
                            What is <span className='bold'>Waste ?</span>
                        </h1>
                        <p className='info__main__matter__column1__para'>
                            waste refers to materials or
                            products that are no longer useful or intended for their original purpose and are discarded.
                        </p>
                    </article>
                    <article className='info__main__matter__column2'>
                        <h1 className='info__main__matter__column2__heading'>
                            EFFECTS ON <span className='bold green'>Nature</span>
                        </h1>
                        <ul className='info__main__matter__column2__list'>
                            <li>
                                improper waste disposal can lead to
                                environmental pollution, harming
                                ecosystems, and endagering wildlife.
                            </li>
                            <li>
                                leachate from landfills can
                                contaminate soil and water resources
                                posing a threat to both human health
                                and biodiversity.
                            </li>
                        </ul>
                    </article>
                </section>
                <section className='info__main__collage'>
                    <img src={brokenGlassImg} className='info__main__collage__img1' />
                    <img src={pollutionImg} className='info__main__collage__img2' />
                    <img src={garbageImg} className='info__main__collage__img3' />
                    <img src={contaminationImg} className='info__main__collage__img4' />
                </section>
            </main>
        </div>
    )
}

export default Info
