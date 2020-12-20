import React from 'react';
import FontAwesome from 'react-fontawesome';

import StyledStatus from '../elements/StyledStatus';
import StyledAvatar from '../elements/StyledAvatar';

const Status = (props:any):JSX.Element => {
  return (
      <StyledStatus color="blue">
          <StyledAvatar>
              <FontAwesome
               name="bell-slash"
               className="icon--color"
               />
          </StyledAvatar>
          <div className="status--textContainer">
            <div className="text--big">
                Etre averti(e) de nouveaux messages.
            </div>
            <span className="text--small">
                Afficher les notifications sur le bureau.
            </span>
          </div>
      </StyledStatus>
  )
};

export default Status;
