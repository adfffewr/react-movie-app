// DetailPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { detailGet } from '../api';

const Container = styled.div`
  width: 100%;
`;

const BackImage = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.3;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 100;
  position: relative;
`;

const ImageBox = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const TextBox = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 55%;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const Overview = styled.div`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

function DetailPage(props) {
  const [data, setData] = useState('');
  const [loding, setLoding] = useState(false);

  const getDetail = async () => {
    const res = await detailGet(props.match.params.id);
    console.log(res);
    setData(res.data);
    setLoding(true);
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <Container>
        {loding && (
          <>
            <BackImage bgImage={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
            <Content>
              <ImageBox>
                <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="커버 이미지" />
              </ImageBox>
              <TextBox>
                <Title>{data.title}</Title>
                <Overview>{data.overview}</Overview>
              </TextBox>
            </Content>
          </>
        )}
      </Container>
    </>
  );
}

export default withRouter(DetailPage);
