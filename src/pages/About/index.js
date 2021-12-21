import React, { Component } from 'react';
import '../../assets/css/style.css';
import Navbar from '../../components/Navbar';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar tentang/>
                </div>

                <div style={{paddingTop:50}}>
                    <h2><u>Asnur Sport Center</u></h2>
                    <div style={{paddingLeft:150, paddingRight:150}} className='container'>
                        <p>
                            Asnur Sport Center adalah aplikasi admin untuk mengelola
                            kebutuhan akan data-data barang pada toko. 
                            Aplikasi ini juga dapat menginput transaksi yang disimpan 
                            sebagai laporan transaksi dan mencetaknya untuk arsip.
                        </p>
                    </div>

                    <p>Copyright by AsnurSport 2021</p>
                    <h3>Powered by AlvineCom</h3>
                </div>
            </div>
        );
    }
}

export default About;