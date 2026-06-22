import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function EditorContainer({ EditorContainerValue,content }) {
  return (
    <Editor
  
      onEditorChange={EditorContainerValue }
      value={content}
      apiKey='693r6zybzk9jtueznh5o45r0uegaae1qv8j2zj9ycqlidd7s'
      init={{

  skin: "oxide-dark",
        height: 500,
        menubar: true,
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until May 5, 2026:
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'tinymceai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        tinymceai_token_provider: async () => {
          await fetch(`https://demo.api.tiny.cloud/1/693r6zybzk9jtueznh5o45r0uegaae1qv8j2zj9ycqlidd7s/auth/random`, { method: "POST", credentials: "include" });
          return { token: await fetch(`https://demo.api.tiny.cloud/1/693r6zybzk9jtueznh5o45r0uegaae1qv8j2zj9ycqlidd7s/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
        },
        uploadcare_public_key: '584543250ea76c3d4e00',
      }}
    />
  );
}