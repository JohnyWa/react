import React from "react"

const styles = {
  container: {
    width: "300px",
    border: "1px solid orange"
  },
  img: {
    width: "100%"
  }
};

const InlineStyles = ({name}) => {
  return (
    <div style={styles.container}>
      <h2>Title</h2>
      <div>User name {name}</div>
      <div>
        <img style={styles.img} src="https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1" alt={name} />
      </div>
    </div>
  );
};

export default InlineStyles;