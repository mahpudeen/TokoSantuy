import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiSpringboot} from './../utils'

Vue.use(VueResource)

export default {
    getLogin (window, email, password) {
        console.log(email,password)
        return getApiSpringboot().get('/login/'+email+'/'+password)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
}