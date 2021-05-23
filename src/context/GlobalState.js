import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'

const initialState = {
    article: [
        {
            id: 1,
            heading:"Building Applications in React and Flux",
            subHeading: "5:08",
            category:"JavaScript",
            author:"cory-house"

        },
        {
            id: 2,
            heading: "Clean Code: Writing Code for Humans",
            subHeading: "3:10",
            category: "Software Practices",
            author: "cory-house",
        },
        {
            id: 3,
            heading: "Architecting Applications for the Real World",
            subHeading: "2:52",
            category: "	Software Architecture",
            author: "cory-house",
        },
        {
            id: 4,
            heading: "Becoming an Outlier: Reprogramming the Developer Mind",
            subHeading: " 2:30",
            category: "	Career",
            author: "cory-house",
        },
        {
            id: 5,
            heading: "Web Component Fundamentals",
            subHeading: "5:10",
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