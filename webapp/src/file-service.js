import service from './service.js';

export class FileService {
    uploadFileToServer(data){
        //returns Promise object
       const anff = "/encode?text=" + data.get('nombre_archivo');
        const handleSaveToPC = jsonData => {
            const fileData = JSON.stringify(jsonData);
            const blob = new Blob([fileData], {type: "text/plain"});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'filename.json';
            link.href = url;
            link.click();
        }
       return service.getRestClient().post('/encode',data).then(resp => {
           console.log(resp.data);
       });
    }

    downloadFileFromServer(data){



        return service.getRestClient().post('/decode', data).then(resp => {
            console.log(resp.data);
        })


    }
}
