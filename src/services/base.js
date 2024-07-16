import axios from "axios"
import { useNavigate } from "react-router"

let productsUrl = import.meta.env.VITE_PRODUCTS_API
let blogsUrl = import.meta.env.VITE_BLOGS_API
let usersUrl = import.meta.env.VITE_USERS_API
let commentsUrl = import.meta.env.VITE_COMMENTS_API



export const productsApi = {
    getAllProduct: async function () {

        return (await axios.get(productsUrl)).data

    }
    ,
    addProduct: async function (params) {
        try {
            const response = await axios.post(productsUrl, params);
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    }
    , changeProduct: async function (rating, product) {
    try {
        // Create a new object with all existing product properties and the new rating
        const updatedProduct = {
            ...product,
            rating: rating
        };

        const response = await axios.put(`${productsUrl}/${product.id}`, updatedProduct);
        return response.data;
    } catch (error) {
        console.error('Error updating product rating', error);
        throw error;
    }
},deleteProduct: async function (id) {
        
        try {
            const response = await axios.delete(`${productsUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting blog:', error);
            throw error;
        }
    },
    getSingleProduct: async function (id) {
        try {
            const response = await axios.get(`${productsUrl}/${id}`);
            return response.data; 
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

    } , changeDiscountProduct: async function (product, discountPrice) {
        try {
            const response = await axios.put(`${productsUrl}/${product.id}`, { ...product, discountPrice: discountPrice });
            return response.data;
        } catch (error) {
            console.error('Error updating product rating', error);
            throw error;
        }
    } , changePreviousProduct: async function (product, previousPrice) {
        try {
            const response = await axios.put(`${productsUrl}/${product.id}`, { ...product, previousPrice: previousPrice });
            return response.data;
        } catch (error) {
            console.error('Error updating product rating', error);
            throw error;
        }
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

    },getUser:async function (email) {
        try {
            let res = await axios.get(`${usersUrl}`)

            const foundItem = res.data.find(item => item.email === email);
            console.log(foundItem)
          return foundItem

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

    },deleteUser: async function (id) {
        
        try {
            const response = await axios.delete(`${usersUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting blog:', error);
            throw error;
        }
    },refreshPassword: async function (user,newPassword) {
        try {
            const response = await axios.put(`${usersUrl}/${user.id}`, { ...user, password: newPassword });
            alert("Successfully Changed")
            return response.data;
        } catch (error) {
            console.error('Error updating user password', error);
            throw error;
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

    },
    getFilteredComments:async function(productId){
        try {
            let res = await axios.get(`${commentsUrl}?productId=${productId}`)
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
    addBlog:async function (params) {
        try {
            const response = await axios.post(blogsUrl, params);
            return response.data;
        } catch (error) {
            console.error('Error adding blog:', error);
            throw error;
        }
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

    },deleteBlog: async function (id) {
        
        try {
            const response = await axios.delete(`${blogsUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting blog:', error);
            throw error;
        }
    }
    //, getTimeFilteredProducts: async function (time) {
    //     return (await axios.get(`${blogsUrl}?time=${time}`)).data

    // }
}