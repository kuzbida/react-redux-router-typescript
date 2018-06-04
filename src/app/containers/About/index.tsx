import * as React from 'react';
import { RouteComponentProps } from "react-router";
import { Button } from 'antd';

export namespace About {
  export interface Props extends RouteComponentProps<void> { }
}


export class About extends React.Component {

  constructor(props: any, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <Button type="primary">Test</Button>
      </div>
    );
  }
}
