import { useState, useEffect } from 'react';
import '../assets/css/componentes/card.css';
import { search } from '../api/api.js';
import { Link } from 'react-router-dom';
import 'animate.css';

export const ListPosts = ({ url }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        search(url, setPosts)
    }, [url])

    return (
        <section className="posts container">
            {posts.map((post) => {
                const { id, title, metadescription, categoria, body } = post;
                return <Link key={id} to={`/post/${id}`} className={`post__card post-card--${categoria}`}>
                    <article className="card-post">
                        <h3 className="post-card__title">{title}</h3>
                        <p className="post-card__text">{ body }</p>
                    </article>
                </Link>
            })}
        </section>
    )
}
