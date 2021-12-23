import {Box, Tabs} from '@mui/material';
import React from 'react';
import {SubmissionStatus, VerdictStatus} from 'utils/enums/userSubmission';
import {JudgedTestCase} from 'utils/types/challenges';
import * as Styled from './styled';
import ContentDetailBlock from '../ContentDetailBlock/ContentDetailBlock';
import FormatHeader from '../FormatTestCaseHeader/FormatTestCaseHeader';
import * as CoreUI from 'uiLibrary/CoreUI';
import {INPUT_TEXT} from 'utils/stringIds.json';

interface Props {
  testCases: string[];
  status: SubmissionStatus;
  judgedTestCases: JudgedTestCase[];
}

interface TabPanelProps {
  children?: React.ReactNode | React.ReactNode[];
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index} = props;

  return (
    <div hidden={value !== index}>
      <Box p={3}>{value === index && children}</Box>
    </div>
  );
}

function TestCaseTabs(props: Props): JSX.Element {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Tabs
        onChange={handleChange}
        value={value}
        variant="scrollable"
        sx={{background: CoreUI.BABY_BLUE_BACKGROUND, borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
        TabIndicatorProps={{
          style: {background: Styled.IndicatorColor},
        }}
      >
        {props.status === SubmissionStatus.SUBMITTED
          ? props.judgedTestCases.map((testCase, index) => {
              const labelString = `Testcase ${index + 1}`;
              if (testCase.status === VerdictStatus.ACCEPTED) return <Styled.TabLabel key={index} icon={<Styled.AcceptedIcon />} label={labelString} />;
              else {
                return <Styled.TabLabel key={index} icon={<Styled.WrongAnswerIcon />} label={labelString} />;
              }
            })
          : props.testCases.map((testCase, index) => {
              const labelString = `Testcase ${index + 1}`;
              return <Styled.TabLabel key={index} label={labelString} />;
            })}
      </Tabs>
      {props.status === SubmissionStatus.SUBMITTED
        ? props.testCases.map((testCase, index) => {
            const judgedTestCase = props.judgedTestCases[index];
            return (
              <TabPanel value={value} index={index} key={index}>
                <FormatHeader verdictStatus={judgedTestCase.status} />
                <ContentDetailBlock blockHeader={INPUT_TEXT} blockContent={testCase} />
                {judgedTestCase.userStdout && <ContentDetailBlock blockHeader="Stdout" blockContent={judgedTestCase.userStdout} />}
                <ContentDetailBlock blockHeader="Your Output" blockContent={judgedTestCase.userOutput || judgedTestCase.stderr || 'No Output'} />
                {judgedTestCase.expectedOutput && <ContentDetailBlock blockHeader="Expected Output" blockContent={judgedTestCase.expectedOutput} />}
              </TabPanel>
            );
          })
        : props.testCases.map((testCase, index) => {
            return (
              <TabPanel value={value} index={index} key={testCase}>
                <ContentDetailBlock blockHeader={INPUT_TEXT} blockContent={testCase} />
              </TabPanel>
            );
          })}
    </Box>
  );
}

export default TestCaseTabs;
