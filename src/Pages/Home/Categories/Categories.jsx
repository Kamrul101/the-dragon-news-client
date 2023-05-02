import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Categories = () => {
    const {id} =useParams();
    const categoriesNews = useLoaderData();
    return (
        <div>
            {/* <h2>{categoriesNews.name}</h2> */}
            {
                categoriesNews.map(news => <NewsCard
                key={news._id}
                news={news}>

                </NewsCard>)
            }
        </div>
    );
};

export default Categories;