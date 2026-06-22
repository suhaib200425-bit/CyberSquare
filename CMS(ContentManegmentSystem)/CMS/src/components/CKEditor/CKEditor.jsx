import React from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

const CKEditorDemo = () => {
    const cloud = useCKEditorCloud({
        version: '48.2.0',
        premium: true
    });

    if (cloud.status === 'error') {
        return <div>Error!</div>;
    }

    if (cloud.status === 'loading') {
        return <div>Loading...</div>;
    }

    const {
        ClassicEditor,
        Essentials,
        Paragraph,
        Bold,
        Italic,
        Heading,
        Link,
        List,
        BlockQuote,
        Table,
        TableToolbar,
        Image,
        ImageToolbar,
        ImageUpload,
        Mention
    } = cloud.CKEditor;

    const { FormatPainter } = cloud.CKEditorPremiumFeatures;

    return (
        <CKEditor
            editor={ClassicEditor}
            data={''}
            config={{
                licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODMyOTU5OTksImp0aSI6ImVhOTIxNDJjLThiMDEtNGEzNy05MWQ3LWRhNTU1NGYxYTU0NCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjJiNWI2ODY0In0.7WXJ5vDPU2iro1BGPwgCXe0QkgdfXmip-o_rVxrgseJqPz9J9AOX7c7JhzYUauUUVBL2GBSf8sMrPzQoh5nCHQ',
                plugins: [
                    Essentials,
                    Paragraph,
                    Heading,
                    Bold,
                    Italic,
                    Link,
                    List,
                    BlockQuote,
                    Table,
                    TableToolbar,
                    Image,
                    ImageToolbar,
                    ImageUpload,
                    Mention
                ],
                toolbar: [
                    "undo",
                    "redo",
                    "|",
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "link",
                    "|",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "insertTable",
                    "blockQuote"
                ]
            }}
        />
    );
};

export default CKEditorDemo