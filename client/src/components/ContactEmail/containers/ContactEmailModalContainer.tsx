import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {toggleContactEmailModal} from 'reducers/displayModal/actions';
import {RootState} from 'reducers/rootReducer';
import {postContactEmail} from 'services/emails/emailsService';
import ContactEmailModal from '../ContactEmailModal/ContactEmailModal';

const mapStateToProps = (state: RootState) => {
  return {
    showContactEmailModal: state.displayModal.showContactEmailModal,
  };
};

const connector = connect(mapStateToProps, {toggleContactEmailModal});

type Props = ConnectedProps<typeof connector>;
type State = {
  submitted: boolean;
  pending: boolean;
};
export interface FormData {
  sender: string;
  subject: string;
  emailMessage: string;
}

const initialState: State = {
  submitted: false,
  pending: false,
};

class ContactEmailModalContainer extends Component<Props, State> {
  state = {
    submitted: false,
    pending: false,
  };
  async onSubmit(data: FormData) {
    this.setState({pending: true});

    const response = await postContactEmail(data.sender, data.subject, data.emailMessage);
    console.log(response);
    if (response.status === 200) {
      this.setState({submitted: true, pending: false});
    }
  }
  render(): JSX.Element {
    return (
      <ContactEmailModal
        pending={this.state.pending}
        submitted={this.state.submitted}
        onSubmit={(data) => this.onSubmit(data)}
        showModal={this.props.showContactEmailModal}
        toggleModal={() => {
          this.props.toggleContactEmailModal();
          this.setState({...initialState});
        }}
      />
    );
  }
}

export default connector(ContactEmailModalContainer);
