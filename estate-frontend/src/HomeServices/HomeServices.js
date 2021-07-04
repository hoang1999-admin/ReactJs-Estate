import axios from "axios";
import authHeader from "../HomeServices/Author/Auth-Header";

const API_URL_Category = "http://localhost:8080/api/v1/category";
const API_URL_CategorySaleAndRent = "http://localhost:8080/api/v1/categorysaleandrent";
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

const API_URL = "http://localhost:8080/api/v1/cart/";

const API_URL_Blog = "http://localhost:8080/api/v1/blogs";

const API_URL_Post = "http://localhost:8080/api/v1/posts";
const API_URL_Post1 = "http://localhost:8080/api/v1/posts1";
const API_URL_Post2 = "http://localhost:8080/api/v1/posts2";
const API_URL_Post3 = "http://localhost:8080/api/v1/posts3";
const API_URL_Post4 = "http://localhost:8080/api/v1/posts4";
const API_URL_Post5 = "http://localhost:8080/api/v1/posts5";
const API_URL_Post6 = "http://localhost:8080/api/v1/posts6";
const API_URL_Post8 = "http://localhost:8080/api/v1/posts8";


const API_URL_Page = "http://localhost:8080/api/v1/pages";
const API_URL_Page1 = "http://localhost:8080/api/v1/pages1";
const API_URL_Page2 = "http://localhost:8080/api/v1/pages2";
const API_URL_Page3 = "http://localhost:8080/api/v1/pages3";
const API_URL_Page4 = "http://localhost:8080/api/v1/pages4";
const API_URL_Page5 = "http://localhost:8080/api/v1/pages5";
const API_URL_Page6 = "http://localhost:8080/api/v1/pages6";
const API_URL_Page7 = "http://localhost:8080/api/v1/pages7";

class HomeServices {

  // category
  async getAllCategorys() {
    const url = `${API_URL_Category}/`;
    return axios.get(url).then(response => response.data);
  }
  async getAllCategorySalesAndRent() {
    const url = `${API_URL_CategorySaleAndRent}/`;
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
  // blog
  async getAllBlogs() {
    const url = `${API_URL_Blog}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllBlogsId(id) {
    const url = `${API_URL_Blog}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post
  async getAllPosts() {
    const url = `${API_URL_Post}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPostsId(id) {
    const url = `${API_URL_Post}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post1
  async getAllPosts1() {
    const url = `${API_URL_Post1}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPosts1Id(id) {
    const url = `${API_URL_Post1}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post2
  async getAllPosts2() {
    const url = `${API_URL_Post2}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPosts2Id(id) {
    const url = `${API_URL_Post2}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post3
  async getAllPosts3() {
    const url = `${API_URL_Post3}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPosts3Id(id) {
    const url = `${API_URL_Post3}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post4
  async getAllPosts4() {
    const url = `${API_URL_Post4}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPosts4Id(id) {
    const url = `${API_URL_Post4}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post5
  async getAllPosts5() {
    const url = `${API_URL_Post5}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPosts5Id(id) {
    const url = `${API_URL_Post5}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post6
  async getAllPosts6() {
    const url = `${API_URL_Post6}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPosts6Id(id) {
    const url = `${API_URL_Post6}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // post8
  async getAllPosts8() {
    const url = `${API_URL_Post8}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPosts8Id(id) {
    const url = `${API_URL_Post8}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // page
  async getAllPages() {
    const url = `${API_URL_Page}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPagesId(id) {
    const url = `${API_URL_Page}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // page1
  async getAllPages1() {
    const url = `${API_URL_Page1}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPages1Id(id) {
    const url = `${API_URL_Page1}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // page2
  async getAllPages2() {
    const url = `${API_URL_Page2}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPages2Id(id) {
    const url = `${API_URL_Page2}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // page3
  async getAllPages3() {
    const url = `${API_URL_Page3}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPages3Id(id) {
    const url = `${API_URL_Page3}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // page4
  async getAllPages4() {
    const url = `${API_URL_Page4}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPages4Id(id) {
    const url = `${API_URL_Page4}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // page5
  async getAllPages5() {
    const url = `${API_URL_Page5}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPages5Id(id) {
    const url = `${API_URL_Page5}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // page6
  async getAllPages6() {
    const url = `${API_URL_Page6}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllPages6Id(id) {
    const url = `${API_URL_Page6}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
// page7
async getAllPages7() {
  const url = `${API_URL_Page7}/`;
  return axios.get(url).then(response => response.data);
}

async getAllPages7Id(id) {
  const url = `${API_URL_Page7}/index=${id}`;
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
  // cart
  postCart(cart) {
    return axios.get(API_URL + "addProduct", { headers: authHeader() },cart);
  }

  putCart(cart,cartid) {
    return axios.get(API_URL + "updateProduct", { headers: authHeader() },cart,cartid);
  }

  DeleteCart(cartid) {
    return axios.get(API_URL + "deleteProduct", { headers: authHeader() },cartid);
  }
  getCartToUser(userid) {
    return axios.get(API_URL + "getCartsByUserId", { headers: authHeader() },userid);
  }
}

export default HomeServices;