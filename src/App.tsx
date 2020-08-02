import React from "react";
import { Button } from 'antd';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<HelloProps, {}> {
  render() {
    return <>
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      <Button type="primary">按钮</Button>
    </>;
  }
}