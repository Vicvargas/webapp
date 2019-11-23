import axios from 'axios';
class Service {

    constructor() {
        console.log("Service is constructed");
    }

    getRestClient() {
        if (!this.serviceInstance) {
            this.serviceInstance = axios.create({
                baseURL: 'http://192.168.100.4:8080',
                 timeout: 100000,
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        }
        return this.serviceInstance;
    }
}

export default (new Service());
