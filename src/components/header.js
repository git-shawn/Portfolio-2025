import React from "react";
import styles from "./header.module.css";
import useOnScreen from "@/components/isVisible";

const Header = (props) => {
    const { opacityStyle, appRef, writeRef, contactRef } = props;
    const isViewingApps = useOnScreen(appRef);
    const isViewingWriting = useOnScreen(writeRef);
    const isViewingContact = useOnScreen(contactRef);

    return (
        <header className={styles.header} style={opacityStyle}>
            <div className={styles.row}>
                <a href="#top" title="Back to top" className={styles.title}>Shawn</a>
                <div className={styles.buttons}>
                    <a href="#code" className={`${styles.button} ${isViewingApps ? styles.active : ''}`}>Code</a>
                    <a href="#writing" className={`${styles.button} ${isViewingWriting ? styles.active : ''}`}>Copy</a>
                    <a href="#contact" className={`${styles.button} ${isViewingContact ? styles.active : ''}`}>Contact</a>
                </div>
                <label title="Open menu">
                    <div className={styles.burger}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="currentColor" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round" style={{cursor: "pointer"}}>
                            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                                <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                            </path>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                            </rect>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                                <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                            </rect>
                        </svg>
                    </div>
                    <input type="checkbox"></input>
                </label>
            </div>
            <div className={styles.burgerButtons}>
                <a href="#code" className={`${styles.button} ${isViewingApps ? styles.active : ''}`}>Code</a>
                <a href="#writing" className={`${styles.button} ${isViewingWriting ? styles.active : ''}`}>Copy</a>
                <a href="#contact" className={`${styles.button} ${isViewingContact ? styles.active : ''}`}>Contact</a>
            </div>
        </header>
    )
}

export default Header