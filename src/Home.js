import{useState} from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';
const Home = () => {
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    // let name = 'mario';   
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
   
    //const handleClick = (e) =>
    const handleClick = () => {
        setName('luigi');
        setAge(35);


    }
    const handleClickAgain = (name, e) => {

        console.log('Hello' + name, e.target);

    }
    // const handleDelete = (id) =>{
    // const newBlogs = blogs.filter(blog => blog.id !== id);
    // setBlogs(newBlogs)
    // }
    
    return (
        <div className="home">

            {error && <div>{error}</div>} 

            {isPending && <div>Loading...
            </div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}


            <h2>Homepage</h2>
            <p>{name}</p>
            <p>{age}</p>
            {/* {blogs && <Bloglist blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}/>} */}

            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author ==='mario')} title="Mario's Blogs!" />}
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain(' mario', e)}>Click Me Again</button>
        </div>




    );
}

export default Home;



