import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import UserSettings from 'components/ProblemSubmission/UserSettings/UserSettings';
import {Redirect} from 'react-router-dom';
import {formattedPremiumExpirationDate} from 'reducers/auth/reducer';

const mapStateToProps = (state: RootState) => {
  return {
    authUser: state.authReducer.authUser,
    premiumExpirationDate: formattedPremiumExpirationDate(state),
  };
};

const connector = connect(mapStateToProps);
type UserSettingsProps = ConnectedProps<typeof connector>;

class UserSettingsContainer extends Component<UserSettingsProps> {
  render(): JSX.Element {
    if (this.props.authUser) {
      return <UserSettings email={this.props.authUser?.email} oauthProvider={this.props.authUser.oauthProvider} premiumExpirationDate={this.props.premiumExpirationDate} />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default connector(UserSettingsContainer);
