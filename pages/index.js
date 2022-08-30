import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Card, Tooltip, Button, Grid, Spacer, Text } from "@nextui-org/react";
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>FoodTrackerApp Privacy Policy</title>
        <meta name="description" content="FoodTrackerApp Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text h1>
          FoodTrackerApp
        </Text>

        
      </main>

      <Spacer />

      <footer>
        <Container>

        <Link href="/privacypolicy" rel="noopener noreferrer">
          <a>Privacy Policy</a>
        </Link>

        </Container>
      </footer>
    </Container>
  )
}
