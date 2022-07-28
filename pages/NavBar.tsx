import React from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (
        <div className={styles.bar}>
            <h1 className={styles.name}>Ian Sornson</h1>
            <div className={styles.bookmarks}>
                
                <Link href="">
                    <a className={styles.bookmark}>Home</a>
                </Link>
                <Link href="#about">
                    <a className={styles.bookmark}>About</a>
                </Link>
                <Link href="#projects">
                    <a className={styles.bookmark}>Projects</a>
                </Link>
                {/* <Link href="#contact">
                    <a className={styles.bookmark}>Contact</a>
                </Link> */}
            </div>
        </div>
    );
}

export default NavBar;