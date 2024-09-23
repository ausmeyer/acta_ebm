import React from 'react';
import ReactDOM from 'react-dom';
import StudyDesignFlow from './StudyDesignFlow';

function initStudyDesignFlowWidget(container) {
  ReactDOM.render(
    <React.StrictMode>
      <StudyDesignFlow />
    </React.StrictMode>,
    container
  );
}

export default {
  initStudyDesignFlowWidget
};