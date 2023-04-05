import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Read() {
    const router = useRouter();
    const [topic, setTopic] = useState( {title:'', body:''} )

    useEffect( () => {
        fetch('http://localhost:2325/topics/' + router.query.id)
            .then( (res) => res.json() )
            .then( (data) => {
                setTopic(data)
            })
    }, [router.query.id])

    return (
        <>
        <h3>{topic.title}</h3>
        {topic.body}
        <Link href="/bulletinboard">게시판으로</Link>
        </>
    )
}