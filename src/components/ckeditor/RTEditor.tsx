import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import dynamic from "next/dynamic";
import React from "react";

type TRTEditorProps = {};

const RTEditor = ({}: TRTEditorProps) => {
  return (
    <CKEditor
      editor={Editor.Editor}
      data="<p>Hello from CKEditor&nbsp;5!</p>"
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event) => {
        console.log(event);
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
};

export default RTEditor;
