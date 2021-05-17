import http from './http'
import endpoints from './endpoints'

const API = {
  _callGet: (url) => {
    return http.get(url)
  },
  _callPost: (url, body) => {
    return http.post(url, body)
  },
  _getCities: () => {
    const url = `${endpoints.cities}?limit=99`
    return http.get(url)
  },
  _getDistricts: (id, limit, start) => {
    const url = `${endpoints.districts}?ilId=${id}&limit=${limit || 99}&start=${
      start || 0
    }`
    return http.get(url)
  },
  _getInstitutionList: (limit, start) => {
    const url = `${endpoints.institutionsList}?limit=${limit || 99}&start=${
      start || 0
    }`
    return http.get(url)
  },
  _addInstitution: (body) => {
    const url = endpoints.institution
    return http.post(url, body)
  },
  _getInstitution: (id) => {
    const url = `${endpoints.institution}/${id}`
    return http.get(url)
  },
  _editInstitution: (body) => {
    const url = endpoints.institution
    return http.put(url, body)
  },
  _deleteInstitution: (id) => {
    const url = `${endpoints.institution}/${id}`
    return http.delete(url)
  },
  _getCampusList: (id, limit, start) => {
    const url = `${endpoints.campusList}?kurumId=${id}&limit=${limit || 99}&start=${
      start || 0
    }`
    return http.get(url)
  },
  _addCampus: (body) => {
    const url = endpoints.campus
    return http.post(url, body)
  },
  _getCampus: (id) => {
    const url = `${endpoints.campus}/${id}`
    return http.get(url)
  },
  _editCampus: (body) => {
    const url = endpoints.campus
    return http.put(url, body)
  },
  _deleteCampus: (id) => {
    const url = `${endpoints.campus}/${id}`
    return http.delete(url)
  },
  _getSchoolList: (id, limit, start) => {
    const url = `${endpoints.schoolList}?kampusId=${id}&limit=${limit || 99}&start=${
      start || 0
    }`
    return http.get(url)
  },
  _addSchool: (body) => {
    const url = endpoints.school
    return http.post(url, body)
  },
  _getSchool: (id) => {
    const url = `${endpoints.school}/${id}`
    return http.get(url)
  },
  _editSchool: (body) => {
    const url = endpoints.school
    return http.put(url, body)
  },
  _deleteSchool: (id) => {
    const url = `${endpoints.school}/${id}`
    return http.delete(url)
  },
  _getBranchList: (limit, start) => {
    const url = `${endpoints.branchList}?limit=${limit || 99}&start=${start || 0}`
    return http.get(url)
  },
  _addBranch: (body) => {
    const url = endpoints.branch
    return http.post(url, body)
  },
  _getBranch: (id) => {
    const url = `${endpoints.branch}/${id}`
    return http.get(url)
  },
  _editBranch: (body) => {
    const url = endpoints.branch
    return http.put(url, body)
  },
  _deleteBranch: (id) => {
    const url = `${endpoints.branch}/${id}`
    return http.delete(url)
  },
  _getPeriodList: (limit, start) => {
    const url = `${endpoints.periodList}?limit=${limit || 99}&start=${start || 0}`
    return http.get(url)
  },
  _addPeriod: (body) => {
    const url = endpoints.period
    return http.post(url, body)
  },
  _getPeriod: (id) => {
    const url = `${endpoints.period}/${id}`
    return http.get(url)
  },
  _editPeriod: (body) => {
    const url = endpoints.period
    return http.put(url, body)
  },
  _deletePeriod: (id) => {
    const url = `${endpoints.period}/${id}`
    return http.delete(url)
  }
}

export default API
