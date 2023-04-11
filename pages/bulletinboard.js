import Link from 'next/link';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from 'react-bootstrap/Badge';


export default function BulletinBoard() {
  const [topics, setTopics] = useState([]);
  const router = useRouter();

  useEffect( () => {
    fetch('http://localhost:2325/topics')
    .then( resp => resp.json() )
    .then( result => {
      setTopics(result);
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
    return <ListGroup.Item key={t.id} as="li" className="d-flex justify-content-between align-items-start">
      <Link href={"/read/"+t.id}>{t.title}</Link>
      <Badge bg="warning" text="dark" onClick={ (e) => deleteTopic(t.id) }>삭제</Badge>
    </ListGroup.Item>
  })

  return (
    <>
    <h3>글 목록</h3>
    <ListGroup>
      {lis}
    </ListGroup>
    <Button variant="primary" href="/create">글쓰기</Button>
    </>
  )
}