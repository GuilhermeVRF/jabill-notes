import Quill from "quill";

export function initializeQuill(editorRef, content){
    const quill = new Quill(editorRef, {
        modules: {
            toolbar: [
                [{ header: [1,2,3,4,5,6,false] }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' },
                    { indent: '-1' }, { indent: '+1' }
                ],
                ['link', 'image', 'video'],
                ['clean']
            ]   
        },
        theme: 'snow',
    });

    quill.root.innerHTML = content
    return quill;
}
