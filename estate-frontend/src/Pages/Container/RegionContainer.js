import React, { Component } from 'react';
import HomeServices from '../../HomeServices/HomeServices';

class RegionContainer extends Component {
    constructor() {
        super();
        this.state = {
            area: []
        };

        this.areaService = new HomeServices();
    }

    componentDidMount() {
        this.areaService.getAreasTop().then(response => {
            this.setState({ area: response });
        });
    }

    renderareas = () => {
        return this.state.area.map((areas, key) => {
            return (
                <li class="col-md col-6" key={key}>
                    <a href="#" class="icontext">
                        <img class="icon-flag-sm" src={`/resources/images/icons/flags/${areas.imageString}`} />
                        <span>{areas.titleString}</span>
                    </a>
                </li>

            );
        });
    };

    render() {
        return (
            //   {/* <!-- =============== SECTION REGION =============== --> */}
            <section class="padding-bottom">

                <header class="section-heading heading-line">
                    <h4 class="title-section text-uppercase">CHỌN KHU VỰC</h4>
                </header>

                <ul class="row mt-4">
                    {this.renderareas()}
                    <li class="col-md col-6">
                        <a href="#" class="icontext">
                            <i class="mr-3 fa fa-ellipsis-h"></i>
                            <span>Các khu vực khác</span>
                        </a>
                    </li>
                </ul>
            </section>
            // {/* <!-- =============== SECTION REGION .//END =============== --> */}

        );
    }
}

export default RegionContainer;