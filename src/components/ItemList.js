// ItemList.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from './GlobalStyles';
import popcorn from '../assets/popcorn.jpg';

const ItemContainer = styled.div`
  background-color: ${palette.gray2};
  border-radius: 10px;
  transition: transform 0.2s;
  overflow: hidden;
  a {
    text-decoration: none;
  }
  &:hover {
    transform: translateY(-10px);
  }
`;

const ImageBox = styled.div`
  width: 100%;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-bottom: 56.25%;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TitleBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 18px;
  color: ${palette.white};
`;

const ItemList = (props) => {
  return (
    <>
      <ItemContainer>
        <Link to={`/movie/${props.data.id}`}>
          <ImageBox>
            {props.data.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${props.data.backdrop_path}`}
                alt="이미지"
              />
            ) : (
              <img src={popcorn} alt="팝콘" />
            )}
          </ImageBox>
          <TitleBox>
            <Title>{props.data.title}</Title>
          </TitleBox>
        </Link>
      </ItemContainer>
    </>
  );
};

export default ItemList;
