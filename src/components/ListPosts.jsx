import { useState, useEffect } from 'react';
import '../assets/css/componentes/card.css';
import { search } from '../api/api.js';
import { Link } from 'react-router-dom';
import 'animate.css';

// eslint-disable-next-line react/prop-types
export const ListPosts = ({ url }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        search(url, setPosts)
    }, [url])

    return (
        <section className="posts container">
            {posts.map((post) => {
                const { id, title, category, body } = post;
                return <Link key={id} to={`/post/${id}`} className={`post__card post-card--${category}`}>
                    <article className="card-post">
                        <h3 className="post-card__title">{title}</h3>
                        <p className="post-card__text">{ body }</p>
                    </article>
                </Link>
            })}
        </section>
    )
}
