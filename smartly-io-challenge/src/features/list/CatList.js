import React from "react";
import { Segment, Item, Container } from "semantic-ui-react";

const CatList = ({ cats, error }) => {
  if (error) {
    return (
      <Container textAlign="center">
        <h1 style={{ color: "red" }}>{error}</h1>
      </Container>
    );
  }
  if (cats.length === 0) {
    return (
      <Container textAlign="center">
        <h1 style={{ color: "#588cfc" }}>Press the button "Fetch Cats"</h1>
        <img src="/app-logo.png" alt="cat" />
      </Container>
    );
  }

  return (
    <div>
      <Segment clearing>
        <Item.Group divided>
          {" "}
          {cats.map((cat, i) => {
            return (
              <Item className="cat-list" key={i}>
                <Item.Content>
                  <Item.Header>Fact #{i + 1}</Item.Header>
                  <Item.Description>{cat.text}</Item.Description>
                  <Item.Extra>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://cat-fact.herokuapp.com/facts/${cat._id}`}
                    >{`https://cat-fact.herokuapp.com/facts/${cat._id}`}</a>
                  </Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </Segment>
    </div>
  );
};

export default CatList;
