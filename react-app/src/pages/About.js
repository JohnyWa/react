import React, {Component} from "react";
import withFetch from "../Hoc/withFetch";

class About extends Component{
  render() {
    const { data } = this.props;

    return(
      <>
        <h1>About page!</h1>
        <div>
          {data.map(img => (
            <img key={img.id} src={img.thumbnailUrl} alt={img.title}/>
          ))}
        </div>
      </>
    )
  }
}

export default withFetch('https://jsonplaceholder.typicode.com/photos?_limit=5')(About)