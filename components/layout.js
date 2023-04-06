import Link from 'next/link';
import styled from "styled-components";

export default function Layout( {children} ) {
    return (
        <>
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet" />
            </head>
            <Body>
            <h2><Link href="/">Web App</Link></h2>
            <NavBar>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/bulletinboard">게시판</Link></li>
            </NavBar>
            <article>
            {children}
            </article>
            </Body>
        </>
    )
}

const Body = styled.body`
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #f2f2f2;
`

const NavBar = styled.ul`
    display: flex;
    background-color: #d13b86;
    height: 50px;
    align-items: center;

    li {
        width: 180px;
        list-style: none;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: 400;
    }
`