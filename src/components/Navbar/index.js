import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">AsnurSport</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a className={`nav-link ` + (this.props.beranda ? 'active' : '')} aria-current="page" href="#">Beranda</a>
                                </li>

                                <li class="nav-item">
                                    <a className={`nav-link ` + (this.props.transaksi ? 'active' : '')} href="#">Transaksi Baru</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a className={`nav-link dropdown-toggle ` + (this.props.master ? 'active' : '')} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Data Master
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Data Barang</a></li>
                                        <li><a class="dropdown-item" href="#">Data Akun</a></li>
                                        {/* <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a className={`nav-link dropdown-toggle ` + (this.props.laporan ? 'active' : '')} href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Laporan
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        <li><a class="dropdown-item" href="#">Laporan Data Barang</a></li>
                                        <li><a class="dropdown-item" href="#">Laporan Transaksi</a></li>
                                        {/* <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a className={`nav-link ` + (this.props.tentang ? 'active' : '')} href="#">Tentang</a>
                                </li>
                            </ul>
                            <div class="d-flex">
                                <a className='nav-link' style={{color:'black'}} href='#'>Logout</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;