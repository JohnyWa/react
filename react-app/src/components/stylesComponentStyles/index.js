import React from "react";
import Container from "./styles.component";
import Button from '@material-ui/core/Button';


const StylesComponentStyles = ({name, status}) => {
  return (
    <Container>
      <h2>Title</h2>
      <Container.Title status={status}>User name: {name}</Container.Title>
      <div>
        <Container.Img src="https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1" alt={name} />
      </div>
      <Container.Edit>Edit</Container.Edit>
      <Container.Send>Send</Container.Send>
      <Button variant="contained">Default</Button>
    </Container>
  );
};

export default StylesComponentStyles;