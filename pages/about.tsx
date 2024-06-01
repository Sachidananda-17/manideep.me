import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPrisma,
  SiNumpy,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiJupyter,
  SiAndroidstudio,
  SiFlutter,
  SiDart,
  SiDocker,
  SiGit,
  SiGithub,
  SiNetlify,
  SiPostman,
  SiSolidity,
  SiVercel,



} from 'react-icons/si';
import { getPosts, Post } from '@posts';
import { TransparentLink } from '@components';

interface AboutProps {
  experiences: Post[];
}

const stacks = [
  {
    Icon: SiJavascript,
    url: 'https://www.javascript.com/',
    name: 'Javascript',
  },
  {
    Icon: SiReact,
    url: 'https://react.dev/',
    name: 'React',
  },
  {
    Icon: SiNextdotjs,
    url: 'https://nextjs.org/',
    name: 'NextJS'
  },
  {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
  },
  {
    Icon: SiTailwindcss,
    url: 'https://tailwindcss.com/',
    name: 'TailwindCSS'
  },
  {
    Icon: SiBootstrap,
    url: 'https://getbootstrap.com/',
    name: 'Bootstrap',
  },
  {
    Icon: SiHtml5,
    url: 'https://www.w3schools.com/html/',
    name :'HTML',
  },
  {
    Icon: SiCss3,
    url: 'https://www.w3schools.com/css/',
    name: 'CSS',
  },
  {
    Icon: SiRedux,
    url: 'https://redux.js.org/',
    name: 'Redux',
  },

];

// Backend
const backend = [
  {
    Icon: SiNodedotjs,
    url: 'https://nodejs.org/en',
    name: 'Nodejs',
  },
  {
    Icon: SiExpress,
    url: 'https://expressjs.com/',
    name: 'Express',
  },
  {
    Icon: SiPython,
    url: 'https://www.python.org/',
    name: 'Python',
  },
  
];

// DataBase
const database = [
  {
    Icon: SiMongodb,
    url: 'https://www.mongodb.com/',
    name: 'Mongodb',
  },
  {
    Icon: SiMysql,
    url: 'https://www.mysql.com/',
    name: 'Mysql',
  },
  {
    Icon: SiFirebase,
    url: 'https://firebase.google.com/',
    name: 'Firebase',
  },
  {
    Icon: SiPrisma,
    url: 'https://www.prisma.io/',
    name: 'Prisma',
  },
  
];

// AI
const ai = [
  {
    Icon: SiNumpy,
    url: 'https://numpy.org/',
    name: 'Numpy',
  },
  {
    Icon: SiPytorch,
    url: 'https://pytorch.org/',
    name: 'Pytorch',
  },
  {
    Icon: SiKeras,
    url: 'https://keras.io/',
    name: 'Keras',
  },
  {
    Icon: SiTensorflow,
    url: 'https://www.tensorflow.org/',
    name: 'Tensorflow',
  },
  {
    Icon: SiPandas,
    url: 'https://pandas.pydata.org/',
    name: 'Pandas',
  },
  {
    Icon: SiJupyter,
    url: 'https://jupyter.org/',
    name: 'Jupyter'
  },
  
];

// Others
const others = [
  {
    Icon: SiAndroidstudio,
    url: 'https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjw6uWyBhD1ARIsAIMcADqrtk_Dj7l8aKwnV0pDGdUj7Z843Z4JBvHL5nZGXx_bJN-38pThCEkaAkbQEALw_wcB&gclsrc=aw.ds',
    name: 'AndroidStudio',
  },
  {
    Icon: SiFlutter,
    url: 'https://flutter.dev/?gad_source=1&gclid=Cj0KCQjw6uWyBhD1ARIsAIMcADokYzhqCofmhLpWAki7BmoRZPU8b0r3dLYTgRcBFAUYGUiYTlDLgVkaAuVVEALw_wcB&gclsrc=aw.ds',
    name: 'Flutter',
  },
  {
    Icon: SiDart,
    url: 'https://dart.dev/',
    name: 'Dart',
  },
  {
    Icon: SiGit,
    url: 'https://git-scm.com/',
    name: 'Git',
  },
  {
    Icon: SiGithub,
    url: 'https://github.com/',
    name: 'Github',
  },
  {
    Icon: SiDocker,
    url: 'https://www.docker.com/',
    name: 'Docker,'
  },
  {
    Icon: SiVercel,
    url: 'https://vercel.com/docs',
    name: 'Vercel',
  },
  {
    Icon: SiNetlify,
    url: 'https://www.netlify.com/',
    name: 'Netlify',
  },
  {
    Icon: SiPostman,
    url: 'https://www.postman.com/',
    name: 'Postman',
  },
  {
    Icon: SiSolidity,
    url: 'https://soliditylang.org/',
    name: 'Solidity',
  },
  
];



