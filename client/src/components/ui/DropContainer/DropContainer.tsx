import { useRef } from 'react'
import styles from "./DropContainer.module.scss"

interface DropContainerProps {
    active: boolean;
    heading: string;
    subheading: string;
    onImageUpload: React.ChangeEventHandler<HTMLInputElement>;
    onImageDrop: React.DragEventHandler<HTMLDivElement>;
}

const DropContainer: React.FC<DropContainerProps> = ({
    heading,
    subheading,
    active,
    onImageUpload,
    onImageDrop,
}) => {
    const fileInputRef = useRef(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (fileInputRef)
            onImageUpload(e);

    }
    const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onImageDrop(e);
        console.log(e.dataTransfer.files);
    }

    return (
        active &&
        <form
            onSubmit={(e) => e.preventDefault()}
            onDragEnter={handleDrag}
        >
            <div className={styles['drop-box']}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
            >
                <div className={styles.upBtn}> 
                <UploadIcon className="upload-icon" />
                    <span className={styles.label1}>{heading}</span>
                </div>
                <div className={styles.or}> or </div>
                <div className={styles.subHeading}>{subheading}</div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept='image/jpeg image/png image/jpg'
                    onChange={handleUpload}
                    hidden
                />
            </div>
        </form>
    )
}

export default DropContainer
