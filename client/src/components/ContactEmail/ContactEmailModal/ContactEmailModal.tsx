import React from 'react';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {Box, Fade, InputAdornment} from '@mui/material';
import * as Styled from './styled';
import * as _ from 'lodash';
import {LightBlueButton} from 'uiLibrary/Buttons';
import {SUBMIT} from 'utils/stringIds.json';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import {useForm, Controller} from 'react-hook-form';
import {FormData} from '../containers/ContactEmailModalContainer';

interface Props {
  showModal: boolean;
  toggleModal: () => void;
  onSubmit: (data: FormData) => void;
  submitted: boolean;
  pending: boolean;
}

function ContactEmailModal({showModal, toggleModal, onSubmit, submitted, pending}: Props): JSX.Element {
  const {
    clearErrors,
    handleSubmit,
    formState: {errors},
    control,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      sender: '',
      subject: '',
      emailMessage: '',
    },
  });

  React.useEffect(() => {
    const subscription = watch((value, {name, type}) => clearErrors(name));
    return () => subscription.unsubscribe();
  }, [watch, clearErrors]);

  return (
    <Modal
      open={showModal}
      onClose={() => {
        toggleModal();
        reset();
      }}
    >
      <Fade in={showModal} timeout={showModal ? 500 : 300}>
        <Styled.CenterContent>
          {submitted ? (
            <Fade in={showModal} timeout={showModal ? 500 : 300}>
              <Styled.ModalSubtext> Your email has been sent </Styled.ModalSubtext>
            </Fade>
          ) : (
            <form
              onSubmit={handleSubmit((data: FormData) => {
                reset();
                onSubmit(data);
              })}
            >
              <Styled.HeaderContainer>
                <Styled.Header>Contact Us</Styled.Header>
              </Styled.HeaderContainer>
              <Box p={3}>
                <Controller
                  name="sender"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Email Address is required',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid Email Address',
                    },
                  }}
                  render={({field}) => (
                    <TextField
                      {...field}
                      label="Your Email"
                      variant="standard"
                      margin="normal"
                      sx={{width: '100%'}}
                      error={!!errors.sender}
                      helperText={errors.sender ? errors.sender.message : ''}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Styled.EmailContainer>
                  <Controller
                    name="subject"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Subject is required',
                      },
                    }}
                    render={({field}) => (
                      <TextField
                        {...field}
                        label="Subject"
                        variant="standard"
                        margin="normal"
                        sx={{width: '100%'}}
                        error={!!errors.subject}
                        helperText={errors.subject ? errors.subject.message : ''}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <TextSnippetIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="emailMessage"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: 'Message is required',
                      },
                    }}
                    render={({field}) => (
                      <TextField
                        {...field}
                        label="Message"
                        variant="standard"
                        margin="normal"
                        sx={{width: '100%'}}
                        error={!!errors.emailMessage}
                        multiline
                        rows={6}
                        helperText={errors.emailMessage ? errors.emailMessage.message : ''}
                      />
                    )}
                  />
                </Styled.EmailContainer>
              </Box>
              <Styled.SubmitButton>
                <LightBlueButton type="submit" disabled={!_.isEmpty(errors) || pending}>
                  <SendIcon />
                  {SUBMIT}
                </LightBlueButton>
              </Styled.SubmitButton>
            </form>
          )}
        </Styled.CenterContent>
      </Fade>
    </Modal>
  );
}

export default ContactEmailModal;
