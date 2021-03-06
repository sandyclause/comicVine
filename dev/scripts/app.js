import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  browserHistory,
} from 'react-router-dom';
// import pages
import InfoPage from './components/InfoPage/InfoPage';
import AccountPage from './components/AccountPage/AccountPage';
import HomePage from './components/HomePage/HomePage';
// import other components
import Auth from './components/Auth';
//firebase imports
import firebase from 'firebase';
import { firebaseConfig } from './firebase/firebase-config';
import Footer from './components/HomePage/Footer';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
    }
    this.getLibraryKeyFromIssue = this.getLibraryKeyFromIssue.bind(this);
  }

  getLibraryKeyFromIssue(libraryId){
    this.setState({
      libraryKey: libraryId
    }, () => {
      console.log(this.state.libraryKey)
    })
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div className="content">
          <Auth />
          <Route path="/" render={(props) => <HomePage
            userKey = {this.state.userId} 
            setVolume={this.getVolumesIssuesArrayfromForm}
            issueClicked={this.state.issueSelected}
            libraryId={this.getLibraryKeyFromIssue}
            router={props}/>}>
          </Route>
          <Route exact path="/account" render={() => <AccountPage 
            userKey={this.state.userId} 
            libraryId={this.state.libraryKey}
          />} />
          <Footer /> 
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));