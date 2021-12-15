import React, { Component } from 'react';
import '../../assets/css/style.css';
import Navbar from '../../components/Navbar';

class Data_Barang extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar master />
                </div>

                <div>
                    <div className='container'>
                        <div className=''>
                            {/* Table Transaksi */}
                            <div style={{ paddingTop: 50 }}>
                                <div style={{ paddingBottom: 20, float: 'left' }}>
                                    <a className='btn btn-primary'>Buat Data Barang</a>
                                </div>

                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Kode Barang</th>
                                            <th scope="col">Nama Barang</th>
                                            <th scope="col">Jumlah</th>
                                            <th scope="col">Tipe</th>
                                            <th scope="col">Harga Beli</th>
                                            <th scope="col">Harga Jual</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>B001</td>
                                            <td>Yonex Series K100</td>
                                            <td>25</td>
                                            <td>Raket</td>
                                            <td>Rp 250.000</td>
                                            <td>Rp 350.000</td>
                                            <td>Available</td>
                                            <td>
                                                <a className='btn btn-secondary' style={{ marginBottom: 10 }}>Ubah</a><br />
                                                <a className='btn btn-danger'>Hapus</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>B002</td>
                                            <td>Yonex Series K200</td>
                                            <td>25</td>
                                            <td>Raket</td>
                                            <td>Rp 270.000</td>
                                            <td>Rp 380.000</td>
                                            <td>Available</td>
                                            <td>
                                                <a className='btn btn-secondary' style={{ marginBottom: 10 }}>Ubah</a><br />
                                                <a className='btn btn-danger'>Hapus</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Data_Barang;