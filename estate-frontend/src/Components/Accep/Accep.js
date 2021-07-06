/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Accep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
        this.handleShowYesNo = this.handleShowYesNo.bind(this);
    }
    handleShowYesNo() {

        this.setState({ show: false });

    }
    render() {
        return (
            <div>
                {

                    this.state.show === false
                        ?
                        <div class="box text-center white" style={{ backgroundColor: `green` }} >Cảm ơn bạn đã phản hồi !!!</div>
                        :
                        <div class="box text-center" >
                            <p>Bạn đã tìm thấy những gì bạn đang tìm kiếm?</p>
                            <a onClick={this.handleShowYesNo} href="javascript:void(0)" class="btn btn-light">Yes</a>
                            <a onClick={this.handleShowYesNo} href="javascript:void(0)" class="btn btn-light">No</a>
                        </div>
                }

            </div>
        );
    }
}

export default Accep;