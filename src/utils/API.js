import axios from "axios";

export default {
    getData: function () {
        return axios.get('https://randomuser.me/api/?results=50&nat=us&seed=foobar&format=prettyJSON')
    }
}