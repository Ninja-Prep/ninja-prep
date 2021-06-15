import React, {Component} from 'react';

import {connect} from 'react-redux';
import {ReflexContainer, ReflexSplitter, ReflexElement} from 'react-reflex';
import {withRouter} from 'react-router';
import {RouteComponentProps} from 'react-router-dom';

import CodeEditorNavbar from './CodeEditorNavbar/CodeEditorNavbar';
import TestCaseArea from './CodeEditorOutput/TestCaseArea';
import CodeMirrorWrapperComponent from './CodeMirrorWrapperComponent';
import TabComponent from './Tabs/TabsComponent';

import './CodeMirror.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';

import {default as _} from 'lodash';
import 'react-reflex/styles.css';

interface Props extends RouteComponentProps {
  problemDetails: any;
  mode: string;
}

type State = {
  value: string;
  output: string;
};

/**
 *
 */
class CodeEditorDesktop extends Component<Props, State> {
  cookieUsercodeKey: string;
  /**
   *
   */
  constructor(props: Props) {
    super(props);
    this.cookieUsercodeKey = [props.problemDetails.title, props.mode].join('_');
    this.state = {
      value: this.setInitialCode(),
      output: '',
    };
  }

  /**
   *
   */
  setInitialCode() {
    const storageUserCode = localStorage.getItem(this.cookieUsercodeKey);
    if (!_.isNull(storageUserCode)) {
      return storageUserCode;
    }
    return this.props.problemDetails.starterCode;
  }

  /**
   *
   */
  textHandler(value: string) {
    this.setState({value});
    localStorage.setItem(this.cookieUsercodeKey, value);
  }

  /**
   *
   */
  render() {
    return (
      <div className="viewport-wrapper">
        <CodeEditorNavbar title={this.props.problemDetails.title} />
        <ReflexContainer orientation="horizontal">
          <ReflexElement>
            <ReflexContainer orientation="vertical">
              <ReflexElement>
                <TabComponent problemDetails={this.props.problemDetails} />
              </ReflexElement>
              <ReflexSplitter style={{width: '10px'}} />

              <ReflexElement>
                <ReflexContainer orientation="horizontal">
                  <ReflexElement
                    flex={4}
                    className="reflex-element-hide-overflow"
                  >
                    <CodeMirrorWrapperComponent
                      textValue={this.state.value}
                      textHandler={(value) => this.textHandler(value)}
                      editorConfig={this.props}
                    />
                  </ReflexElement>
                  <ReflexSplitter className="reflex-splitter-horizontal-editor-testcase" />

                  <ReflexElement
                    flex={2}
                    className="reflex-element-testcase-area reflex-element-hide-overflow text-light"
                  >
                    <TestCaseArea
                      testCases={this.props.problemDetails.testCases}
                      mode={this.props.mode}
                      codeSnippet={this.state.value}
                    />
                  </ReflexElement>
                </ReflexContainer>
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  theme: state.editor.theme,
  mode: state.editor.mode,
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  matchBrackets: true,
  autoCloseBrackets: true,
});

export default connect(mapStateToProps)(withRouter(CodeEditorDesktop));
