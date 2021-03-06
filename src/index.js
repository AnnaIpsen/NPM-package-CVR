const axios = require('axios');

const all =  {
    async getCompanyBySearch (search, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?search=' + search + '&country=' + country)
            return response.data
        } catch (error) {return error}
    },

    async getCompanyByVat (vat, country) {
        try {
            const response =  await axios.get('https://cvrapi.dk/api?vat=' + vat + '&country=' + country)
            return response.data
        } catch (error) {return error}
    },

    async getCompanyByName (name, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?name=' + name + '&country=' + country )
            return response.data
        } catch (error) {return error}
    },

    async getCompanyByProdu (produ, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?produ=' + produ + '&country=' + country )
            return response.data
        } catch (error) {return error}
    },

    async getCompanyByPhone (phone, country) {
        try {
            const response = await axios.get('https://cvrapi.dk/api?phone=' + phone + '&country=' + country )
            return response.data
        } catch (error) {return error}
    }

}

export default all