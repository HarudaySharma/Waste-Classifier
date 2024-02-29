import React from 'react'
import styles from "./MainPage.module.scss"
import Header from '../../components/ui/Header/Header'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import ImageInfo from '../../components/ImageInfo/ImageInfo'
import { CustomWebCam } from '../../components/WebCamera/CustomWebCam'

function MainPage() {
    return (
        <main>
            <Header />
            <div>
                <ImageUpload />
                <ImageInfo />
                <CustomWebCam/>
            </div>
        </main>
    )
}

export default MainPage
