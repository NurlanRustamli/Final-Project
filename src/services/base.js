import axios from "axios"

let productsUrl = import.meta.env.VITE_PRODUCTS_API
let blogsUrl = import.meta.env.VITE_BLOGS_API
let usersUrl = import.meta.env.VITE_USERS_API
let commentsUrl = import.meta.env.VITE_COMMENTS_API


export const productsApi = {
    getAllProduct: async function () {

        return (await axios.get(productsUrl)).data

    }
    ,
    addProduct: function (params) {
        axios.post(productsUrl, params)
    }, changeProduct: async function (rating, product) {
        try {
            const response = await axios.put(`${productsUrl}/${product.id}`, { ...product, rating: rating });
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
   getAllUsers: async function () {

        return (await axios.get(usersUrl)).data

    },
    loginUser: async function () {

        try {
            let res = await axios.get(`${usersUrl}`)
            console.log(res)
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
        console.log(email)
        try {
            let res = await axios.get(`${usersUrl}`)

            const foundItem = res.data.find(item => item.email === email);
            console.log(foundItem)
            if (foundItem) {
                return true;
            } else {
                return false;
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
export const blogsApi = {
    getAllBlog: async function () {

        return (await axios.get(blogsUrl)).data

    }
    ,
    addBlog: function (params) {
        axios.post(blogsUrl, params)
    }, changeBlog: async function (rating, product) {
        try {
            const response = await axios.put(`${blogsUrl}/${product.id}`, { ...product, rating: rating });
            return response.data;
        } catch (error) {
            console.error('Error updating product rating', error);
            throw error;
        }
    },
    getSingleBlog: async function (id) {
        try {
            const response = await axios.get(`${blogsUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching single blog:', error);
            throw error;
        }
    },
    getSearchBlog: async function (title) {
        try {
            let res = (await axios.get(`${blogsUrl}?title=${title}`))
            return res

        } catch (error) {
            return error.response
        }
    }, getTypeFilteredBlogs: async function (type) {
        return (await axios.get(`${blogsUrl}?type=${type}`)).data

    }
    //, getTimeFilteredProducts: async function (time) {
    //     return (await axios.get(`${blogsUrl}?time=${time}`)).data

    // }
}