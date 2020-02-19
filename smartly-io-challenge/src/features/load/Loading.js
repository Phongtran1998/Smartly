import React from "react";
import { Container, Segment, Dimmer, Loader } from "semantic-ui-react";

const Loading = ({ loadingText }) => {
  return (
    <Container>
      <Segment padded="very">
        <Dimmer active inverted>
          <Loader active size="large">
            {loadingText}
          </Loader>
        </Dimmer>
      </Segment>
    </Container>
  );
};

export default Loading;
