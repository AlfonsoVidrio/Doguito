import { useEffect, useState } from "react"
import { search } from "../api/api.js";
import { Link } from "react-router-dom";
import '../assets/css/blog.css';

export const ListCategories = () => {

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        search(`/categorias`, setCategories)
    }, [])

    return (
        <ul className='category-list container flex'>
            {
                categories.map( category => (
                    <Link to={`/categoria/${category.id}`} key={category.id}>
                        <li className={`category-list__category category-list__category--${category.id}`}>    
                            {category.name}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}
