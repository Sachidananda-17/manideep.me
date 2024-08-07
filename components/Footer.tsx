import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin, SiTwitter, SiLeetcode } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
import { Instagram } from '@icons';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: auto;
  bottom: 0;
  left: 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const links = [
  {
    url: 'https://github.com/Sachidananda-17',
    icon: SiGithub,
  },
  {
    url: 'https://x.com/ManideepKarala1',
    icon: SiTwitter,
  },
  {
    url: 'mailto:manideep.karalapati@gmail.com',
    icon: MdMail,
  },
  {
    url: 'https://www.linkedin.com/in/sachidananda-manideep-649aa8239/',
    icon: SiLinkedin,
  },
  {
    url: 'https://leetcode.com/u/sachidananda_k/',
    icon: SiLeetcode,
  },
  {
    url: 'https://www.instagram.com/mani.deeepu/',
    icon: Instagram,
  },
];

const Footer = (): JSX.Element => (
  <StyledFooter className='temp'>
    <Container paddingY="25px">
      <Grid gridGap="30px">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="https://drive.google.com/file/d/11JKEEixsgvg9EXTwDTYLa8yWGzrBySHm/view?usp=sharing">Resume</Link>
        <Link href="mailto:manideep.karalapati@gmail.com">Contact</Link>
      </Grid>
    </Container>
    <FooterGrid>
      {links.map(({ url, icon: Icon }) => (
        <Link key={url} target="_blank" opacity={0.7} href={url}>
          <Icon size={22} />
        </Link>
      ))}
    </FooterGrid>
    <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
      © Sachidananda Manideep 2023 → {new Date().getFullYear()}
    </Text>
  </StyledFooter>
);

export default Footer;
