import React, {Component} from 'react';
import Request from '../helpers/request';
import '../compliment_container.css';

class ComplimentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      compliment: "Thanks for checking this out, you are awesome",
      friendsTwitter: "",
      followers: []
    }

    this.handleBigAppButtonClick = this.handleBigAppButtonClick.bind(this);
    this.handleFriend = this.handleFriend.bind(this);
    this.handleTweetYourFriend = this.handleTweetYourFriend.bind(this);
  }

  // componentDidMount(){
  //   const request = new Request();
  //   request.get('https://bigappyourselfspring.herokuapp.com/compliment/all')
  //   .then((data) => {
  //     this.setState({followers: data})
  //   })
  // }

  componentWillMount(){
    // const request = new Request();
    // request.get('/compliment')
    // .then((data) => {
    //   this.setState({compliment: data})
    //   })
  }
//function to request a fresh compliment from Java/Spring back-end and reset the
//state to the new compliment
  handleBigAppButtonClick(){
    // console.log("BigAppYourself has been clicked");
    const request = new Request();
    request.get('https://bigappyourselfspring.herokuapp.com/compliment')
    .then((data) => {
      this.setState({compliment: data["content"]})
      })
  }

  handleFriend(event){
    this.setState({friendsTwitter: event.target.value})
  }

//function takes the Twitter handle entered and sends it to the back-end, which takes the
//handle and tweets a fresh compliment
  handleTweetYourFriend(event){
    const request = new Request();
    if(this.state.friendsTwitter !== ""){
    request.get('https://bigappyourselfspring.herokuapp.com/compliment/tweet/'+ this.state.friendsTwitter)
    .then((data) => {
      window.location = '/'
    })
    }
  }

  render(){
    return (
        <div className="compliment_container">
          <div className="little_header_container">
          <img src="../../favicon.ico" alt="Big App Yourself logo"/>
          <h1>Welcome to Big App Yourself</h1>
          </div>



          <div className="compliment">
            <h2>{this.state.compliment}</h2>

            <div className="praise_button">
              <button className="praise_me" onClick={this.handleBigAppButtonClick}><p><strong>Click for more praise</strong></p></button>
            </div>

          </div>



          <form className="tweet-mate">
            <label htmlFor="twitter_handle"><h3 className="tweet-spiel">Enjoy our compliments? Why not Big App a friend and share the love? Just enter your pal's Twitter handle below, click the blue button, and we'll compliment them for you.</h3></label>
            <input className="twitter_handle" type="text" name="twitter_handle" placeholder="Enter a pal's Twitter handle here" onChange={this.handleFriend} value={this.state.friendsTwitter}/>
            <button className="send_tweet" onClick={this.handleTweetYourFriend}><p>Tweet my mate!</p></button>
          </form>

          <div className="copyright">
            <p>© BigAppYourself 2019</p>
          </div>


        </div>
      )
  }

}

export default ComplimentContainer;
