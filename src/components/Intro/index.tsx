import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import MeImage from '../../images/me.png';

import LinkedIn from '../../assets/icons/linkedIn.svg';
import Github from '../../assets/icons/github.svg';
import Mail from '../../assets/icons/mail-24px.svg';
import DownloadSvg from '../../assets/icons/description-24px.svg';
import ResumePdf from '../../assets/resume.pdf';

function Intro() {
  return (
    <Container>
      <ProfileImage src={MeImage} width="80" height="80" />
      <Name>Jack Ng , Singapore</Name>
      <Description>
        Software Engineer <br />
        Specialized in React
      </Description>
      <Navigations>
        <li>
          <Link to="#experience">Work Experience</Link> <br />
        </li>
        <li>
          <Link to="#skill">Skill</Link>
        </li>

        <li>
          <Link to="#reading">My reading</Link>
        </li>
        <li>
          <ResumeLink href={ResumePdf} rel="noopener noreferrer" target="_blank">
            <Icon src={DownloadSvg} />
            Resume 2018-2021.pdf
          </ResumeLink>
        </li>
      </Navigations>
      <Contacts>
        <Icon
          link
          src={Github}
          imgProps={{ alt: 'github', title: 'github' }}
          text="https://github.com/jackngweiming"
        />
        <Icon src={Mail} imgProps={{ alt: 'email', title: 'email' }} text="jackng9995@gmail.com" />
        <Icon
          link
          src={LinkedIn}
          imgProps={{ alt: 'linkedIn', title: 'linkedIn' }}
          text="https://www.linkedin.com/in/jack-ng-b2593b151/"
        />
      </Contacts>
    </Container>
  );
}

const ProfileImage = styled.img`
  background-color: #585656;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: contain;
`;

const Name = styled.p`
  color: white;
  font-weight: bold;
  margin-top: 15px;
`;

const Description = styled.p`
  line-height: 1.8em;
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Navigations = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li {
    line-height: 1.5em;
    text-align: center;
    @media only screen and (min-width: 768px) {
      text-align: left;
    }
  }
  a {
    font-size: 1em;
    text-decoration: underline;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 30px;
  @media only screen and (min-width: 768px) {
    display: block;
    height: auto;
  }
`;
// const ShortBio = styled.p`
//   font-size: 0.9em;
//   line-height: 1.5em;
// `;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 320px) {
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    justify-content: start;
    align-items: start;
    font-size: 0.8em;
  }

  /* align-items: center; */
  /* justify-content: space-around; */
  /* flex-wrap: wrap; */
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: auto;
  padding: 5px 10px;
  background-color: #1a1a1a;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none !important;
`;

type IconProps = {
  src: string;
  text?: string;
  link?: boolean;
  imgProps?: React.HTMLProps<HTMLImageElement>;
};
function Icon(props: IconProps) {
  const { text, src, link, imgProps } = props;
  return (
    <IconContainer>
      <IconImg width="20" height="20" {...(imgProps as any)} src={src} />
      {link ? (
        <a target="_blank" rel="noreferrer" href={text}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </IconContainer>
  );
}

const IconContainer = styled.span`
  display: inline-flex;
  vertical-align: middle;
  font-size: 0.9em;

  @media only screen and (min-width: 320px) {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    align-items: start;
    justify-content: start;
    text-align: left;
  }
`;

const IconImg = styled.img`
  width: 20px;
  padding-right: 5px;
`;

export default Intro;
