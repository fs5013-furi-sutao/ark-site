import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `こんにちは。私たちはアプリ開発サークル Ark（アーク）です。`,
  paraTwo: `アプリを作りたいな、アプリを作る様子を見たいな、またみんなが作るのを手伝いたいなを含めて、ただしゃべりたいという人も気軽に参加できる時間と空間、場所を作ることが、アプリ開発サークル Ark の目的です`,
  paraThree: `アプリ開発では、<strong>AWS</strong> や <strong>GCP</strong> などのクラウドサーバ、
  <strong>Docker</strong> を使ったコンテナ技術、<strong>JUnit</strong> や <strong>Jest</strong>、ブラウザ操作をテストする <strong>Selenium</strong> や <strong>Puppeteer</strong> などの自動テスト、<strong>CD/CI</strong> などについても取り組んでいます。`
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)} ${stripTags(pageText.paraThree)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Us</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
      </div>
      <img src="./team-meeting.png" />
      {/*
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="名古屋で活動しています"
            textH3="Nagoya, Japan"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="コーヒーが大好きです"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="みんな人見知りです"
            textH3="慣れれば問題ない"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="仲間と勉強しています"
            textH3="仲間と Web のリソースに感謝！"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
      */}
    </>
  );
};
export default AboutMe;
