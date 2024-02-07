import React from 'react'
import styles from "./MainPage.module.scss"
import ParentContainer from '../../components/ImageUpload/ParentContainer'

function MainPage() {
    return (
        <div>
            <h1 className={styles.heading}>MainPage</h1>
            <ParentContainer/>
        </div>
    )
}

export default MainPage
