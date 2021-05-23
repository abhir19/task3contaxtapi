import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Listarticle = () => {
  const { article, editArticle, deleteArticle } = useContext(GlobalContext);
  
  return (
    <Fragment>
      
      <div className="noList">
                    ,<h1>Courses</h1>
                    <Link to="/create">
                      <button type="button" className="btn btn-primary">
                      Add
                      </button>
                    </Link>
                  </div>
 <table className="table" style={{marginLeft:'100px',width:'90vw'}} >
<thead>
<tr>
<th scope="col">Title</th>
<th scope="col">Length</th>
<th scope="col">Category</th>
<th scope="col">Author</th>
</tr>
</thead>
        <tbody>
        

                        
        {
        article.map(article => {
                return <tr key={article.id}>
                    <td><a style={{'color':'blue'}}href="https://www.pluralsight.com/courses/item.Title" target="_blank">{article.heading}</a></td>
                    <td>{article.subHeading}</td>
                    <td>{article.category}</td>
                    <td>{article.author}</td>
                   

                    <Link to={`/edit/${article.id}`}>
             
                    <td><button className='btn btn-success'onClick={() =>editArticle(article.id) }>Edit</button></td> </Link>
                    <td><button className='btn btn-danger'onClick={() => deleteArticle(article.id)}>Delete</button></td>
                </tr>
            }
         )
          }
        </tbody>
    </table>
 
                 
              
      
    </Fragment>
 
    
  );
};
        
            
                              
