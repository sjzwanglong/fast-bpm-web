import axios from 'axios'

class CmpyService {
    constructor() {

    }

    static getCmpyList(params) {
        return axios.get(`/api/cmpys/page/${params.pageCount}/${params.pageNo}`)
    }

    static add(params) {
        return axios.post("/api/cmpy/", params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    }

    static update(params) {
        return axios.put(`/api/cmpy/${params.id}`, params)
    }

    static delete(id) {
        return axios.delete(`/api/cmpy/delete/${id}`)
    }
}

export default CmpyService