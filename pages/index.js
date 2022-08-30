import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Card, Button, Text, Col, Row } from "@nextui-org/react";

import NavigationBar from '../components/NavigationBar';

export default function Home() {
  return (
    <>
    <NavigationBar active="Home" />
    <Container>
      <Head>
        <title>FoodTrackerApp Privacy Policy</title>
        <meta name="description" content="FoodTrackerApp Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ paddingTop: 0 }} >

        <Card css={{ w: "90%", h: "800px" }}>
          <Card.Header css={{ position:"absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform='uppercase' color="#9E9E9E">
                Food Tracker
              </Text>
              <Text h3 color="white">
                The easy way to eat
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0}}>
            <Card.Image 
              src="https://images.unsplash.com/photo-1621758851395-bdcaa7798ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Screenshot of the App"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur:"#0f111466",
              bottom: 0,
              zIndex: 1,
            }}
          >
          <Row>
            <Col>
              <Row>
                <Col span={3}>
                  <Card.Image
                    src="https://i.imgur.com/dAf5JTM.png"
                    css={{ bg: "black", br: "50%"}}
                    height={40}
                    width={40}
                    alt="FoodTrackerApp Logo"
                  />
                </Col>
                <Col>
                  <Text color="#d1d1d1" size={12} weight="bold">
                    FoodTrackerApp
                  </Text>
                  <Text color="#d1d1d1" size={12}>
                    The easy way to eat
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify='flex-end'>
                <Button
                  flat
                  auto
                  rounded
                  >
                    <Text
                    css={{color:"inherit"}}
                    size={12}
                    weight="bold"
                    transform='uppercase'
                    >
                      Get App
                    </Text>
                  </Button>
              </Row>
            </Col>
          </Row>
          </Card.Footer>
        </Card>
 

      </main>

    </Container>
    </>
  )
}
