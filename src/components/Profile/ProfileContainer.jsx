import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.profileId}`)
    .then(response => {
        this.props.setUserProfile(response.data);
    });


    console.log('props ');
  }

  render() {
    return(
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainer = (props) => <ProfileContainer {...props} params={useParams()}/>

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer);