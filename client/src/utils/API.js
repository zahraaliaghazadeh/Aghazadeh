import axios from "axios";

export default {
    getProducts: function () {
        return axios.get("/api/product")
    },
    createProduct: function (product) {
        return axios.post("/api/product", product);
    },
    updateProduct: function (id) {
        return axios.put("/api/product/" + id);
    }
}