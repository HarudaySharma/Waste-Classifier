import ImageUpload from '../../components/ImageUpload/ImageUpload'
import ImageInfo from '../../components/ImageInfo/ImageInfo'
import { CustomWebCam } from '../../components/WebCamera/CustomWebCam'
import { useAppSelector } from '../../hooks'
import { useSearchParams } from "react-router-dom"

function MainPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const { imageUrl } = useAppSelector(state => state.image);

    return (
        <main id='main_container' className="Main">
            {type === 'upload' && <ImageUpload />}
            {type === 'scan' && <CustomWebCam />}
            {imageUrl && <ImageInfo />}
        </main>
    )
}

export default MainPage
