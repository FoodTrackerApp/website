import { Container, Spacer } from "@nextui-org/react"
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Footer() {

    return (
    <>
    <footer>
    <Container style={{gap:10, flex: 1, flexDirection: "row", display: "flex", margin: "2rem"}}>
        
        <div>
            <Link href="/" rel="noopener noreferrer">
                <a className={styles.link}>Home</a>
            </Link>
        </div>

        <div>
            <Link href="/privacypolicy" rel="noopener noreferrer">
                <a className={styles.link}>Privacy Policy</a>
            </Link>
        </div>

    </Container>
    </footer>
    </>
    )
}