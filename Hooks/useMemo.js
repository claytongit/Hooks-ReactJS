import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

//Componente filho não pode ficar renderizando
const Post = ({post}) => {
    console.log('Filho renderizou');
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

Post.prototypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    })
}

export default function useMemo() {
    console.log('Component Pai redenrizou');

    const  [ posts, setPosts ] = useState([]);
    const  [ value, setValue ] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then( (r) => r.json() )
                .then( (r) => setPosts(r) );
        }, 5000);
    }, []);

    return (
        <div className="App">
            <p>
                <input type="search" value={value} onChange={ (e) => setValue(e.target.value)} />
            </p>
            
            {
                //Guarda os posts em memoria para redenrizar somente quando 'posts' for alterado
                useMemo(() => {
                    return posts.length > 0 ?
                    posts.map(post =>(
                        <Post post={post} key={post.id} />
                    ))
                    :
                    <h1>Carregando....</h1>
                },[posts])
            }
        </div>
    );
}