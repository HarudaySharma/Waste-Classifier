import React from 'react'
import styles from "./MainPage.module.scss"
import Header from '../../components/ui/Header/Header'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import ImageInfo from '../../components/ImageInfo/ImageInfo'

function MainPage() {
    return (
        <main>
            <Header />
            <div>
                <ImageUpload />
                <ImageInfo />
            </div>
        </main>
    )
}

export default MainPage
