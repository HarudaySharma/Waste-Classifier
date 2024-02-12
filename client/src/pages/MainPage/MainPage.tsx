import React from 'react'
import styles from "./MainPage.module.scss"
import WasteClassificationContainer from "../../containers/WasteClassificationContainer"
import Header from '../../components/ui/Header/Header'

function MainPage() {
    return (
        <main>
            <Header />
            <WasteClassificationContainer />
        </main>
    )
}

export default MainPage
