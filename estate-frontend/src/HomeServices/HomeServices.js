import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com";
const API_URL_Category = "http://localhost:8080/api/v1/category";
const API_URL_Product = "http://localhost:8080/api/v1/product";
const API_URL_ProductSale = "http://localhost:8080/api/v1/productsale";
const API_URL_ProductRent = "http://localhost:8080/api/v1/productrent";
const API_URL_ProductDeal = "http://localhost:8080/api/v1/productdeal";
const API_URL_Photo = "http://localhost:8080/api/v1/photo";
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
  async getAllCategorys()
  {
    const url = `${API_URL_Category}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllCategorysId(id)
  {
    const url =`${API_URL_Category}/loai-san-pham/${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product
  async getAllProducts()
  {
    const url = `${API_URL_Product}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllProductsId(id)
  {
    const url =`${API_URL_Product}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product deal
  async getAllProductsDeal()
  {
    const url = `${API_URL_ProductDeal}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllProductsDealId(id)
  {
    const url =`${API_URL_ProductDeal}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product sale
  async getAllProductsSale()
  {
    const url = `${API_URL_ProductSale}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllProductsSaleId(id)
  {
    const url =`${API_URL_ProductSale}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
  // product rent
  async getAllProductsRent()
  {
    const url = `${API_URL_ProductRent}/`;
    return axios.get(url).then(response => response.data);
  }

  async getAllProductsRentId(id)
  {
    const url =`${API_URL_ProductRent}/index=${id}`;
    return axios.get(url).then(response => response.data);
  }
   // photo
   async getAllPhotos()
   {
     const url = `${API_URL_Photo}/`;
     return axios.get(url).then(response => response.data);
   }
 
   async getAllPhotosId(id)
   {
     const url =`${API_URL_Photo}/index=${id}`;
     return axios.get(url).then(response => response.data);
   }
}

export default HomeServices;