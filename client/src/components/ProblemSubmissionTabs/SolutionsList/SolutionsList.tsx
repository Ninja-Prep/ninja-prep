import * as React from 'react';
import MaterialTable from 'material-table';

import SubmissionsCodeEditor from '../SubmissionsCodeEditor/SubmissionsCodeEditor';
import {SolutionDetails} from 'utils/types/challenges';
import {languageToCodeMirrorMode} from 'utils/CodeEditorLanguages';
import * as Styled from './styled';

interface Props {
  solutionsList: SolutionDetails[];
}

function SolutionsList(props: Props): JSX.Element {
  return (
    <Styled.SubmissionsContainer>
      <MaterialTable
        options={{
          paging: false,
          search: false,
        }}
        title="Solutions"
        columns={[
          {
            title: 'Language',
            field: 'language',
            render: (rowData) => {
              return <Styled.Capitalize>{rowData.language}</Styled.Capitalize>;
            },
          },
        ]}
        data={props.solutionsList}
        detailPanel={(rowData) => {
          return <SubmissionsCodeEditor textValue={rowData.solutionSnippet} mode={languageToCodeMirrorMode[rowData.language]} />;
        }}
      />
    </Styled.SubmissionsContainer>
  );
}

export default SolutionsList;
