import React from 'react'
import styles from "./MainPage.module.scss"
import WasteClassificationContainer from "../../containers/WasteClassificationContainer"

function MainPage() {
    return (
        <div>
            <h1 className={styles.heading}>MainPage</h1>
            <WasteClassificationContainer/>
        </div>
    )
}

export default MainPage
