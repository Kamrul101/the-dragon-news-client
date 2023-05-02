/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Categories from '../../Home/Categories/Categories';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const {_id,title,details,image_url,author, total_view,category_id} = news;

    return (
        <div>
              <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
            <Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in this category</Button></Link>
      </Card.Body>
    </Card>
    <div>
    <EditorsInsights></EditorsInsights>
    </div>
        </div>
    );
};

export default News;