import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"

export default function Navbar (){
    return (
        <nav className={styles.navbar}>
            <div>
                <Image src="/images/pokeball.png" width="30" height="30" alt="Pokenext"/>
                <h1>Pokenext</h1>
            </div>
            <ul>
                <li>
                    <Link href = '/'>Home</Link>
                </li>
                <li>
                    <Link href = '/About'>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}

