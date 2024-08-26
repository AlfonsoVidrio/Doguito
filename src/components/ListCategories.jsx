import { useEffect, useState } from "react"
import { search } from "../api/api.js";
import { Link } from "react-router-dom";
import '../assets/css/blog.css';

// eslint-disable-next-line react/prop-types
export const ListCategories = ({ url }) => {

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        search(`/categories`, setCategories)
    }, [url])

    return (
        <ul className='category-list container flex'>
            {
                categories.map( category => (
                    <Link to={`/category/${category.id}`} key={category.id}>
                        <li className={`category-list__category category-list__category--${category.id}`}>    
                            {category.name}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}
