import React from 'react';
import { Row, Col } from 'antd';
import TeamTile from '../../TeamTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

const pageText = {
  paraOne: `こんにちは。私たちはアプリ開発サークル Ark（アーク）です。`,
  paraTwo: `こんにちは。私たちはアプリ開発サークル Ark（アーク）です。`,
  paraThree: `私たちはアプリを開発しています。<strong>AWS</strong> や <strong>GCP</strong> などのクラウドサーバ、
  <strong>Docker</strong> を使ったコンテナ技術、<strong>JUnit</strong> や <strong>Jest</strong>、ブラウザ操作をテストする <strong>Selenium</strong> や <strong>Puppeteer</strong> などの自動テスト、<strong>CD/CI</strong> などについても取り組んでいます。`
};

const Team = () => {
  return (
    <div>
      <div className="ourTeam">
        <h2 className="titleSeparate">チーム紹介</h2>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={16} sm={16} md={8} lg={6}>
          <TeamTile
            img="./hashimoto-natsuki.jpg"
            width={160}
            alt="location image"
            textH3="橋本 夏樹"
            textH4="Founder"
          />
        </Col>
        <Col xs={16} sm={16} md={8} lg={6}>
          <TeamTile
            img="./oota-masayasu.png"
            width={160}
            alt="太田真康"
            textH3="太田 真康"
            textH4="Engineer"
          />
        </Col>
        <Col xs={16} sm={16} md={8} lg={6}>
          <TeamTile
            img="./goto-kei.png"
            width={160}
            alt="五斗圭"
            textH3="五斗 圭"
            textH4="Engineer"
          />
        </Col>
        <Col xs={16} sm={16} md={8} lg={6}>
          <TeamTile
            img="./tsuchida-ryutaro.png"
            width={160}
            alt="土田隆太郎"
            textH3="土田 隆太郎"
            textH4="Engineer"
          />
        </Col>
        {/*
        <Col xs={16} sm={16} md={8} lg={6}>
          <TeamTile
            img="mizuta-katsuya.png"
            width={160}
            alt="location image"
            textH3="水田 勝也"
            textH4="Advisor"
          />
        </Col>
        <Col xs={16} sm={16} md={8} lg={6}>
          <TeamTile
            img="akagi-yuki.png"
            width={160}
            alt="location image"
            textH3="赤木 優輝"
            textH4="WebDesigner"
          />
        </Col>
        */}
      </Row>
    </div>
  );
};
export default Team;
