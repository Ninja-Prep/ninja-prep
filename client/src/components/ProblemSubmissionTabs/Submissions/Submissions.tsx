import * as React from 'react';
import MaterialTable from 'material-table';

import * as Styled from './styled';
import SubmissionsCodeEditor from '../SubmissionsCodeEditor/SubmissionsCodeEditor';
import {VerdictStatus} from 'utils/enums/userSubmission';
import {SubmissionRecord} from 'utils/types/challenges';
import {languageToMode} from 'utils/CodeEditorLanguages';

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
        }}
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
          },
          {title: 'Language', field: 'language'},
          {title: 'Date', field: 'date'},
        ]}
        data={props.submissionRecords}
        detailPanel={(rowData) => {
          return <SubmissionsCodeEditor textValue={rowData.codeSnippet} mode={languageToMode[rowData.language]} />;
        }}
      />
    </Styled.SubmissionsContainer>
  );
}

export default Submissions;
