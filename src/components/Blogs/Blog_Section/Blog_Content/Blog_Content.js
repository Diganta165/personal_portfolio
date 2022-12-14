import React from 'react';
import "./Blog_Content.css";
import blogContent from "../../../../utils/fakeData/blogContent.json"
import Blog_Card from '../Blog_Cart/Blog_Card';
import Blog_Header from '../Blog_header/Blog_Header';

const Blog_Content = () => {
    return (
        <div>
            <section className="blog_header_section">
                <Blog_Header></Blog_Header>
            </section>
            <section className='blog_section'>
            {
                blogContent.map(element => <Blog_Card elementData = {element} key = {element.id}></Blog_Card>)
            }
                
            </section>
        </div>
    );
};

export default Blog_Content;