import axios from "axios";

export default {
    getProducts: function () {
        return axios.get("/api/product")
    },
    createProduct: function (product) {
        return axios.post("/api/product", product);
    },
    updateProduct: function (product, id) {
        return axios.put("/api/product/single/" + id, product);
    },
    deleteProduct: function (id) {
        return axios.delete("/api/product/single/" + id);
    },
    search: function (query) {
        return axios.get("/api/product/search/" + query);
    },
    sendServiceRequest: function (details) {
        return axios.post("/send", details);
    }
}