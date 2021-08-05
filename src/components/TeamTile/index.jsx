import React from 'react';
import style from './team.module.less';

const TeamTile = (props) => {
  const {
    img, textH4, textH3, alt, height, width,
  } = props;
  return (
    <div className={style.teamTile}>
      <div className={style.teamBlock}>
        <img
          src={`../${img}`}
          height={height || 160}
          width={width || 160}
          alt={alt || ''}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h3>{textH3 || ''}</h3>
        <h4>{textH4 || ''}</h4>
      </div>
    </div>
  );
};

export default TeamTile;
