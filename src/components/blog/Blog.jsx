import SectionHeader from "../SectionHeader"
import PostList from "./PostList"

const getPost= async()=>{
    const res = await fetch("http://localhost:4000/post")
    return res.json()
}
const Blog = async () => {
    const posts = await getPost()
  return (
    <section className="section" id="blog">
        <div className="container mx-auto">
            <SectionHeader pretitle="بلاگ ها" title="آخرین اخبار"/>
        </div>
    </section>
  )
}

export default Blog