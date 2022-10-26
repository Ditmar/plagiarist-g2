import { useState } from "react";

const useUpload = (room) => {
    console.log('rooom code ',room )
    const [formatAccepted, setFormatAccepted] = useState(false);
    const [file, setFile] = useState({});
    const getFile = (event) => {
        try {
            if (event.dataTransfer.files.length >= 1) {
                return event.dataTransfer.files
            }
        } catch (error) {
            throw new Error(`Error, file doesn't exits `);
        }
    }
    const onCancelUpload = () => {
        setFormatAccepted(false);
    }
    const checkUpload = (event) => {
        const [file] =  getFile(event);
        setFile({
            file,
            name: file.name,
            type: file.type,
            size: Math.round(((file.size / 1024) /  1024) * 100) / 100
        });
        setFormatAccepted(true);
    }
    const getUploadForm = () => {
        const data = new FormData();
        data.append('file', file.file);
        data.append('user', 'bot');
        data.append('code', room);
        return data;
    }
    return {checkUpload, formatAccepted, onCancelUpload, file, getUploadForm}
}
export default useUpload;