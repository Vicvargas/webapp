import React, { Component } from 'react';
import { FileService } from './file-service.js';
import {positions} from '@material-ui/core/AppBar'
import AppBar from "@material-ui/core/AppBar/AppBar";

export class FileUploader extends Component {
    constructor() {
        super();
        this.fileService = new FileService();
    }

    handleUploadFile = (event) => {
        const data = new FormData();
        //using File API to get chosen file
        let file = event.target.files[0];
        console.log("Uploading file", event.target.files[0]);
        data.append('file', event.target.files[0]);
        data.append('nombre_archivo',file.name);
        let self = this;



        //calling async Promise and handling response or error situation
        this.fileService.uploadFileToServer(data).then((response) => {
            console.log("File " + file.name + " is uploaded");
        }).catch(function (error) {
            console.log(error);
            if (error.response) {
                //HTTP error happened
                console.log("Upload error. HTTP error/status code=",error.response.status);
            } else {
                //some other error happened
                console.log("Upload error. HTTP error/status code=",error.message);
            }
        });

    };

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleUploadFile} />
                < type position = "bottom"/>
            </div>
        )
    };
}
