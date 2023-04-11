import styled from 'styled-components';
import Image from 'next/image';
import logo from './monguimg.png'

export default function Home() {
  return (
    <>
        <Headings>Welcome to Mongu's Homepage</Headings>
        <MyDiv>The Orsay Museum in Paris is a world-renowned art museum housed in a former train station, featuring an impressive collection of Impressionist and Post-Impressionist art.</MyDiv>
        <MyHr />
        <MyDiv>The Musée d'Art moderne de la ville de Paris is a contemporary art museum in Paris with a diverse collection of works from the 20th and 21st centuries.</MyDiv>
        <MyHr />
        <ImageBox>
        <Image src={logo} width={280}></Image>
        </ImageBox>
    </>
  )
}

const Headings = styled.h1`
  align-self: center;
  color: #2b3b34;
`

const ImageBox = styled.div`
    width: 280px;
    height: 280px; 
    border-radius: 70%;
    overflow: hidden;

    &:hover {
      scale: 1.05;
      transition: 0.4s;
    }
`
console.log(Image);

const MyHr = styled.hr`
    width: 90px;
    border: solid 4px #6b9080;
    border-radius: 7px 
`

const MyDiv = styled.div`
  text-align: center;
`