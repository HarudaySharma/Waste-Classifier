import ImageUpload from '../../components/ImageUpload/ImageUpload'
import ImageInfo from '../../components/ImageInfo/ImageInfo'
import { CustomWebCam } from '../../components/WebCamera/CustomWebCam'
import { useAppSelector } from '../../hooks'
import { useSearchParams } from "react-router-dom"
import ReactLoading from 'react-loading';
import { useEffect } from "react"

function MainPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const { loading, imageUrl } = useAppSelector(state => state.image);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty(
            "--main-page-grid-template-columns", "1fr")
        root.style.setProperty(
            "--main-page-grid-template-rows", "1fr")
        root.style.setProperty(
            "--main-page-grid-area", `"c1"`)
    }, []);

    useEffect(() => {
        if (!loading && !imageUrl)
            return;
        const root = document.documentElement;
        root.style.setProperty(
            "--main-page-grid-template-columns", "1fr 1fr")
        root.style.setProperty(
            "--main-page-grid-template-rows", "1fr 1fr")
        root.style.setProperty(
            "--main-page-grid-area", `"c2 c3" "c1 c3"`)
    }, [loading, imageUrl]);

    return (
        <main id='main_container' className="Main__wrapper">
            {type === 'upload' && <ImageUpload />}
            {type === 'scan' && <CustomWebCam />}
            {
                !imageUrl && loading
                    ? <ReactLoading type="bars" className="loader" />
                    : <img className='waste-img' src={imageUrl} />
            }
            {imageUrl && <ImageInfo />}
        </main>
    )
}

export default MainPage
