import React from 'react';

import StyledRight from '../elements/StyledRight';
import RightImg from './RightImg';

const messageText:string = "WhatApp se connecte à vôtre téléphone pour synchroniser le message. Pour réduire des données, connectez vôtre téléphone à un nouveau WIFI"

const Right = (props:any):JSX.Element => {
  return (
      <StyledRight>
        <RightImg right={props.right} messageText={messageText}/>
      </StyledRight>
  )
};

export default Right;
