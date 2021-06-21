
import { useEffect, useState } from 'react';
import { httpPostwithToken } from '../../../HttpConfig';
import { CartContextValue } from '../../../ContextProvider';
import { Link } from 'react-router-dom';
import HomeServices from '../../../HomeServices/HomeServices';
function Test() {
	// const [sign_in_up_model,setsignin_up_model] = useState('')
	// const[mobile,setMobile] = useState('');
	// const[password,setPassword] = useState('');
	// const[respassword,setRePassword] = useState('');
	const [categoryList, setCategoryList] = useState([]);
	const [productList, setProductList] = useState([]);
	const [cartData, dispatch] = CartContextValue();
	const categoryproductService = new HomeServices();
	useEffect(() => {
		//TODO check user login

		getCartApi()
	}, [])
	// const signUpApi=()=>{
	// 	if(mobile == ""){
	// 		alert("Mobile should not be empty");
	// 		return;
	// 	}else if(name == ""){
	// 		alert("Name should not be empty");
	// 		return;
	// 	}else if(email == ""){
	// 		alert("Email should not be empty");
	// 		return;
	// 	}else if(password == ""){
	// 		alert("password should not be empty");
	// 		return;
	// 	}else if(respassword == ""){
	// 		alert("Repassword should not be empty");
	// 		return;
	// 	}else if(password == respassword){
	// 		alert("Password and Repassword should be same");
	// 		return;
	// 	}
	// 	let jsonOBj ={ 
	// 			"name":name,
	// 			"mobile":mobile,
	// 			"password":password ,
	// 			"email":email
	// 		}

	// 	httpPost("signup/user",jsonOBj)
	// 	.then(res => res.json())
	// 	.then((res)=>{
	// 		if(res.hasOwnProperty('id')){
	// 			alert("Registration success.please sign in");
	// 			setMobile('');
	// 			setPassword('');
	// 			setRePassword("");
	// 			setEmail("")
	// 			setName('');
	// 			setsignin_up_model('sign-in')//hide the sign up model.
	// 		}else{
	// 			alert(res['message']);	
	// 		}

	// 		//console.log(res);

	// 	},error=>{
	// 		alert(error.message);
	// 	}
	// 	)
	// }
	const getCartApi = () => {
		categoryproductService.getCartToUser(1)
			
				.then(data => {
				
						dispatch({
							
							"data": data
						})
					alert("Successfully added..")
					
				
			}
			)
	}
	const addCartApi = (productObj) => {
		let obj = {
			"productId": productObj.id,
			"qty": "1",
			"price": productObj.price

		}
		categoryproductService.postCart(obj)
			.then((res) => {
				res.json().then(data => {
					if (res.ok) {
						dispatch({
							"type": "add_cart",
							"data": data
						})
						alert("Successfully added..")
					} else {
						alert(data.message)
					}
				})
			}).catch(function (res) {
				console.log("Error ", res);
				//alert(error.message);
			}
			)
	}

	const getProductsByCategory = () => {

		categoryproductService.getAllProducts()
			.then((res) => {

				if (res.ok) {
					if (res.length > 0) {
						setProductList(res)
					} else {
						alert("No product found..");
					}
				} else {
					setProductList([])
					alert("No product found..");
				}

			}
			)
	}
	
	return (
		<div>


			<div className="banner">
				<div className="container">
					<h3>Electronic Store, <span>Special Offers</span></h3>
				</div>
			</div>

			<div className="banner-bottom">
				<div className="container">
					<div className="col-md-5 wthree_banner_bottom_left">
						<div className="video-img">
							<a className="play-icon popup-with-zoom-anim" href="#small-dialog">
								<span className="glyphicon glyphicon-expand" aria-hidden="true"></span>
							</a>
						</div>
					</div>
					<div className="col-md-7 wthree_banner_bottom_right">

						{
							productList.map((product) => (

								<div className="col-md-4 agile_ecommerce_tab_left">
									<div className="hs-wrapper">
										<img src="../assets/images/3.jpg" alt=" " className="img-responsive" />
										<img src="../assets/images/4.jpg" alt=" " className="img-responsive" />

										<div className="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal">
														<span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5>
										<Link to={"/product/" + product.id}>{product.name}</Link>


									</h5>
									<h5><a onClick={() => addCartApi(product)} href="javascript:void(0)">Add Cart</a></h5>
									<div className="simpleCart_shelfItem">
										<p><i className="item_price">Rs.{product.price}</i></p>
									</div>
								</div>
							))
						}

					</div>
				</div>
			</div>

			<div className="newsletter">
				<div className="container">
					<div className="col-md-6 w3agile_newsletter_left">
						<h3>Newsletter</h3>
						<p>Excepteur sint occaecat cupidatat non proident, sunt.</p>
					</div>
					<div className="col-md-6 w3agile_newsletter_right">
						<form action="#" method="post">
							<input type="email" name="Email" placeholder="Email" required="" />
							<input type="submit" value="" />
						</form>
					</div>
					<div className="clearfix"> </div>
				</div>
			</div>
		</div>
	);
}

export default Test;
