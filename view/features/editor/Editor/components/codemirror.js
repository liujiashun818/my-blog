import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codeMirror';
// adapted from:
// https://github.com/facebook/react/blob/master/docs/_js/live_editor.js#L16

// also used as an example:
// https://github.com/facebook/react/blob/master/src/browser/ui/dom/components/ReactDOMInput.js

class CodeMirrorEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isControlled: Boolean(this.props.value)}
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const isTextArea = this.props.forceTextArea;
    if (!isTextArea) {
      this.editor = CodeMirror.fromTextArea(this.editorRef.current, this.props);
      this.editor.on('change', this.handleChange);
    }
  }

  componentDidUpdate() {
    if (!this.editor) {
      return
    }

    if (this.props.value) {
      if (this.editor.getValue() !== this.props.value) {
        this.editor.setValue(this.props.value);
      }
    }
  }

  handleChange() {
    if (!this.editor) {
      return
    }

    const value = this.editor.getValue()
    if (value === this.props.value) {
      return
    }

    if (this.props.onChange) {
      this.props.onChange({target: {value: value}})
    }

    if (this.editor.getValue() !== this.props.value) {
      if (this.state.isControlled) {
        this.editor.setValue(this.props.value)
      } else {
        this.props.value = value
      }
    }
  }

  render() {
    const {textAreaClassName,value, readOnly, defaultValue, onChange} = this.props;
    return(
      <textarea 
        className={textAreaClassName} 
        ref={(editorRef)=>{this.editorRef=editorRef}} 
        value={value}
        readOnly={readOnly}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    )
  }
}

CodeMirrorEditor.propTypes = {
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
  textAreaClassName: PropTypes.string,
  onChange: PropTypes.func,
  forceTextArea: PropTypes.bool,
  value: PropTypes.string
}

module.exports = CodeMirrorEditor
