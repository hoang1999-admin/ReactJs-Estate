import axios from 'axios';

const API_URL_PRODUCT = "http://localhost:8080/api/v1/productadmin";
const API_URL_CATEGORY = "http://localhost:8080/api/v1/categoryadmin";
const API_URL_PHOTO = "http://localhost:8080/api/v1/photoadmin";
const API_URL_CONTACT = "http://localhost:8080/api/v1/contactadmin";
const API_URL_EMAIL = "http://localhost:8080/api/v1/emailadmin";
const API_URL_SLIDER = "http://localhost:8080/api/v1/slideradmin";
const API_URL_REQUEST = "http://localhost:8080/api/v1/requestadmin";
const API_URL_USER = "http://localhost:8080/api/v1/useradmin";
const API_URL_USER_ROLE = "http://localhost:8080/api/v1/user_roleadmin";
const API_URL_ROLE = "http://localhost:8080/api/v1/roleadmin";
const API_URL_AREA = "http://localhost:8080/api/v1/areaadmin";
const API_URL_PRODUCTRELATION = "http://localhost:8080/api/v1/productrelationadmin";

class HomeServiceAdmin {

    // product

    getProducts(){
        return axios.get(API_URL_PRODUCT);
    }

    createProduct(product){
        return axios.post(API_URL_PRODUCT, product);
    }

    getProductById(productId){
        return axios.get(API_URL_PRODUCT + '/index=' + productId);
    }

    updateProduct(product, productId){
        return axios.put(API_URL_PRODUCT + '/index=' + productId, product);
    }

    deleteProduct(productId){
        return axios.delete(API_URL_PRODUCT + '/index=' +  productId);
    }
    
    
    // category

    getCategorys(){
        return axios.get(API_URL_CATEGORY);
    }

    createCategory(category){
        return axios.post(API_URL_CATEGORY, category);
    }

    getCategoryById(categoryId){
        return axios.get(API_URL_CATEGORY + '/index=' + categoryId);
    }

    updateCategory(category, categoryId){
        return axios.put(API_URL_CATEGORY + '/index=' + categoryId, category);
    }

    deleteCategory(categoryId){
        return axios.delete(API_URL_CATEGORY + '/index=' + categoryId);
    }

    
    // photo

    getPhotos(){
        return axios.get(API_URL_PHOTO);
    }

    createPhoto(photo){
        return axios.post(API_URL_PHOTO, photo);
    }

    getPhotoById(productId){
        return axios.get(API_URL_PHOTO + '/index=' + productId);
    }

    updatePhoto(photo, photoId){
        return axios.put(API_URL_PHOTO + '/index=' + photoId, photo);
    }

    deletePhoto(productId){
        return axios.delete(API_URL_PHOTO + '/index=' + productId);
    }

    
    // contact

    getContacts(){
        return axios.get(API_URL_CONTACT);
    }

    createContact(contact){
        return axios.post(API_URL_CONTACT, contact);
    }

    getContactById(contactId){
        return axios.get(API_URL_CONTACT + '/index=' + contactId);
    }

    updateContact(contact, contactId){
        return axios.put(API_URL_CONTACT + '/index=' + contactId, contact);
    }

    deleteContact(contactId){
        return axios.delete(API_URL_CONTACT + '/index=' + contactId);
    }

    
    // email

    getEmails(){
        return axios.get(API_URL_EMAIL);
    }

    createEmail(email){
        return axios.post(API_URL_EMAIL, email);
    }

    getEmailById(emailId){
        return axios.get(API_URL_EMAIL + '/index=' + emailId);
    }

    updateEmail(email, emailId){
        return axios.put(API_URL_EMAIL + '/index=' + emailId, email);
    }

    deleteEmail(emailId){
        return axios.delete(API_URL_EMAIL + '/index=' + emailId);
    }

    
    // slider

    getSliders(){
        return axios.get(API_URL_SLIDER);
    }

    createSlider(slider){
        return axios.post(API_URL_SLIDER, slider);
    }

    getSliderById(sliderId){
        return axios.get(API_URL_SLIDER + '/index=' + sliderId);
    }

    updateSlider(slider, sliderId){
        return axios.put(API_URL_SLIDER + '/index=' + sliderId, slider);
    }

    deleteSlider(sliderId){
        return axios.delete(API_URL_SLIDER + '/index=' + sliderId);
    }

    
    // request

    getRequests(){
        return axios.get(API_URL_REQUEST);
    }

    createRequest(request){
        return axios.post(API_URL_REQUEST, request);
    }

    getRequestById(requestId){
        return axios.get(API_URL_REQUEST + '/index=' + requestId);
    }

    updateRequest(request, requestId){
        return axios.put(API_URL_REQUEST + '/index=' + requestId, request);
    }

    deleteRequest(requestId){
        return axios.delete(API_URL_REQUEST + '/index=' + requestId);
    }

    
    // user

    getUsers(){
        return axios.get(API_URL_USER);
    }

    createUser(user){
        return axios.post(API_URL_USER, user);
    }

    getUserById(userId){
        return axios.get(API_URL_USER + '/index=' + userId);
    }

    updateUser(user, userId){
        return axios.put(API_URL_USER + '/index=' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(API_URL_USER + '/index=' + userId);
    }


     // user_role

     getUserRoles(){
        return axios.get(API_URL_USER_ROLE);
    }

    createUserRole(userrole){
        return axios.post(API_URL_USER_ROLE, userrole);
    }

    getUserRoleById(userroleId){
        return axios.get(API_URL_USER_ROLE + '/index=' + userroleId);
    }

    updateUserRole(userrole, userroleId){
        return axios.put(API_URL_USER_ROLE + '/index=' + userroleId, userrole);
    }

    deleteUserRole(userroleId){
        return axios.delete(API_URL_USER_ROLE + '/index=' + userroleId);
    }


    // role

    getRoles(){
        return axios.get(API_URL_ROLE);
    }

    createRole(role){
        return axios.post(API_URL_ROLE, role);
    }

    getRoleById(roleId){
        return axios.get(API_URL_ROLE + '/index=' + roleId);
    }

    updateRole(role, roleId){
        return axios.put(API_URL_ROLE + '/index=' + roleId, role);
    }

    deleteRole(roleId){
        return axios.delete(API_URL_ROLE + '/index=' + roleId);
    }

    
    // area

    getAreas(){
        return axios.get(API_URL_AREA);
    }

    createArea(area){
        return axios.post(API_URL_AREA, area);
    }

    getAreaById(areaId){
        return axios.get(API_URL_AREA + '/index=' + areaId);
    }

    updateArea(area, areaId){
        return axios.put(API_URL_AREA + '/index=' + areaId, area);
    }

    deleteArea(areaId){
        return axios.delete(API_URL_AREA + '/index=' + areaId);
    }

    
    // product relation

    getProductRelations(){
        return axios.get(API_URL_PRODUCTRELATION);
    }

    createProductRelation(productrelation){
        return axios.post(API_URL_PRODUCTRELATION, productrelation);
    }

    getProductRelationById(productrelationId){
        return axios.get(API_URL_PRODUCTRELATION + '/index=' + productrelationId);
    }

    updateProductRelation(productrelation, productrelationId){
        return axios.put(API_URL_PRODUCTRELATION + '/index=' + productrelationId, productrelation);
    }

    deleteProductRelation(productrelationId){
        return axios.delete(API_URL_PRODUCTRELATION+ '/index=' + productrelationId);
    }

    
}

export default HomeServiceAdmin;