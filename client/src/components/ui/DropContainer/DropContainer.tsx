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
                <span className={styles.subHeading}>{subheading}</span>
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

function ImageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
    )
}


function UploadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}

export default DropContainer
