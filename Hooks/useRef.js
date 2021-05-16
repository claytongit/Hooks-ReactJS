import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ({post, onclick}) => {
    console.log('Filho renderizou');
    return(
        <div>
            <h1 onClick={() => onclick(post.title)} >{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

Post.prototypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    }),
    onClick: P.func,
}

export default function App() {
    console.log('Component Pai redenrizou');

    const  [ posts, setPosts ] = useState([]);
    const  [ value, setValue ] = useState('');
    const input = useRef(null); //Cria uma referencia para um elemento

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( (r) => r.json() )
            .then( (r) => setPosts(r) );
    },[]);

    //Redenriza toda vez que o input muda o valor 
    useEffect(() => {
        input.current.focus(); //Cria um focus no input
        console.log(input.current);
    }, [value]);

    const handleClick = (value) => {
        setValue(value); 
    }

    return (
        <div className="App">
            <p>
                <input 
                    ref={input} //Faz referencia para o input do useRef()
                    type="search" 
                    value={value} 
                    onChange={ (e) => setValue(e.target.value)} 
                />
            </p>
            
            {
                useMemo(() => {
                    return posts.length > 0 ?
                    posts.map(post =>(
                        <Post post={post} key={post.id} onclick={ handleClick } />
                    ))
                    :
                    <h1>Carregando....</h1>
                },[posts])
            }
        </div>
    );
}