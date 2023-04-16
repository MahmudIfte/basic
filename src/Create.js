import { useState } from "react";

const Create = () => {

  const[title,setTitle]= useState('');
  const[body,setBody]=useState('');
  const[author,setAuthor]=useState('Mario');
  
  const handleSubmit = (e) =>{

     e.preventDefault();

     const blog = {title,body,author};

     console.log(blog);
  }

    return (
        <div className="create">

        <h2>ADD A NEW Blog</h2>

        <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text"  required
        vlaue={title}
        onChange={(e) => setTitle(e.target.value)}/>

        <label>Blog Body: </label>
        <textarea required
        value={body}
        onChange={(e) =>setBody(e.target.value)}
        
        ></textarea>

        <label>Select Author</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}>

      <option value="mario">Mario</option>
      <option value="yoshi">yoshi</option>
        </select>

        <button>Add Blog</button>

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        </form>

        </div>






      );
}
 
export default Create;
    





