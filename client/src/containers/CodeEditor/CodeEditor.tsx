import React, {Component} from 'react';

import CodeEditor from 'components/ProblemSubmission/CodeEditor/CodeEditor';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'redux/rootReducer';
import {updateEditorText} from 'redux/textEditor/actions';
import {getCookieUserCodeKey} from 'redux/textEditor/reducer';

const mapStateToProps = (state: RootState) => {
  return {
    cookieUserCodeKey: getCookieUserCodeKey(state),
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
  constructor(props: Props) {
    super(props);
    this.setInitialCode();
  }

  setInitialCode(): void {
    const storageUserCode = localStorage.getItem(this.props.cookieUserCodeKey);

    const initialCode = storageUserCode || this.props.starterCode || '';
    this.props.updateEditorText(initialCode);
  }

  textHandler(value: string): void {
    localStorage.setItem(this.props.cookieUserCodeKey, value);
    this.props.updateEditorText(value);
  }

  render(): JSX.Element {
    return <CodeEditor textValue={this.props.textValue} textHandler={(value: string) => this.textHandler(value)} editorConfig={this.props} />;
  }
}

export default connector(CodeEditorContainer);
