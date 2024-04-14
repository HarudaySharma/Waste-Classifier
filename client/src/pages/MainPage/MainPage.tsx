import ImageUpload from '../../components/ImageUpload/ImageUpload'
import ImageInfo from '../../components/ImageInfo/ImageInfo'
import { useSearchParams } from "react-router-dom"
import CustomWebCam from '../../components/WebCamera/CustomWebCam';

function MainPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    const ImageSendOption = () => {
        return type === 'scan' ? <CustomWebCam /> : <ImageUpload />;
    }

    return (
        <main id='main_container' className="Main">
            <ImageSendOption />
            <ImageInfo />
        </main>
    )
}

export default MainPage
