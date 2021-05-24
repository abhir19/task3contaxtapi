import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'

const initialState = {
    article: [
        {
            id: 1,
            title:"Building Applications in React and Flux",
            length: "5:08",
            category:"JavaScript",
            author:"cory-house"

        },
        {
            id: 2,
            title: "Clean Code: Writing Code for Humans",
            length: "3:10",
            category: "Software Practices",
            author: "cory-house",
        },
        {
            id: 3,
            title: "Architecting Applications for the Real World",
            length: "2:52",
            category: "	Software Architecture",
            author: "cory-house",
        },
        {
            id: 4,
            title: "Becoming an Outlier: Reprogramming the Developer Mind",
            length: " 2:30",
            category: "	Career",
            author: "cory-house",
        },
        {
            id: 5,
            title: "Web Component Fundamentals",
            length: "5:10",
            category: "HTML5",
            author: "cory-house",
        }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(Reducer,initialState);

    function createArticle(article){
        dispatch({
            type: 'CREATE_ARTICLE',
            payload: article
        })
    }

    function deleteArticle(id) {
        dispatch({
            type: 'DELETE_ARTICLE',
            payload: id
        });
    };
 

    function editArticle(article){
        dispatch({
            type: 'EDIT_ARTICLE',
            payload: article
        })
    }

    return (<GlobalContext.Provider value={{
        article: state.article,
        createArticle,
        editArticle,
        deleteArticle
    }}>
        {children}
    </GlobalContext.Provider>);
}