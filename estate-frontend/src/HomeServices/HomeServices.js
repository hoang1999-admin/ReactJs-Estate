import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com";
const API_URL_Category = "http://localhost:8080/api/v1/category";
const API_URL_CategoryTop = "http://localhost:8080/api/v1/category-top";

const API_URL_ProductCount = "http://localhost:8080/api/v1/product-count";
const API_URL_Product = "http://localhost:8080/api/v1/product";
const API_URL_ProductSale = "http://localhost:8080/api/v1/productsale";
const API_URL_ProductRent = "http://localhost:8080/api/v1/productrent";
const API_URL_ProductDeal = "http://localhost:8080/api/v1/productdeal";
const API_URL_ProductTop = "http://localhost:8080/api/v1/product-top";
const API_URL_ProductByCategory = "http://localhost:8080/api/v1/productbycategory";

const API_URL_Photo = "http://localhost:8080/api/v1/photo";

const API_URL_Slider = "http://localhost:8080/api/v1/slider";

const API_URL_Contact = "http://localhost:8080/api/v1/contact";

const API_URL_Email= "http://localhost:8080/api/v1/email";

class HomeServices {
  async getAllUsers() {
    const url = `${API_URL}/users/`;

    return axios.get(url).then(response => response.data);
  }

  async getUser(id) {
    const url = `${API_URL}/users/${id}`;

    return axios.get(url).then(response => response.data);
  }
  // category
  async getAllCategorys() {
    const url = `${API_URL_Category}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryTops() {
    const url = `${API_URL_CategoryTop}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategorysId(id) {
    const url = `${API_URL_Category}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product
  async getAllProductsCount() {
    const url = `${API_URL_ProductCount}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProducts() {
    const url = `${API_URL_Product}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductTops() {
    const url = `${API_URL_ProductTop}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductsId(id) {
    const url = `${API_URL_Product}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product deal
  async getAllProductsDeal() {
    const url = `${API_URL_ProductDeal}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllProductsDealId(id) {
    const url = `${API_URL_ProductDeal}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product sale
  async getAllProductsSale() {
    const url = `${API_URL_ProductSale}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllProductsSaleId(id) {
    const url = `${API_URL_ProductSale}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product rent
  async getAllProductsRent() {
    const url = `${API_URL_ProductRent}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllProductsRentId(id) {
    const url = `${API_URL_ProductRent}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product by category
  async getAllProductByCategory(id) {
    const url = `${API_URL_ProductByCategory}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // photo
  async getAllPhotos() {
    const url = `${API_URL_Photo}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPhotosId(id) {
    const url = `${API_URL_Photo}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // slider
  async getAllSliders() {
    const url = `${API_URL_Slider}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllSlidersId(id) {
    const url = `${API_URL_Slider}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // contact

  getContacts() {
    return axios.get(API_URL_Contact);
  }

  createContact(contact) {
    return axios.post(API_URL_Contact, contact);
  }

  getContactById(contactId) {
    return axios.get(API_URL_Contact + '/index=' + contactId);
  }

  updateContact(contact, contactId) {
    return axios.put(API_URL_Contact + '/' + contactId, contact);
  }

  deleteContact(contactId) {
    return axios.delete(API_URL_Contact + '/' + contactId);
  }
  // email

  getEmails() {
    return axios.get(API_URL_Email);
  }

  createEmail(email) {
    return axios.post(API_URL_Email, email);
  }

  getEmailById(emailId) {
    return axios.get(API_URL_Email + '/index=' + emailId);
  }

  updateEmail(email, emailId) {
    return axios.put(API_URL_Email + '/' + emailId, email);
  }

  deleteEmail(emailId) {
    return axios.delete(API_URL_Email + '/' + emailId);
  }
}

export default HomeServices;