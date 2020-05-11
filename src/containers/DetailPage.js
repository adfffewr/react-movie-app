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

function DetailPage(props) {
  const [data, setData] = useState('');
  const [loding, setLoding] = useState(false);

  const getDetail = async () => {
    const res = await detailGet(props.match.params.id);
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
          </>
        )}
      </Container>
    </>
  );
}

export default withRouter(DetailPage);
