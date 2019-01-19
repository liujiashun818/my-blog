import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codeMirror';
import { autoTextarea } from '../../../../untils/commonUntil';

// https://github.com/facebook/react/blob/master/docs/_js/live_editor.js#L16
// https://github.com/facebook/react/blob/master/src/browser/ui/dom/components/ReactDOMInput.js

class CodeMirrorEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isControlled: Boolean(this.props.value)}
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    // const isTextArea = this.props.forceTextArea;
    // if (!isTextArea) {
    //   this.editor = CodeMirror.fromTextArea(this.editorRef.current, this.props);
    //   this.editor.on('change', this.handleChange);
    // }
    let editorLeft = document.querySelector('.text-box');
    let leftChildren = document.querySelector('.textarea');
    autoTextarea(leftChildren);
    // let editorRight = document.querySelector('.editor-right').children[0];
    let editorRight = document.querySelector('.result');
    function changeHeight_right(){
     editorRight.scrollTop = editorLeft.scrollTop*0.7;
    }
    function cancel(){
     editorLeft.removeEventListener('scroll', changeHeight_right);
    }
    function changeHeight_left(){
      editorLeft.scrollTop = editorRight.scrollTop*1.7;
    }
    function cancel_right(){
      editorRight.removeEventListener('scroll', changeHeight_left);
    }
    editorLeft.addEventListener('mouseover', () => {
      editorLeft.addEventListener('scroll', changeHeight_right);
    })
      editorLeft.addEventListener('mouseleave',cancel);
      editorRight.addEventListener('mouseover', () => {
      editorRight.addEventListener('scroll',changeHeight_left);
    })
      editorRight.addEventListener('mouseleave',cancel_right);
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

  // handleChange() {
  //   if (!this.editor) {
  //     return
  //   }

  //   const value = this.editor.getValue()
  //   if (value === this.props.value) {
  //     return
  //   }

  //   if (this.props.onChange) {
  //     this.props.onChange({target: {value: value}})
  //   }

  //   if (this.editor.getValue() !== this.props.value) {
  //     if (this.state.isControlled) {
  //       this.editor.setValue(this.props.value)
  //     } else {
  //       this.props.value = value
  //     }
  //   }
  // }

  render() {
    const {value, readOnly, defaultValue, onChange} = this.props;
    return(
      <div className='text-box'>
        <textarea 
          className='textarea' 
          ref={(editorRef)=>{this.editorRef=editorRef}} 
          value={value}
          readOnly={readOnly}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
   
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
