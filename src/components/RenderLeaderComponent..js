import React from 'react';
import {Media} from 'reactstrap'

function RenderLeader(props){
    if(props.leader !=null){
    const leader=props.leader;

    return(
        <div id={leader.id}>
        <Media className="media">
        <Media left>
          <Media  object src={leader.image} alt={leader.image} />
        </Media>
        <Media body>
          <Media heading>
            <p>{leader.name}</p>
            
          </Media>
          <h6>{leader.designation}</h6>
          {leader.description}
        </Media>
      </Media>
      </div>
    )
}
}

export default RenderLeader;