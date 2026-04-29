import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function EditorContainer({ EditorContainerValue,content }) {
  return (
    <Editor
      onEditorChange={EditorContainerValue }
      initialValue={content}
      apiKey='9tp2or5slqs9r0ijya34s3r3h7cc32ik8fi7ohem8q993sfz'
      init={{

        height: 500,
        menubar: false,
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
          await fetch(`https://demo.api.tiny.cloud/1/9tp2or5slqs9r0ijya34s3r3h7cc32ik8fi7ohem8q993sfz/auth/random`, { method: "POST", credentials: "include" });
          return { token: await fetch(`https://demo.api.tiny.cloud/1/9tp2or5slqs9r0ijya34s3r3h7cc32ik8fi7ohem8q993sfz/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
        },
        uploadcare_public_key: 'e0d4c9da1df004507fd8',
      }}
    />
  );
}