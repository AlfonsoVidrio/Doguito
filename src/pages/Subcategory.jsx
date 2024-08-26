import { useParams } from "react-router-dom";
import { ListPosts } from "../components/ListPosts.jsx";

export const Subcategory = () => {
    const {subcategory} = useParams()   ;
    return (
        <ListPosts url={`/posts?subcategory=${subcategory}`}/>
    )
}
