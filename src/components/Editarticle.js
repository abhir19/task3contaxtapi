import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Editarticle = route => {
  let history = useHistory();
  const { article, editArticle } = useContext(GlobalContext);
  const [selectedArticle, setSelectedArticle] = useState({
    id: null,
    category: "",
    heading: "",

    subHeading: "",
    author: ""
  });
  const currentArticleId = route.match.params.id;

  useEffect(() => {
    const articleId = currentArticleId;
    const selectedArticle = article.find(x => x.id === parseInt(articleId));
    setSelectedArticle(selectedArticle);
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (articleKey, val) =>
    setSelectedArticle({ ...selectedArticle, [articleKey]: val });

  const onSubmit = e => {
    e.preventDefault();
    editArticle(selectedArticle);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="container Articleedit">
        <h3>Edit Articles</h3>
        <br />
        <br />
        
        <form onSubmit={onSubmit} autoComplete="off" style={{width:'90vw',marginLeft:'20px'}}>
                 <label >Title</label>
                <input className="form-control" name="Title" placeholder="Title"   value={selectedArticle.heading}
              onChange={e => handleOnChange("heading", e.target.value)} required/><br />
                   <label >Length</label>  
                  < input className="form-control" name="Length" placeholder="Length" value={selectedArticle.subHeading}
              onChange={e => handleOnChange("subHeading", e.target.value)} required/><br /> 
                
                    
                 <label > Category</label>  
                < input className="form-control" name="Category" placeholder="Category"  value={selectedArticle.category}
              onChange={e => handleOnChange("category", e.target.value)} required/><br />
                 <label >Author</label>  
                < input className="form-control" name="Author" placeholder="Author"  value={selectedArticle.author}
              onChange={e => handleOnChange("author", e.target.value)}required/><br />
               
                <br/>
                <button type="submit" className="btn btn-primary">
            Save 
          </button>
          <Link to="/">
            {" "}
            <button type="button" className="btn">
              Cancel
            </button>
          </Link>
                
            </form>
      </div>
    </Fragment>
  );
};
