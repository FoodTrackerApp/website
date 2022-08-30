import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { Container, Card, Tooltip, Button, Grid, Spacer, Text, Collapse } from "@nextui-org/react";

import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

export default function Home() {
  return (
    <>
    <NavigationBar active="Privacy Policy" />
    <Container>
      <Head>
        <title>FoodTrackerApp Privacy Policy</title>
        <meta name="description" content="FoodTrackerApp Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Text h1>Privacy Policy</Text>

        <Collapse.Group accordion={false}>
          <Collapse title="What is gathered?" expanded >
            <Text p b>Nothing.</Text>
            <Text p>No. Seriously. I don&apos; gather any information at all from the app.</Text>
            <Text p blockquote>There are no cookies, no tracker or ads or anything else of that sort.</Text>
          </Collapse>
          <Collapse title="Why do you need camera access?" expanded>
            <Text p b>The camera is used to scan barcodes on products.</Text>
            <Text p>However, you don&apos;t need to give the App camera access for it to work.</Text>
            <Text p blockquote>Only the scanning feature will not be available without camera access.</Text>
          </Collapse>
          <Collapse title="Can I use the App without a camera?" expanded>
            <Text p b>Yes.</Text>
            <Text p>You don&apos;t need a camera for it to work.</Text>
            <Text p blockquote>Only the scanning feature will not be available without camera access.</Text>
          </Collapse>
        </Collapse.Group>
       
        <div className={styles.grid}>
          

          
        </div>
      </main>

      <Footer />
    </Container>
    </>
  )
}
