import * as React from 'react';
import MaterialTable from 'material-table';

import SubmissionsCodeEditor from '../SubmissionsCodeEditor/SubmissionsCodeEditor';
import {SolutionDetails} from 'utils/types/challenges';
import {languageToCodeMirrorMode} from 'utils/CodeEditorLanguages';
import * as Styled from './styled';
import {Box} from '@mui/material';

interface Props {
  solutionsList: SolutionDetails[];
}

function SolutionsList(props: Props): JSX.Element {
  return (
    <Styled.SolutionsContainer>
      <Box>
        <MaterialTable
          options={{
            paging: false,
            search: false,
            overflowY: 'hidden',
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
      </Box>
    </Styled.SolutionsContainer>
  );
}

export default SolutionsList;
