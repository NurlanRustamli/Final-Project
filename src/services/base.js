import axios from "axios"

let productsUrl = import.meta.env.VITE_PRODUCTS_API
let usersUrl = import.meta.env.VITE_USERS_API
let commentsUrl = import.meta.env.VITE_COMMENTS_API


export const productsApi = {
    getAllProduct: async function () {

        return (await axios.get(productsUrl)).data

    }
    ,
    addProduct: function (params) {
        axios.post(productsUrl, params)
    }, changeProduct: async function (rating,product) {
        try {
            const response = await axios.put(`${productsUrl}/${product.id}`, {...product,rating:rating  });
            return response.data;
        } catch (error) {
            console.error('Error updating product rating', error);
            throw error;
        }
    },
    getSingleProduct: async function (id) {
        try {
            const response = await axios.get(`${productsUrl}/${id}`);
            return response.data; // Assuming the response data is the product object
        } catch (error) {
            console.error('Error fetching single product', error);
            throw error;
        }
    },
    getSearchProduct: async function (name) {
        try {
            let res = (await axios.get(`${productsUrl}?name=${name}`))
            return res

        } catch (error) {
            return error.response
        }
    }, getTypeFilteredProducts: async function (type) {
        return (await axios.get(`${productsUrl}?type=${type}`)).data

    }, getPriceFilteredProducts: async function (discountPrice) {
        return (await axios.get(`${productsUrl}?discountPrice=${discountPrice}`)).data

    }, getWeightFilteredProducts: async function (weight) {
        return (await axios.get(`${productsUrl}?weight=${weight}`)).data

    }, getTimeFilteredProducts: async function (time) {
        return (await axios.get(`${productsUrl}?time=${time}`)).data

    }
}
export const usersApi = {
    loginUser: async function () {

        try {
            let res = await axios.get(`${usersUrl}`)
            return res
        } catch (error) {
            return error.response
        }

    },
    registerUser: async function (userData, forData) {


        try {
            let res = await axios.post(usersUrl, userData)
            return res
        } catch (error) {
            return error.response
        }


    },
    checkEmail: async function (email) {

        try {
            let res = await axios.get(`${usersUrl}`)
            if (res.data.email === email) {
                return true

            } else {
                return false
            }
        } catch (error) {
            return error.response
        }

    }
}
export const commentsApi = {
    postComment: async function (comment) {
        try {
            let res = await axios.post(`${commentsUrl}`, comment)
            return res
        } catch (error) {
            return error.response
        }
    },
    getComment: async function () {

        try {
            let res = await axios.get(`${commentsUrl}`)
            return res
        } catch (error) {
            return error.response
        }

    }
}