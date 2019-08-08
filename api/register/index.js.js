import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from './../utils'

Vue.use(VueResource)

export default {
    getLogin (window, email, password) {
        return getApiNoAuth().get('Registers/findOne?filter=%7B%22where%22%3A%7B%22and%22%3A%5B%7B%22email%22%3A%22'+email+'%22%7D%2C%7B%22password%22%3A%22'+password+'%22%7D%5D%7D%7D')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    // submitEmployee(window, param){
    //     return getApiNoAuth().post('Employees', param)
    //         .then(function (response){
    //             console.log(response)
    //             return response.data
    //         }).catch(function(err){
    //             console.log(err)
    //         })
    // },
}