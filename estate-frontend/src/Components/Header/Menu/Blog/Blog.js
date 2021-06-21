import React, { Component } from 'react';
import HomeServices from '../../../../HomeServices/HomeServices';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import Subcribe from '../../../../Components/Subcribe/Subcribe';
class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {},

        };

        this.categoryService = new HomeServices();
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.categoryService.getAllCategorysId(id).then((res) => {
            this.setState({ category: res });
        });

    }
    render() {
        const category = this.state.category;
        return (
            <div>
                <Header />
                <div class="container">
                    <ol class="breadcrumb py-3 ">
                        <a href="/"><li class="breadcrumb-item"><a href="#">Trang-chu </a></li></a>
                        <a href="/"><li class="breadcrumb-item active" aria-current="page"> / tin-tuc</li></a>
                        <a href="/"><li class="breadcrumb-item active" aria-current="page"> / {category.slugString}</li></a>
                        <a href="/"><li class="breadcrumb-item active" aria-current="page"> / Căn hộ cho người trẻ Phú Đông Premier: nhu cầu mua gấp đôi số bán</li></a>

                    </ol>
                </div>
                <div>
                    <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Tin tức</button>
                </div>
                <div>
                    <h1>Căn hộ cho người trẻ Phú Đông Premier: nhu cầu mua gấp đôi số bán</h1>
                    <h5>Công bố: 21/01/2021 | 4:11 Chiều cập nhật: 30/01/2021 | 11:22 Sáng</h5>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/gallery05-large-9527-1570858684.jpg`} />

                        <br /><br /><p >Chủ đầu tư cung ứng 414 căn hộ hướng đến các gia đình trẻ trong đợt mở bán đầu tiên, nhưng có hơn 800 lượt đặt mua.</p>
                        <h2>Vị trí thuận lợi</h2>
                        <p>Dự án Phú Đông Premier nằm tại phường An Bình, thị xã Dĩ An, tỉnh Bình Dương,
                            giáp ranh khu Đông Bắc của TP HCM, chỉ cách chợ Thủ Đức khoảng 1km.
                            Từ đây còn có thể tiếp cận nhanh chóng sân bay Tân Sơn Nhất và trung
                            tâm TP HCM qua Đại lộ Phạm Văn Đồng 12 làn xe.</p>
                        <p>Ông Ngô Quang Phúc – CEO Phú Đông Group nhìn nhận sự phát triển của các cụm khu công nghiệp
                            như Sóng Thần, Bình Đường… đã góp phần hình thành những khu dân cư sầm uất, thương mại nhộn nhịp
                            tại khu vực giáp ranh Sài Gòn này. Những công trình chung cư mọc bắt đầu xuất hiện ngày càng nhiều,
                            giải quyết nhu cầu nhà ở cho công nhân, giới chuyên gia. Đánh giá cao tiềm năng tăng trưởng,
                            Phú Đông Group đã chọn phường An Bình làm nơi xây dựng hai dự án chung cư hướng đến giới trẻ.
                            Trong đó Him Lam Phú Đông đã bàn giao vào cuối 2017 và Phú Đông
                            Premier gần cất nóc, dự kiến đón cư dân vào tháng 6/2020.</p>
                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/gallery05-large-9527-1570858684.jpg`} />
                        <br /><br /> <p>Khảo sát của chủ đầu tư cho thấy lượng khách hàng trẻ sống ở TP HCM chọn
                            mua nhà tại hai dự án cũng rất khả quan. Lợi thế vị trí, mức giá “mềm”
                            và chất lượng xây dựng là ba yếu tố chính giúp hai dự án hấp thụ tốt
                            với mãi lực gần 100% trong các buổi mở bán. Dù hướng đến đối tượng khách
                            hàng trẻ, người lần đầu sở hữu nhà, nhưng chủ đầu tư vẫn đưa ra các yêu cầu
                            khắt khe để nâng cấp không gian nhà ở, chất lượng công trình…</p>
                        <p>“Các bạn trẻ có thể chưa có tích lũy nhiều nhưng họ chọn mua nhà rất khắt khe và tinh tế,
                            cập nhật nhanh xu hướng. Ngôi nhà với họ không đơn thuần chỉ để ở nên chúng tôi kiến tạo
                            một không gian sống hiện đại, đầy đủ tiện ích,
                            thuận tiện cho cả nhu cầu sinh hoạt và làm việc”, ông Phúc phân tích.</p>

                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/Quote-03-8121-1571039354.jpg`} />
                        <br /><br />
                        <h2>Đảm bảo chất lượng thi công</h2>
                        <p>Nguyên tắc chính trong phát triển dự án của Phú Đông ngay từ khi đặt bút lên kế hoạch các dự án,
                            chính là đảm bảo chất lượng công trình. Dự án bàn giao cho người mua đúng theo cam kết ban đầu.
                            Kết cấu và bố trí mặt bằng căn hộ hướng về trải nghiệm của người ở, thay vì giúp chủ đầu tư tối
                            ưu số lượng sản phẩm trên một sàn. Cùng với đó các trang thiết bị trong ngôi nhà và tiện ích sinh
                            hoạt chung đáp ứng thời gian sử dụng lâu dài,
                            ngày một nâng cấp theo xu hướng mới và nhu cầu của cư dân.</p>
                        <p>Trong hơn 39 năm qua, hoạt động chính tạo niềm tin của Phú Đông Group trên thị trường là
                            lĩnh vực thi công xây dựng. Trong số 14 công ty thành viên và công ty liên kết của hệ thống
                            có đến 9 công ty chuyên về xây dựng, trong đó 5 công ty đạt chứng chỉ xây dựng công trình cấp 1.
                            Hệ thống Phú Đông Group đồng thời là đối tác chiến lược của các tập đoàn lớn,
                            triển khai nhiều dự án hạ tầng và nhà ở dân dụng trên khắp cả nước.</p>
                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/tiendoduanPhuDongPremier03-5288-1570858685.jpg`} />
                        <br /><br />
                        <p className="text-center">Dự án Phú Đông Premier cất nóc trong tháng 10.</p>
                        <p>Phú Đông Group nắm bắt rõ tâm lý người mua nhà, luôn có nhiều lo lắng về quá trình thi công,
                            chất lượng nhà ở khi nhận bàn giao, nhất là những người trẻ mua căn nhà đầu tiên. Vì vậy với vai
                            trò chủ đầu tư, doanh nghiệp đặt mục tiêu phải giải đáp các thắc mắc, lo lắng của khách hàng bằng
                            những trải nghiệm thực tế, hình ảnh trực quan. Cụ thể trong bốn năm qua, tại hai dự án Him Lam Phú
                            Đông và Phú Đông Premier, doanh nghiệp thường xuyên tổ chức các hoạt động để người mua trực tiếp
                            giám sát tiến độ,
                            quá trình thi công, hoàn thiện căn hộ.</p>
                        <p>
                            Đơn cử, người mua nhà sẽ được tham gia các buổi tham quan thực tế công trường dự án vào
                            các sáng thứ Bảy mỗi tuần. Ngay tại sự kiện này sẽ có đội ngũ kỹ sư, ban quản lý của dự án hỗ trợ,
                            trao đổi trực tiếp và sẵn sàng giải đáp các thông tin liên quan đến công trường thi công đến khách
                            hàng tham gia. Hay ngay đầu tháng 10 vừa qua, chủ đầu tư triển khai chương trình giới thiệu và
                            tham quan căn hộ thật tại công trình dự án Phú Đông Premier.
                        </p>
                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/FI0-9481-3168-1571039355.jpg`} />
                        <br /><br />
                        <p>Thông thường, các doanh nghiệp khi bán căn hộ sẽ xây dựng các nhà mẫu, tức căn hộ nằm tách biệt khỏi các dự án, chủ yếu để người mua hiểu về kiến trúc, bố trí không gian và một số tiêu chuẩn bàn giao về nội thất, vật liệu. Trong khi đó, ngoài căn hộ mẫu của Phú Đông Group đã giới thiệu khi bắt đầu bán hàng, hiện nay công ty còn làm thêm căn hộ thật nằm ngay trong công trình đang thi công. Đây chính là ngôi nhà thực tế sẽ bàn giao trong tương lai. Chất lượng căn hộ này cũng chính là tiêu chuẩn không gian sống thực của khách hàng.</p>
                        <p>Vào mỗi tuần, khách hàng đã sở hữu căn hộ tại dự án Phú Đông Premier được quyền đăng ký tham quan căn hộ thật, với trang phục bảo hộ và hướng dẫn bởi các chuyên gia kỹ thuật. Sát cạnh căn hộ thật là hai căn hộ hoàn thiện thô, giúp khách hàng nhìn rõ chất lượng hoàn thiện từng chi tiết như kết cấu, đường đi của hệ thống M&E…</p>
                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/Quote-01-1273-1571039356.jpg`} />
                        <br /><br />
                        <h2>Căn hộ thiết kế hiện đại</h2>

                        <p>Không chỉ giúp cư dân hiểu rõ hơn về quá trình thi công, thông qua căn hộ thật, Phú Đông Group còn thể hiện những nâng cấp về tiêu chuẩn hoàn thiện.</p>
                        <p>“Trong quá trình xây dựng, chúng tôi luôn nghiên cứu mang vào sản phẩm những cái mới, cải tiến không ngừng để sản phẩm ngày càng tốt hơn “, ông Phúc nhấn mạnh.</p>
                        <p>Cụ thể so với dự án trước, tại Phú Đông Premier hệ thống bếp và hút mùi dùng sản phẩm nhãn hiệu Hafele của Đức. Tiếp đến cửa chính bằng gỗ MDF được doanh nghiệp đổi sang cửa thép vân gỗ có khả năng chống cháy. Các cửa phòng cũng chuyển qua nhựa ABS cho độ bền gấp nhiều lần. Hệ thống nhôm kính trang bị những sản phẩm cao cấp, có chất lượng tốt hơn. Các thiết bị điện (công tắc, ổ cắm…) được dùng thương hiệu Panasonic.

                        </p>
                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/FI0-9326-7419-1571039356.jpg`} />
                        <br /><br />

                        <p>Thay đổi quan trọng khác là thiết kế tối đa các khe gió, giếng trời để dẫn gió tươi vào tất cả các phòng trong căn hộ, kể cả khu vực vệ sinh. Mỗi căn hộ đều có ban công, sân phơi . Chủ đầu tư còn điều chỉnh về các tiện ích nội khu cao cấp như đưa vào vận hành hồ bơi nước ấm, landscape, sky lounge…</p>
                        <p>Những thay đổi này là kết quả từ quá trình đội ngũ nhân sự công ty tiếp xúc trực tiếp với khách hàng trẻ, lắng nghe và thấu hiểu những mong muốn của họ, sau đó nghiên cứu chi tiết rồi mới triển khai. Chẳng hạn trước khi đổi hệ cửa MDF, ông Phúc cho đặt các loại cửa thép, cửa nhựa ngoài trời suốt nhiều tháng. Thiết bị bếp Hafele cũng được tính toán, đo lường về độ bền, an toàn, khả năng tiết kiệm điện năng.</p>
                        <p>“Các phương án bổ sung trang thiết bị, thiết kế này khiến gia tăng chi phí, ảnh hưởng phần nào đến lợi nhuận nhưng chúng tôi vẫn làm. Quan điểm của Phú Đông là phải thay đổi, sáng tạo không ngừng để đáp ứng nhu cầu và sự hài lòng của người trẻ ở căn hộ”, CEO Phú Đông Group nhấn mạnh.</p>
                        <h2>Hoàn tiền cho khách hàng</h2>

                        <p>Tầm nhìn và chiến lược của Phú Đông Group riêng về mảng bất động sản là 80% nguồn lực sẽ được tập trung làm nhà cho giới trẻ. Do đó bên cạnh việc đảm bảo tiêu chuẩn thi công và cải tiến căn hộ thì bài toán tài chính cho khách hàng cũng được điều chỉnh phù hợp với thu nhập và tích lũy của nhóm khách hàng này. Điều này không chỉ thể hiện qua Him Lam Phú Đông và Phú Đông Premier mà còn tiếp nối đến ba dự án tiếp theo triển khai trong tương lai gần của doanh nghiệp.</p>
                        <p>Đầu tiên là việc duy trì mặt bằng giá cho các sản phẩm. Các dự án kế tiếp của Phú Đông vẫn giải quyết hai yêu cầu cơ bản của người trẻ là mua được căn hộ hai phòng ngủ với 1,5 đến 2 tỷ đồng hoặc mức 2 tỷ đồng vẫn sở hữu được căn hộ ba phòng ngủ.</p>
                        <p>Vào quý I/2020, lần đầu tiên Phú Đông sẽ giới thiệu dòng sản phẩm Pentstudio – căn hộ 65m2 nhưng có ba phòng ngủ, có không gian sử dụng lên đến 100m2.</p>
                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/FI0-9458-7359-1571107088.jpg`} />
                        <br /><br />
                        <p>Mặt bằng giá tốt cũng khiến người trẻ mua nhà để ở ngoài ra cũng còn là kênh đầu tư sinh lợi hiệu quả.</p>
                        <p>Thống kê của đơn vị cho thấy, mỗi tuần có trung bình có ít nhất 3 căn hộ Phú Đông Premier được chuyển nhượng, có tuần đến 10 căn với mức chênh lệnh cao. Trong chính sách bán hàng của Phú Đông Group bao gồm cả cam kết là chủ đầu tư sẽ trả lại tiền kèm lãi suất nếu cư dân không hài lòng về sản phẩm khi nhận nhà.</p>

                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/Quote-02-5370-1571039359.jpg`} />
                        <br /><br />
                        <p>“Chúng tôi cam kết thực hiện chính sách này bởi chúng tôi tin vào chất lượng sản phẩm và khả năng gia tăng giá trị của mỗi sản phẩm mang thương hiệu Phú Đông”, ông Phúc khẳng định.</p>

                        <img style={{ height: `600px` }, { width: `1000px` }} src={`/resources/images/posts/Footer-2929-1571039359.jpg`} />
                        <br /><br />
                        <div>
                            <p>Lượt xem: 858</p>
                        </div><br />
                        <div>
                            <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Dự án</button>

                            <button style={{ height: `20px` }, { textSize: "5px" }, { borderRadius: `10px 10px 10px 10px` }} className="bg-light">Thông tin căn hộ</button>
                        </div><hr />

                    </div>
                    <div className="col-lg-3">
                        <input type="text" placeholder="tìm kiếm" style={{ width: `320px` }} /><br />
                        <p>Chuyên mục</p>
                        <ul>
                            <li>
                                <a href="#"> <p>Nhà đẹp</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Phong thủy nhà đất</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Rao vặt</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Thông tin dự án</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Thông tin kinh tế</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Thông tin quy hoạch</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Thông tin tịnh trường</p></a>
                            </li>
                        </ul>
                        <p>Video clips cập nhật</p>
                        <img style={{ height: `400px` }, { width: `320px` }} src={`/resources/images/posts/thiet-ke-website-cong-ty-bat-dong-san-bytesoft.gif`} alt="This is an animated gif image, but it does not move" />
                        <br />
                        <br />
                        <p>Tin tức mới nhất</p>
                        <ul>
                            <li>
                                <a href="#"> <p>5 lời khuyên của chuyên gia giúp nhà đầu tư “sống khỏe” mùa Covid</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Doanh thu đầu tư nhà cho thuê lao dốc</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Làm mới không gian phòng ngủ lúc giao mùa</p></a>
                            </li>
                            <li>
                                <a href="#"><p>4 áp lực đè nặng thị trường bất động sản mùa đại dịch</p></a>
                            </li>
                            <li>
                                <a href="#"><p>Căn hộ duplex Ricca giúp gia chủ khẳng định phong cách riêng</p></a>
                            </li>

                        </ul>
                        <br />
                        <p>Video clips cập nhật</p>
                        <img style={{ height: `400px` }, { width: `320px` }} src={`/resources/images/posts/0852f3c0cd10bec6ea5faa408006d588.gif`} alt="This is an animated gif image, but it does not move" />
                    </div>
                </div>
                <Subcribe />
                <Footer />
            </div>
        );
    }
}

export default Blog;