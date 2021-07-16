import React, {Component} from 'react';

import CodeEditor from 'components/ProblemSubmission/CodeEditor/CodeEditor';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {updateEditorText} from 'redux/textEditor/actions';

const mapStateToProps = (state: RootState) => {
  return {
    textValue: state.textEditor.value,
    theme: state.editorSettings.theme,
    mode: state.editorSettings.mode,
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoCloseBrackets: true,
  };
};

const connector = connect(mapStateToProps, {updateEditorText});

type Props = {
  problemTitle: string;
  starterCode: string;
} & ConnectedProps<typeof connector>;

interface State {
  value: string;
  output: string;
}

class CodeEditorContainer extends Component<Props, State> {
  cookieUsercodeKey: string;

  constructor(props: Props) {
    super(props);
    this.cookieUsercodeKey = [props.problemTitle, props.mode].join('_');
    this.setInitialCode();
  }

  setInitialCode(): void {
    const storageUserCode = localStorage.getItem(this.cookieUsercodeKey);

    const initialCode = storageUserCode || this.props.starterCode || '';
    this.props.updateEditorText(initialCode);
  }

  textHandler(value: string): void {
    localStorage.setItem(this.cookieUsercodeKey, value);
    this.props.updateEditorText(value);
  }

  render(): JSX.Element {
    return (
      <CodeEditor
        textValue={this.props.textValue}
        textHandler={(value: string) => this.textHandler(value)}
        editorConfig={this.props}
      />
    );
  }
}

export default connector(CodeEditorContainer);