/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-sequences */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import HomeServices from '../../../HomeServices/HomeServices';
import NumberFormat from 'react-number-format';
import { MapInteractionCSS } from 'react-map-interaction';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import Subcribe from '../../../Components/Subcribe/Subcribe';
import moment from 'moment';
import 'moment/locale/vi'
class ProductDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            product: {},
            photo: [],
            productrelation: [],
            image: [],
            value: {
                scale: 1,
                translation: { x: 0, y: 0 }
            },
            show:true,
          post:[],
          post1:[],
        };

        this.productService = new HomeServices();
        this.photoService = new HomeServices();
        this.productrelationService = new HomeServices();
        this.postService = new HomeServices();
        this.changeimage = this.changeimage.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
       
            this.postService.getAllPosts().then(response => {
                this.setState({ post: response });
            });
            this.postService.getAllPosts1().then(response => {
                this.setState({ post1: response });
            });
        this.productService.getAllProductsId(this.state.id).then((res) => {
            let product = res.data;
            this.setState({ photo: product.photo, image: product.image, product: res.data });
        });

        this.productrelationService.getAllProductRelationId(id).then(response => {
            this.setState({ productrelation: response });

        });

    }
    renderpost = () => {
        return this.state.post.map((post, key) => {
            moment.locale('vi');
            const dd = moment(post.createdatTimestamp).startOf('day').fromNow();
            return (
                <article class="media mb-3" key={key}>
                                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img class="img-sm mr-3" src={`/resources/images/posts/${post.imageString}`}/></a>
                                        <div class="media-body">
                                            <h6 class="mt-0" title={post.titleString}><a href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></h6>
                                            <p class="mb-2">{`${post.descriptionString.substring(0,115)}...`}</p>
                                        </div>
                                    </article>
            );
        });

    }
    renderpost1 = () => {
        if(this.state.id === this.state.post1.idLong)
        {
            return this.state.post1.map((post, key) => {
                moment.locale('vi');
                const dd = moment(post.createdatTimestamp).startOf('day').fromNow();
                return (
                  <div key={key}>
                        <h5><a href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></h5>
                        <p>{dd}</p>
                                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img width="100%" src={`/resources/images/posts/${post.imageString}`} /></a>
                                        
                  </div>
                );
            });
    
        }else
        {
            return this.state.post1.map((post, key) => {
                moment.locale('vi');
                const dd = moment(post.createdatTimestamp).startOf('day').fromNow();
                return (
                  <div key={key}>
                        <h5><a href={`/chi-tiet-bai-viet/index=${post.idLong}`}>{post.titleString}</a></h5>
                        <p>{dd}</p>
                                        <a href={`/chi-tiet-bai-viet/index=${post.idLong}`}><img width="100%" src={`/resources/images/posts/${post.imageString}`} /></a>
                                        
                  </div>
                );
            });
    
        }
       
    }
    changeimage(change) {
        this.setState({ image: change });
    }
    renderphoto = () => {
        return this.state.photo.map((photos, key) => {
            return (

                <img class="item-thumb" key={key} onClick={() => this.changeimage(photos.imageString)} src={`/resources/images/items/${photos.imageString}`} />


            );
        });
    }
    renderproductrelation = () => {
        return this.state.productrelation.map((product, key) => {
            moment.locale('vi');
            const dd = moment(product.createdatTimestamp).startOf('day').fromNow();
            return (
                <li class="col-6 col-lg-4 col-md-3" key={key}>
                    <a href={`/index=${product.idLong}`} class="item">
                        <div class="card-body">
                            <h5 class="title"style={{color:`#004e7f`}}>{product.titleString}</h5>
                            <img class="img-sm float-right" src={`/resources/images/items/${product.imageString}`} alt=""/>
                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i>{product.positionString}</p>
                            <div class="price mt-1 "style={{fontWeight:`bold`}} >{product.pricesaleDouble} <sup> . </sup> {product.areaString} m<sup>2</sup></div>
                            <div className="row">
                    <div class=" col-9">{dd}</div>
                    <div class="col-3" style={{fontSize:`22px`}}><a href={`/luu`} title="B???m ????? l??u tin" style={{color:`#004e7f`}}><i class="far fa-heart"></i></a></div>                    </div>
                        </div>
                    </a>
                </li>

            );
        });
    }
    
    render() {
        const product = this.state.product;
        const { scale, translation } = this.state;
        const dd = moment(product.createdatTimestamp).format("LLLL");
        const ddd = moment(product.createdatTimestamp).subtract(10, 'days').calendar();
        return (
            <div>
                <Header />
                <section class="py-3 bg-light">
                    <div class="container">
                        <ol class="breadcrumb">
                            <a href="/"><li class="breadcrumb-item">Trang-chu / </li></a>
                            <a href="/"><li class="breadcrumb-item active" aria-current="page"> {product.slugString}</li></a>
                        </ol>
                    </div>
                </section>

                {/* <!-- ========================= SECTION CONTENT ========================= --> */}
                <section class="section-content bg-white padding-y">
                    <div class="container">

                        {/* <!-- ============================ ITEM DETAIL ======================== --> */}
                        <div class="row">
                            <aside class="col-md-8">
                                <div class="card">
                                    <article class="gallery-wrap">
                                        <div class="img-big-wrap">
                                            <div>
                                                <a >
                                                    <MapInteractionCSS value={this.state.value}
                                                        onChange={(value) => this.setState({ value })}>


                                                        {this.state.image ?
                                                            <img src={"/resources/images/items/" + this.state.image} />

                                                            :
                                                            <img src={"/resources/images/items/" + product.imageString} />}
                                                    </MapInteractionCSS>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- slider-product.// --> */}
                                        <div class="thumbs-wrap">
                                            {this.renderphoto()}

                                        </div>
                                        {/* <!-- slider-nav.// --> */}
                                    </article>
                                    {/* <!-- gallery-wrap .end// --> */}
                                </div>
                                {/* <!-- card.// --> */}
                            </aside>
                            <main class="col-md-4">
                                <article class="product-info-aside border text-center">
                                <img src={"/resources/images/avatars/facebook.jpg"} width="70px" height="70px"style={{borderRadius:`20px 20px 20px 20px `}} />
                                    <h2 class="title mt-3">{product.customerString}</h2>  
                                    <br/>                            
                                  <div>
                                  <button class="btn btn-light" onClick={() => {navigator.clipboard.writeText(this.state.product.phoneString,this.setState({ show:!this.state.show}))} }>
                                  <a href={`tel:${product.phoneString}`}><i class="fas fa-phone"></i> <span class="text">{`${this.state.show ? `0********* `: product.phoneString} ${ this.state.show? 'Sao ch??p' : 'Hi???n s???'}`}</span></a>
                                             
                                            </button>
                                  </div>  <br/>         
                                  <div>
                                  <button class="btn btn-light">
                                                <a href={`mailto:${product.phoneString}`}><i class="fas fa-envelope"></i> <span class="text">G???i mail</span></a>
                                            </button>
                                  </div>  <br/>         
                
                                        <div>
                                        <button class="btn btn-light">
                                                <a  href={`/lien-he`}><i class="fas fa-envelope"></i> <span class="text">Li??n H??? v???i nh?? cung c???p</span></a>
                                            </button>
                                            </div>   
                                          
                                   
                                </article>
                               
                            </main>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}

                        {/* <!-- ================ ITEM DETAIL END .// ================= --> */}


                    </div>
                    {/* <!-- container .//  --> */}
                </section>
                {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}

                {/* <!-- ========================= SECTION  ========================= --> */}
                <section class="section-name padding-y bg">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-8">

<h1>{product.titleString}</h1>
<h6>{product.positionString}</h6>
<div className="label-rating"><i className="fas fa-history" style={{ color: `green` }}></i> {dd}</div>
<hr/>
<div className="mt-5 mb-5">
    <div className="row">
    <div class="price mt-1 col-3 "style={{fontWeight:`bold`}} > M???c Gi??: {product.pricesaleDouble} </div>
<div class="price mt-1 col-3"style={{fontWeight:`bold`}} > Di???n t??ch: {product.areaString} m<sup>2</sup> </div>
<div class="price mt-1 col-3 "style={{fontWeight:`bold`}} > <a href="" style={{color:`#004e7f`}} ><i class="fa fa-share"></i> Chia s??? </a> </div>
<div class="price mt-1 col-3"style={{fontWeight:`bold`}} ><a href="" style={{color:`#004e7f`}}><i class="far fa-heart"></i> L??u tin </a> </div>


    </div>

</div>
<hr/>
                                <h5 class="title-description"><a href="javascript:void(0)" title={product.descriptionString}>Th??ng tin m?? t???</a> <i className="far fa-hand-point-left ml-4" style={{ color: `green` }}> </i></h5>
                                <p>{product.descriptionString}</p>
                                <table class="table table-bordered">
                                    <tr> <th colspan="2">M?? </th> </tr>
                                    <tr> <td>M?? S???n Ph???m</td><td>{product.productidLong}</td> </tr>

                                    <tr> <th colspan="2">Khu v???c</th> </tr>
                                    <tr> <td>Khu V???c</td><td>{product.positionString}</td> </tr>
                                    <tr> <td>H?????ng</td><td>{product.directionString}</td> </tr>
                                    <tr> <td>?????a Ch???</td><td>{product.addressString}</td> </tr>
                                    <tr> <td>Di???n T??ch </td><td> {product.areaString} m<sup>2</sup></td> </tr>

                                    <tr> <th colspan="2">Th??ng Tin</th> </tr>
                                    <tr> <td>Ch??? ?????u T??</td><td>{product.customerString}</td> </tr>
                                    <tr> <td>??i???n Tho???i</td><td>{product.phoneString}</td> </tr>
                                    <tr> <td>T??nh Tr???ng</td> <td> <i class="fa fa-check text-success"></i> V???n c??n </td></tr>

                                    <tr> <th colspan="2">Ph??ng</th> </tr>
                                    <tr> <td>S??? Ph??ng</td><td>{product.roomInteger}</td> </tr>

                                </table>
                                <h5 class="title-description"><a href="javascript:void(0)" title={product.descriptionString}>?????c ??i???m b???t ?????ng s???n</a></h5>
 
<div  style={{border:`1px solid #ebedf0`}}>

    <div class="price mt-4 ml-2" > Lo???i b??i ????ng: {product.metakeyString} </div><br/>
<div class="price mb-4 ml-2" >?????a ch???: {product.positionString}  </div>

</div>
<h5 class="title-description"><a href="javascript:void(0)" title={product.descriptionString}>Xem tr??n b???n ?????</a></h5>
 <div>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3487508493586!2d105.7902835142451!3d21.018727193498165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAxJzA3LjQiTiAxMDXCsDQ3JzMyLjkiRQ!5e0!3m2!1sen!2s!4v1625501633715!5m2!1sen!2s" width="100%" height="300" style={{border:`0`}} allowfullscreen="" loading="lazy"></iframe>
     </div>
     <hr/>
<div className="mt-5 mb-5">
    <div className="row">
    <div class="price mt-1 col-2 " >Ng??y ????ng: {ddd} </div>
<div class="price mt-1 col-2"> Ng??y h???t h???n: v???n c??n  </div>
<div class="price mt-1 col-4">Lo???i tin: {product.metadescString} </div>
<div class="price mt-1 col-2">M?? tin: {product.productidLong} </div>
<div class="price mt-1 col-2"><a href=""><i class="fas fa-exclamation-triangle"></i> B??o c??o </a> </div>


    </div>

</div>
<hr/>
<p>Qu?? v??? ??ang xem n???i dung tin rao "{product.titleString}" - M?? tin {product.productidLong}. M???i th??ng tin, n???i dung li??n quan t???i tin rao n??y l?? do ng?????i ????ng tin ????ng t???i v?? ch???u tr??ch nhi???m. Batdongsan.com lu??n c??? g???ng ????? c??c th??ng tin ???????c h???u ??ch nh???t cho qu?? v??? tuy nhi??n Batdongsan.com kh??ng ?????m b???o v?? kh??ng ch???u tr??ch nhi???m v??? b???t k??? th??ng tin, n???i dung n??o li??n quan t???i tin rao n??y. Tr?????ng h???p ph??t hi???n n???i dung tin ????ng kh??ng ch??nh x??c, Qu?? v??? h??y th??ng b??o v?? cung c???p th??ng tin cho Ban qu???n tr??? Batdongsan.com theo Hotline 19001881 ????? ???????c h??? tr??? nhanh v?? k???p th???i nh???t.</p>
                            </div>
                            {/* <!-- col.// --> */}

                            <aside class="col-md-4">

                                <div class="box">

                                
                                  {this.renderpost1()}
                                  <br/>
                                    {this.renderpost()}
                                </div>
                                {/* <!-- box.// --> */}
                            </aside>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}
                        {/* <!-- =============== SECTION 1 =============== --> */}
                        <section class="padding-bottom">
                            <header class="section-heading heading-line">
                                <h4 class="title-section text-uppercase">S???N PH???M LI??N QUAN</h4>
                            </header>

                            <div class="card card-home-category">
                                <div class="row no-gutters">
                                    <div class="col-lg-12">
                                        <ul class="row no-gutters bordered-cols">
                                            {this.renderproductrelation()}
                                        </ul>
                                    </div>
                                    {/* <!-- col.// --> */}
                                </div>
                                {/* <!-- row.// --> */}
                            </div>
                            {/* <!-- card.// --> */}
                        </section>
                        {/* <!-- =============== SECTION 1 END =============== --> */}

                    </div>
                    {/* <!-- container .//  --> */}
                </section>
                {/* <!-- ========================= SECTION CONTENT END// ========================= --> */}
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default ProductDetailContainer;