import * as React from "react";

import {
  Box,
  Row,
  Button,
  Icon,
  Text
} from "indigo-react";

// const sequence = num => Array.from(Array(num), (_, i) => i);


export default class CatalogPage extends React.Component {
  render() {
    // let { componentId } = useParams();
    console.log(this.props)
    return (
      <Row flexWrap='wrap'>
        <Text>Component Page</Text>
      </Row>
    )
  }
}
