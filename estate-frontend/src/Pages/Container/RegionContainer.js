import React, { Component } from 'react';

class RegionContainer extends Component {
    render() {
        return (
            //   {/* <!-- =============== SECTION REGION =============== --> */}
            <section class="padding-bottom">

                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">CHỌN KHU VỰC</h4>
                </header>

                <ul class="row mt-4">
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/CN.png" /> <span>Trung Quốc</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/DE.png" /> <span>Đức</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/AU.png" /> <span>Úc</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/RU.png" /> <span>Nga</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/IN.png" /> <span>Ấn Độ</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/GB.png" /> <span>Anh</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/TR.png" /> <span>Turkey</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="/resources/images/icons/flags/UZ.png" /> <span>Uzbekistan</span> </a></li>
                    <li class="col-md col-6"><a href="#" class="icontext"> <i class="mr-3 fa fa-ellipsis-h"></i> <span>Các khu vực khác</span> </a></li>
                </ul>
            </section>
            // {/* <!-- =============== SECTION REGION .//END =============== --> */}

        );
    }
}

export default RegionContainer;