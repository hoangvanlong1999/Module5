

import axios from "axios";

class ProductModel {

    constructor(){
        this.api_url = 'http://127.0.0.1:8000/api/products/';
    }

     getAllProduct = async () => {
        try {
            const res = await axios.get(this.api_url);
            return res.data;
        } catch (error) {
            return [];
        }
    }

    async show(id){
        try {
            const res = await axios.get(this.api_url  + id);
            return res.data;
        } catch (error) {
            return [];
        }
    }

    async find(id){
        const res = await axios.get(this.api_url  + id);
        return res.data;
    }

    async store(data){
        const responseData = await axios.post(this.api_url, data);
        return responseData.data;
    }

    async update(id, data) {
        try {
            const response = await axios.put(this.api_url + id, data);
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async delete(id) {
        try {
            const response = await axios.delete(this.api_url+id);
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
export default new ProductModel;