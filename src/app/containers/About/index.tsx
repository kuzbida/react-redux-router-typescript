import * as React from 'react';
import {RouteComponentProps} from "react-router";

export namespace About {
  export interface Props extends RouteComponentProps<void> {}
}


export class About extends React.Component {

  constructor(props: any, context?: any) {
    super(props, context);
    console.log('test');
  }


  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}
