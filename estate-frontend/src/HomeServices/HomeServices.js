import axios from "axios";

const API_URL_Category = "http://localhost:8080/api/v1/category";
const API_URL_CategoryTop = "http://localhost:8080/api/v1/category-top";
const API_URL_CategorySale = "http://localhost:8080/api/v1/category-sale";
const API_URL_CategoryRent = "http://localhost:8080/api/v1/category-rent";
const API_URL_CategoryApply = "http://localhost:8080/api/v1/category-apply";
const API_URL_CategoryFurnitureandexterior = "http://localhost:8080/api/v1/category-furnitureandexterior";
const API_URL_CategoryFengshui = "http://localhost:8080/api/v1/category-fengshui";
const API_URL_CategoryRecruitment = "http://localhost:8080/api/v1/category-recruitment";
const API_URL_CategoryExample = "http://localhost:8080/api/v1/category-example";


const API_URL_ProductSearch = "http://localhost:8080/api/v1/product/search/searchText=";
const API_URL_Product = "http://localhost:8080/api/v1/product";
const API_URL_ProductPage = "http://localhost:8080/api/v1/products";
const API_URL_ProductSale = "http://localhost:8080/api/v1/productsale";
const API_URL_ProductRent = "http://localhost:8080/api/v1/productrent";
const API_URL_ProductDeal = "http://localhost:8080/api/v1/productdeal";
const API_URL_ProductTop = "http://localhost:8080/api/v1/product-top";
const API_URL_ProductTop12 = "http://localhost:8080/api/v1/product-top12";
const API_URL_ProductByCategory = "http://localhost:8080/api/v1/productbycategory";
const API_URL_ProductRelation = "http://localhost:8080/api/v1/productrelations";
const API_URL_ProductPhoto = "http://localhost:8080/api/v1/productphoto";

const API_URL_Photo = "http://localhost:8080/api/v1/photo";

const API_URL_Slider = "http://localhost:8080/api/v1/slider";

const API_URL_Contact = "http://localhost:8080/api/v1/contact";

const API_URL_Email= "http://localhost:8080/api/v1/email";

const API_URL_Request= "http://localhost:8080/api/v1/request";

const API_URL_Area= "http://localhost:8080/api/v1/area";
const API_URL_AreaTop= "http://localhost:8080/api/v1/area-top";

class HomeServices {

  // category
  async getAllCategorys() {
    const url = `${API_URL_Category}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryTops() {
    const url = `${API_URL_CategoryTop}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategorySales() {
    const url = `${API_URL_CategorySale}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryRents() {
    const url = `${API_URL_CategoryRent}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryApplys() {
    const url = `${API_URL_CategoryApply}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryFurnitureandexteriors() {
    const url = `${API_URL_CategoryFurnitureandexterior}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryFengshuis() {
    const url = `${API_URL_CategoryFengshui}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryRecruitments() {
    const url = `${API_URL_CategoryRecruitment}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategoryExamples() {
    const url = `${API_URL_CategoryExample}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategorysId(id) {
    const url = `${API_URL_Category}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product

  async getAllProductsSearch(search){
    const url = `${API_URL_ProductSearch}/search?search=${search}`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProducts() {
    const url = `${API_URL_Product}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductPages() {
    const url = `${API_URL_ProductPage}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductTops() {
    const url = `${API_URL_ProductTop}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductTops12() {
    const url = `${API_URL_ProductTop12}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductRelation() {
    const url = `${API_URL_ProductRelation}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductRelationId(id) {
    const url = `${API_URL_ProductRelation}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  async getAllProductPhotoId(id) {
    const url = `${API_URL_ProductPhoto}/index=${id}`;
    return axios.get(url);
  }
  async getAllProductsId(id) {
    const url = `${API_URL_Product}/index=${id}`;
    return axios.get(url);
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
  // request

  getRequests() {
    return axios.get(API_URL_Request);
  }

  createRequest(request) {
    return axios.post(API_URL_Request, request);
  }

  getRequestById(requestId) {
    return axios.get(API_URL_Request + '/index=' + requestId);
  }

  updateRequest(request, requestId) {
    return axios.put(API_URL_Request + '/' + requestId, request);
  }

  deleteRequest(requestId) {
    return axios.delete(API_URL_Request + '/' + requestId);
  }
  // area

  getAreas() {
    return axios.get(API_URL_Area).then(response=>response.data);
  }
  getAreasTop() {
    return axios.get(API_URL_AreaTop).then(response=>response.data);
  }
  createArea(area) {
    return axios.post(API_URL_Area, area);
  }

  getAreaById(areaId) {
    return axios.get(API_URL_Area + '/index=' + areaId);
  }

  updateArea(area, areaId) {
    return axios.put(API_URL_Area + '/' + areaId, area);
  }

  deleteArea(areaId) {
    return axios.delete(API_URL_Area + '/' + areaId);
  }
}

export default HomeServices;