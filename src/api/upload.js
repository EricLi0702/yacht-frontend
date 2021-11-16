import axios from 'axios'

function uploadImage(payload){
    return axios.post('/api/file/image', payload);
}

function uploadVideo(payload){
    return axios.post('/api/file/video', payload);
}

function uploadOther(payload){
    return axios.post('/api/file/other', payload);
}

function deleteFile(payload){
    return axios.delete('/api/file?fileName=' + payload);
}

export{
    uploadImage,
    uploadVideo,
    uploadOther,
    deleteFile,
}