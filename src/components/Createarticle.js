import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

export const Createarticle = () => {
    const [title, setTitle] = useState('');
    const [length, setLength] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const {createArticle, article} = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit= e =>{
        e.preventDefault();
        const articleNew ={
            id: article.length+1,
            title,
            length,
            category,
            author
        }
        createArticle(articleNew);
        history.push("/");
    }
    return (
        <Fragment>
            <div className="container Articleedit">
                <h3>Create Article</h3>
                <br />
                <br />
             
             
              <form onSubmit={onSubmit} autoComplete="off" style={{width:'90vw',marginLeft:'20px'}}>
                 <label >Title</label>
                <input className="form-control" name="Title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/><br />
                   <label >Length</label>  
                  < input className="form-control" name="Lengh" placeholder="Length" value={length} onChange={(e) => setLength(e.target.value)} required/><br /> 
                
                 <label > Category</label>  
                < input className="form-control" name="Category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required/><br />
                 <label >Author</label>  
                < input className="form-control" name="Author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}required/><br />
               
                <br/>
                <button className="btn btn-primary"type="submit">Submit</button>
               
                <Link to='/'><button type="button" className="btn">Cancel</button></Link>
                
            </form>
            </div>
        </Fragment>
    )
}