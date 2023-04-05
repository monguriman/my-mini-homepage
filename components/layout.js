import Link from 'next/link';
export default function Layout( {children} ) {
    return (
        <>
        <h2><Link href="/">Web App</Link></h2>
        <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/bulletinboard">게시판</Link></li>
        </ul>
        <article>
        {children}
        </article>
        </>
    )
}