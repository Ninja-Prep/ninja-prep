import * as React from 'react';
import * as Styled from './styled';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {GetFullAccessButton} from 'uiLibrary/Buttons';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewListIcon from '@mui/icons-material/ViewList';
import SendIcon from '@mui/icons-material/Send';
import LoginIcon from '@mui/icons-material/Login';
import {User} from 'utils/types/user';
import {LoginModalContainer} from 'components/Login';
import {DarkNinjaPrepLogo} from 'utils/NinjaPrepLogos';
import {Link} from 'react-router-dom';
import ContactEmailModalContainer from 'components/ContactEmail/containers/ContactEmailModalContainer';

interface Props {
  readonly authUser: User;
  readonly toggleLoginModal: () => void;
  readonly toggleContactEmailModal: () => void;
  readonly isPremium?: boolean;
}

export default function NavigationBarMobile(props: Props) {
  const [state, setState] = React.useState({
    isOpen: false,
  });

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({isOpen: !state.isOpen});
  };

  const list = () => (
    <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button>
          <Styled.NavLink as={Link} to="/">
            <DarkNinjaPrepLogo height={40} width={100} />
          </Styled.NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <Styled.NavLink as={Link} to="/challenges">
            <ListItemText primary="Problems" />
          </Styled.NavLink>
        </ListItem>
        {props.authUser ? (
          <React.Fragment>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="Contact Us"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.preventDefault();
                  props.toggleContactEmailModal();
                }}
              ></ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Styled.NavLink as={Link} to="/settings">
                <ListItemText primary="Settings"></ListItemText>
              </Styled.NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>

              <Styled.NavLink href="/api/auth/logout">
                <ListItemText primary="Log Out"></ListItemText>
              </Styled.NavLink>
            </ListItem>
          </React.Fragment>
        ) : (
          <ListItem button>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sign Up"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                props.toggleLoginModal();
              }}
            ></ListItemText>
          </ListItem>
        )}
      </List>
      {!props.isPremium && (
        <React.Fragment>
          <Divider />
          <Styled.DrawerButton>
            <div>
              <GetFullAccessButton sizing="medium" />
            </div>
          </Styled.DrawerButton>
        </React.Fragment>
      )}
    </Box>
  );

  return (
    <Styled.AppBarContainer position="fixed" color="inherit">
      <Styled.Container>
        <Button onClick={toggleDrawer(true)}>
          <Styled.DrawerIcon />
        </Button>
        <Drawer anchor={'right'} open={state.isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <LoginModalContainer />
        <ContactEmailModalContainer />
      </Styled.Container>
    </Styled.AppBarContainer>
  );
}
