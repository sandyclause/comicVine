import React from 'react';
import { Link } from 'react-router-dom';

class Publisher extends React.Component {
  constructor(){
    super();

    this.singleHandler = this.singleHandler.bind(this);
  }

  //grabs the firstChild's "id" of the <Link> tag. this case is the <li>
  singleHandler(e) {
    this.props.grabId(e.currentTarget.id);
    console.log(e.currentTarget)
  }

  render() {
    let pubImg;
    let pubName;
    let pubDeck;
    let pubUrl;
    if (this.props.publisherImg !== null){
      pubImg = <img src={this.props.publisherImg} alt={this.props.publisherName}/>;
    }
    if (this.props.publisherName !== null) {
      pubName = <h3>{this.props.publisherName}</h3>;
    }
    if (this.props.publisherDescription !== null){
      pubDeck = <p>{this.props.publisherDescription}</p>;
    }
    if (this.props.publisherUrl !== null){
      pubUrl = <a href={this.props.publisherUrl}>For more information on this Publisher</a>
    }

    return (
        <Link to={`/info/${this.props.infoId}`} onClick={this.singleHandler} id={this.props.id}>
          {/* adding unique id to each li */}
              <div className = "publisherContainer" >
                <div className = 'imageContainer'>
                  {pubImg}
                </div> 
                {pubName}
              </div>
        </Link>
    )
  }

}

export default Publisher; 