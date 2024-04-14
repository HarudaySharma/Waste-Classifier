import { useSearchParams } from 'react-router-dom';
import Button from './ui/Button/Button';
import scanIcon from '../assets/vector.png'
import uploadIcon from '../assets/upload.png'

interface ChangeButtonProps {
    switchTo: "scan" | "upload"
}

const ChangeButton = ({ switchTo }: ChangeButtonProps) => {
    const [, setURLSearchParams] = useSearchParams();

    const onBtnClick = () => {
        setURLSearchParams({ type: switchTo });
    }

    const ButtonContent = () => {
        let src = scanIcon, alt = "scanIcon", text = "SCAN";
        if (switchTo === 'scan') {
            src = uploadIcon;
            alt = "uploadIcon";
            text = "UPLOAD";

        }
        return (
            <>
                <img src={src} alt={alt} />
                {text}
            </>
        )
    }

    if (switchTo === 'scan' || switchTo === 'upload') {
        return (
            <Button className='change-btn' onClickHandler={onBtnClick}>
                <ButtonContent />
            </Button>
        )
    }
}

export default ChangeButton;
