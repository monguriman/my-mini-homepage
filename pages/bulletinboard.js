import Link from 'next/link';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';

export default function BulletinBoard() {
  const [topics, setTopics] = useState([]);
  const router = useRouter();

  useEffect( () => {
    fetch('http://localhost:2325/topics')
    .then( resp => resp.json() )
    .then( result => {
      setTopics(result);
      console.log(result);
    })
  }, [router.asPath] )

  const lis = topics.map( (t) => {
    return <li key={t.id}>
      <Link href={"/read/"+t.id}>{t.title}</Link>
    </li>
  })

  return (
    <>
    <h3>글 목록</h3>
      {lis}
    <Link href="/create">글쓰기</Link>
    </>
  )
}
