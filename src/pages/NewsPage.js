import React from 'react';
import Categories from '../conponents/Categories';
import NewsList from '../conponents/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
