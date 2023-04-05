import { useRouter } from "next/router";

export default function Create () {
    const router = useRouter();

    const handler = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const body = e.target.body.value;
        const data = { title: title, body: body };

        fetch('http://localhost:2325/topics', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then( resp => resp.json() )
        .then( result => {
            router.push('/read/'+result.id);
        });
    }

    return (
        <form onSubmit={handler}>
            <p> 제목 <input type='text' name='title' placeholder="제목을 입력하세요."/> </p>
            <p> 내용 <textarea name='body' placeholder="내용을 입력하세요."/> </p>
            <p> <input type='submit' value='작성완료' /></p>
        </form>
    )
}