import * as React from 'react';
import MaterialTable from '@material-table/core';

import * as Styled from './styled';
import SubmissionsCodeEditor from '../SubmissionsCodeEditor/SubmissionsCodeEditor';
import {VerdictStatus} from 'utils/enums/userSubmission';
import {SubmissionRecord} from 'utils/types/challenges';
import {languageToCodeMirrorMode} from 'utils/CodeEditorLanguages';

interface Props {
  submissionRecords: SubmissionRecord[];
}

function Submissions(props: Props) {
  return (
    <Styled.SubmissionsContainer>
      <MaterialTable
        options={{
          paging: false,
          search: false,
          overflowY: 'hidden',
        }}
        localization={{body: {emptyDataSourceMessage: <span>Please sign in to view your submissions</span>}}}
        title="Submissions"
        columns={[
          {
            title: 'Verdict',
            field: 'verdict',
            render: (rowData) => {
              if (rowData.status === VerdictStatus.ACCEPTED) {
                return <Styled.Accepted>{rowData.status}</Styled.Accepted>;
              }
              return <Styled.WrongAnswer>{rowData.status}</Styled.WrongAnswer>;
            },
            customSort: (data1, data2) => {
              return data1.status.localeCompare(data2.status);
            },
          },
          {
            title: 'Language',
            field: 'language',
            render: (rowData) => {
              return <Styled.Capitalize>{rowData.language}</Styled.Capitalize>;
            },
            customSort: (data1, data2) => {
              return data1.language.localeCompare(data2.language);
            },
          },
          {title: 'Date', field: 'date'},
        ]}
        data={props.submissionRecords}
        detailPanel={(row) => {
          return <SubmissionsCodeEditor textValue={row.rowData.codeSnippet} mode={languageToCodeMirrorMode[row.rowData.language]} />;
        }}
      />
    </Styled.SubmissionsContainer>
  );
}

export default Submissions;
