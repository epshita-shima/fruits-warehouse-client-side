import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='p-4'>
            <div className="question-ans">
                <h2 className='fw-bold'>1. Difference between javascript and nodejs? </h2>
                <p>Javascript is a programming language that is used for writing scripts on the website. It can only be run in the browsers. It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. Otherhand NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags.</p>
            </div>
            <div className='question-ans'>
                <h2 className='fw-bold'>2. When should you use nodejs and when should you use mongodb</h2>
                <p>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
            </div>
            <div className='question-ans'>
                <h2 className='fw-bold'>3. Differences between sql and nosql databases.</h2>
                <p>
                    SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
        </div>
    );
};

export default Blogs;