const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={['3rem', '4rem']} as="h2">
        Full Stack & Flutter Developer
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="2rem">
        <Text>I am a  passionate web and app developer from India .</Text>
        <Text>
        In my free time, I show interest in learning new technologies and working on industry-level projects to enhance my skills.
        </Text>
        <Text>
        Additionally, I have a strong interest in research, which has led me to achieve notable accomplishments in the fields of <b>Machine learning</b> and <b>Blockchain technologies</b>.
        </Text>
      </Container>
    </Container>

    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Title fontSize="40px" as="h2">
        Technologies I frequently use
      </Title>

      {/* frontend */}

      <Container
       paddingY="4rem"  gridGap="2rem" alignContent="center" alignItems="center" textAlign="left" width="100%">
       <Title fontSize="20px" as="h2" >
         Frontend:
       </Title>
       <Grid gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']} gridGap="1rem" justifyItems="center" maxWidth="40rem">
         {stacks.map(({ Icon, url, name }, i) => (
           <Link href={url} key={url}>
             <Card key={i} >
               <Icon size="2rem" />
               <Text fontSize="0.6rem" marginTop="0.5rem" marginLeft= "0.5rem" textAlign="center">
                 {name}
               </Text>
             </Card>
           </Link>
         ))}
       </Grid>

      {/* backened */}

      <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="left"
      width="100%"
    >
       <Title fontSize="20px" as="h2">
        Backend :-
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {backend.map(({ Icon, url, name  }, i) => (
          <Link href={url} key={url}>
            <Card key={i} style={{ marginLeft: i === 0 ? '1rem' : '0' }}>
              <Icon size="2rem" />
              <Text fontSize="0.6rem" marginTop="0.5rem" marginLeft= "0.5rem" textAlign="center">
                 {name}
               </Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>


    {/* database */}

    
    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="left"
      width="100%"
    >
       <Title fontSize="20px" as="h2">
        Database :-
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {database.map(({ Icon, url,name }, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" />
              <Text fontSize="0.6rem" marginTop="0.5rem" marginLeft= "0.5rem" textAlign="center">
                 {name}
               </Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>

     {/* AI */}

    
     <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="left"
      width="100%"
    >
       <Title fontSize="20px" as="h2">
        AI & ML :-
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {ai.map(({ Icon, url , name}, i) => (
          <Link href={url} key={url}>
            <Card key={i}>
              <Icon size="2rem" />
              <Text fontSize="0.6rem" marginTop="0.5rem" marginLeft= "0.5rem" textAlign="center">
                 {name}
               </Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>

    {/* others */}

    
    <Container
      paddingY="4rem"
      gridGap="2rem"
      alignContent="center"
      alignItems="center"
      textAlign="left"
      width="100%"
    >
       <Title fontSize="20px" as="h2">
        Others :-
      </Title>
      <Grid
        gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
        gridGap="1rem"
        justifyItems="center"
        maxWidth="40rem"
      >
        {others.map(({ Icon, url, name }, i) => (
          <Link href={url} key={url}>
            <Card key={i} >
              <Icon size="2rem" />
              <Text fontSize="0.6rem" marginTop="0.5rem" marginLeft= "0.5rem" textAlign="center">
                 {name}
               </Text>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
   
    </Container>
    </Container>
    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experiences
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => (
          <TransparentLink href={`/about/${data.slug}`} key={data.slug}>
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <Text>0{experiences.length - i}</Text>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text fontSize="smaller" margin={0}>
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                </Container>
                <Text fontSize="1.5rem">&rarr;</Text>
              </Grid>
            </Grid>
          </TransparentLink>
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
