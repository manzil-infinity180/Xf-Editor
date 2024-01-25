import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

function MainEditor() {
  const [value,setValue] = useState("");
  return (
    <>
     
    <div style={{color:"#e30d7c",fontFamily: 'Style Script', fontSize:"1rem",textAlign:"center",letterSpacing:"2.5px"}}>
      <h1>Tinymce Editor</h1>
    
  </div>
    <Editor
      apiKey='z95x4745zyhuuluyou4zpfso6oxljpsxnlv0wnz1b2gzjrxt'
      init={{
        plugins: 'ai code tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Welcome to TinyMCE!"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
     
    />
     </>
  );
}
export default MainEditor;