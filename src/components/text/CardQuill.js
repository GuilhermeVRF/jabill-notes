import Quill from "quill";

export function initializeQuill(editorRef){
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

    return quill;
    //quill.root.addEventListener('keydown', (event) => toggleQuillMenu(event, menuIdentifier));
}

/*function toggleQuillMenu(event, menuIdentifier){
    console.log('toggleQuillMenu', menuIdentifier);
}*/