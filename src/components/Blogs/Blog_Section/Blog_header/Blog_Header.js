import React from 'react';
import "./Blog_header.css"

const Blog_Header = () => {
    return (
        <>
          <h1 className='blog_header_title'>My writing.</h1>
          <span className='title_bottom_line'></span>
          <div className='title_description'>
            <p className='description_p'>Here you will find my writings on JavaScript and life lessons. Overall you can say this is a place where I share my life journey and what I learn about JavaScript. Want to have a conversation about anything I've written? Drop me an <a className ='email_linkedIn_link' href='mailto:mdsrdiganta@gmail.com' target="_blank"> email </a><span> or say hi on my</span><a className='email_linkedIn_link' href='https://www.linkedin.com/in/md-shafiur-rahman-diganta-592a96202/' target="_blank"> LinkedIn.</a></p>
            
          </div>
        </>
    );
};

export default Blog_Header;