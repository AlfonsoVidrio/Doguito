import { useState, useEffect } from 'react';
import { search } from '../api/api.js';
import '../assets/css/blog.css';
import { ListCategories } from '../components/ListCategories.jsx';
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom';
import { ListPosts } from '../components/ListPosts.jsx';
import { Subcategory } from './Subcategory.jsx';

export const Category = () => {
    const [ subcategories, setSubcategories] = useState([]);
    const { id } = useParams();
    
    const url = useResolvedPath('').pathname;


    useEffect( () => {
        search(`/categories?id=${id}`, (response) => {
            setSubcategories(response[0].subcategories)
        })
    },[id]) 

    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategories.map(subcategory => (
                        <li className={`category-list__category category-list__category--${id}`}  key={subcategory}>
                            <Link to={`${url}/${subcategory}`}>
                                {subcategory}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?category=${id}`} />}/>
                <Route path='/:subcategory' element={<Subcategory />}/>
            </Routes>
            
        </>
    )
}
