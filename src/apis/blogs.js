import axios from '../utils/axios-defult'

export function getBlogs(url) {
  return axios.get(url)
}

export function getBlog(url, id) {
  return axios.get(url + id)
}

export function postBlog(url, data) {
  return axios.post(url, data)
}