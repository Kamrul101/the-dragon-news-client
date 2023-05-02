import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const Leftnav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h4>All Category</h4>
            <div className='category-link'>
            {
                categories.map(category=><p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary fs-5'>{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default Leftnav;