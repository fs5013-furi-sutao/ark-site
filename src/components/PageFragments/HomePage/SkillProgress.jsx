import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div className="skillProgress">
    <h2 className="titleSeparate">Study for...</h2>
    <p>グラフはチームのスキルレベルを表しています。100% は、業務でどんな要望があっても迷いなく実現できるレベルをイメージしています。</p>

    <Row gutter={[20, 20]}>

      <Col xs={24} sm={24} md={12}>
        <p className="studySection">バックエンド</p>
        <ProgressBar
          percent={80}
          text="Java"
        />
        <ProgressBar
          percent={30}
          text="Kotlin"
        />
        <ProgressBar
          percent={80}
          text="C#"
        />
        <ProgressBar
          percent={30}
          text="PHP"
        />
        <ProgressBar
          percent={40}
          text="Python"
        />
        <ProgressBar
          percent={30}
          text="Rust"
        />
        <ProgressBar
          percent={30}
          text="Go lang"
        />
        <ProgressBar
          percent={30}
          text="Node.js"
        />
        <p className="studySection">フロントエンド</p>
        <ProgressBar
          percent={40}
          text="JavaScript"
        />
        <ProgressBar
          percent={40}
          text="React"
        />
        <ProgressBar
          percent={20}
          text="Vue.js"
        />
        <ProgressBar
          percent={20}
          text="html 5"
        />
        <ProgressBar
          percent={20}
          text="CSS 3"
        />
        <ProgressBar
          percent={20}
          text="less"
        />
        <ProgressBar
          percent={20}
          text="Sass"
        />

      </Col>
      <Col xs={24} sm={24} md={12}>
        <p className="studySection">Web フレームワーク</p>
        <ProgressBar
          percent={60}
          text="Laravel"
        />
        <ProgressBar
          percent={70}
          text="Spring boot"
        />
        <ProgressBar
          percent={60}
          text=".NET Core"
        />
        <ProgressBar
          percent={70}
          text="Django"
        />
        <ProgressBar
          percent={70}
          text="Flask"
        />
        <p className="studySection">Web API</p>
        <ProgressBar
          percent={70}
          text="REST API"
        />
        <ProgressBar
          percent={50}
          text="GraphQL"
        />
        <p className="studySection">データベース</p>
        <ProgressBar
          percent={60}
          text="Mysql"
        />
        <ProgressBar
          percent={70}
          text="PostgreSQL"
        />
        <ProgressBar
          percent={40}
          text="SQL Server"
        />
        <ProgressBar
          percent={70}
          text="MongoDB"
        />
        <p className="studySection">コンテナ</p>
        <ProgressBar
          percent={70}
          text="Docker"
        />
        <p className="studySection">バージョン管理</p>
        <ProgressBar
          percent={60}
          text="Git / GitHub"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
