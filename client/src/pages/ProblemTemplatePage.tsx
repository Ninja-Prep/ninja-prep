import React, {Component} from 'react';

import CodeEditorComponent from '../components/CodeEditor/CodeEditorComponent';

/**
 *
 */
class ProblemTemplatePage extends Component {
  /**
   *
   */
  render() {
    return (
      <div>
        <CodeEditorComponent {...this.props} />
      </div>
    );
  }
}

export default ProblemTemplatePage;
