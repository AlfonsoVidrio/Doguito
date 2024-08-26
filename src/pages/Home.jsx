import { ListPosts } from "../components/ListPosts.jsx";
import { ListCategories } from "../components/ListCategories.jsx";

export const Home = () => {
  return (
    <main className="animate__animated animate__fadeIn animate__faster">
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListPosts url={'/posts'}/>
    </main>
  )
}
