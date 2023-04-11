import Link from 'next/link';

export default function Layout( {children} ) {
    return (
        <>
            <ul className='NavBar'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Our Service</Link></li>
                <li><Link href="/bulletinboard">Memos</Link></li>
            </ul>
            
            <article className='MainBoxContainer'>
            <article className='MainBox'>
            {children}
            </article>
            </article>
        </>
    )
}

