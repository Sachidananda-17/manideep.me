import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Title, Button, Grid, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="25px"
      paddingBottom="40px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/trail.webp"
          alt="Sachidananda Manideep"
          width={150}
          height={150}
          objectFit="none"
          className={styles.image}
        />
        <Title>Sachidananda Manideep</Title>
        <Title
          fontSize="2rem"
          color="rgba(0, 0, 0, 0.6)"
          fontWeight="500"
          as="h2"
        >
          Web & Flutter Developer
        </Title>
      </Container>
      <Container maxWidth="700px" gridGap="3rem">
        <Container>
          <Text textAlign="center">
            I'm a Full Stack and Flutter developer with experience in Devop's, Data Structures. Contributed as Freelancer to various corporate projects.
          </Text>
          <Text textAlign="center">
          I am always open to  new professional connections 🤝 and exploring for  opportunities to work 🧑‍💻.Feel free to reach & discuss potential collaborations or internship prospects. 
          </Text>
        </Container>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
    </Container>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
        <Title fontSize="3rem" as="h3">
          Get in touch
        </Title>
        <Text textAlign="center">
          My inbox is still open for you. Feel free to ask me anything!
        </Text>
        <Grid
          gridGap="2rem"
          marginTop="2rem"
          gridTemplateColumns={['1fr', 'repeat(1, 1fr)']}
          justifyItems="stretch"
          alignItems="stretch"
        >
          <Link href="mailto:manideep.karalapati@gmail.com">
            <Button width="100%">
              <motion.span
                initial={{ display: 'inline-block' }}
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2.5,
                }}
              >
                👋
              </motion.span>{' '}
              Say hello
            </Button>
          </Link>
        </Grid>
      </Container>
    </Container>
  </Container>
);

export default Home;
