import React from 'react';

import DescriptionIcon from '@mui/icons-material/Description';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import {ProblemDetails} from 'utils/types/challenges';
import ProblemDescription from '../ProblemDescription/ProblemDescription';
import VideoSolution from '../VideoSolution/VideoSolution';
import * as Styled from './styled';
import SubmissionsListContainer from '../containers/SubmissionsListContainer';
import SolutionsListContainer from '../containers/SolutionsListContainer';

interface Props {
  problemDetails: ProblemDetails;
}

const TabsComponent = (props: Props): JSX.Element => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Styled.Container>
      <Box>
        <TabContext value={value}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <TabList
              variant="fullWidth"
              onChange={handleChange}
              TabIndicatorProps={{
                style: {background: Styled.IndicatorColor, height: 3},
              }}
            >
              <Styled.TabButton icon={<DescriptionIcon />} label="Description" value="1" />
              <Styled.TabButton icon={<PlayCircleOutlineIcon />} label="Video Solution" value="2" />
              <Styled.TabButton icon={<LightbulbIcon />} label="Solutions" value="3" />
              <Styled.TabButton icon={<SaveIcon />} label="Submissions" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ProblemDescription problemDetails={props.problemDetails} />
          </TabPanel>
          <TabPanel value="2">
            <VideoSolution />
          </TabPanel>
          <TabPanel value="3">
            <SolutionsListContainer />
          </TabPanel>
          <TabPanel value="4">
            <SubmissionsListContainer />
          </TabPanel>
        </TabContext>
      </Box>
    </Styled.Container>
  );
};

export default TabsComponent;
