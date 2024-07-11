import axios from "axios"

let productsUrl = import.meta.env.VITE_PRODUCTS_API

export const productsApi ={
    getAllProduct: async function () {
         
        return (await axios.get(productsUrl)).data
        
    }
    ,
    addProduct: function (params) {
        axios.post(productsUrl,params)
    },
    getSingleProduct:async function (id) {
        return( await axios.get(`${productsUrl}?id=${id}`)).data[0]
    },
    getSearchProduct: async function (name) {
        try {
            let res = (await axios.get(`${productsUrl}?name=${name}`))
            return res

        } catch (error) {
            return error.response
        }
    }
}