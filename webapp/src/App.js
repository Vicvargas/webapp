import React, { Component } from 'react';
import NavBar from './components/NavBar'
import {FileUploader} from './fileUploader.js';
import './App.css';

export class App extends Component {
    render(){
        return (
            <div>
                <FileUploader />
                <NavBar/>
            </div>
        );
    }
}