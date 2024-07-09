import axios from "axios"
let productsUrl = import.meta.env.VITE_PRODUCTS_API

export const productApi = {
    getAllProduct: function () {
        axios.get(productsUrl)
        .then(res=>console.log(res.data))
        
    }
}