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

  //삭제버튼 클릭시 삭제 후 글목록을 재렌더링
  const deleteTopic = (id) => {
    const confirmation = confirm("정말로 삭제하시겠습니까?");
    if (confirmation) {
  fetch('http://localhost:2325/topics/' + id, {
    method: "DELETE"
  })
    .then( resp => resp.json() )
    .then( result => {
      setTopics(topics.filter(topic => topic.id !== id));});
    }};

  //글목록과 삭제버튼 생성. 
  const lis = topics.map( (t) => {
    return <div><li key={t.id}>
      <Link href={"/read/"+t.id}>{t.title}</Link>
      <button onClick={ (e) => deleteTopic(t.id) }>삭제</button>
    </li></div>
  })

  return (
    <>
    <h3>글 목록</h3>
      {lis}
    <Link href="/create">글쓰기</Link>
    </>
  )
}
