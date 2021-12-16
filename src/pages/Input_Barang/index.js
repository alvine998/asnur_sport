import React, { Component } from 'react';
import '../../assets/css/style.css';
import Navbar from '../../components/Navbar';

class Input_Barang extends Component {
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
                    <div className='container' style={{ paddingTop: 20 }}>
                        <h2><u>Input Data Barang</u></h2>
                        <div className='box-input-barang'>
                            <form className='form'>
                                <div className='row'>
                                    <div className='col-2'>
                                        <h5>Nama Barang : </h5>
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' type={"text"} placeholder='Ketik disini ...' />
                                    </div>
                                </div>

                                <div className='row' style={{marginTop:30}}>
                                    <div className='col-2'>
                                        <h5>Jumlah Barang : </h5>
                                    </div>
                                    <div className='col'>
                                        <input className='form-control form-jumlah' type={"number"} placeholder='0' />
                                    </div>
                                </div>

                                <div className='row' style={{marginTop:30}}>
                                    <div className='col-2'>
                                        <h5>Tipe Barang : </h5>
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' type={"text"} placeholder='Ketik disini ...' />
                                    </div>
                                </div>

                                <div className='row' style={{marginTop:30}}>
                                    <div className='col-2'>
                                        <h5>Harga Beli : </h5>
                                    </div>
                                    <div className='col'>
                                        <input className='form-control form-harga' type={"number"} placeholder='0' />
                                    </div>
                                </div>

                                <div className='row' style={{marginTop:30}}>
                                    <div className='col-2'>
                                        <h5>Harga Jual : </h5>
                                    </div>
                                    <div className='col'>
                                        <input className='form-control form-harga' type={"number"} placeholder='0' />
                                    </div>
                                </div>

                                <div className='row' style={{marginTop:30}}>
                                    <div className='col-2'>
                                        <h5>Status Barang : </h5>
                                    </div>
                                    <div className='col'>
                                        <select className='form-select' aria-label='Pilih'>
                                            <option value={"available"}>Available</option>
                                            <option value={"not available"}>Not Available</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row' style={{marginTop:30}}>
                                    <div className='col-2'>
                                        
                                    </div>
                                    <div className='col'>
                                        <a className='btn btn-primary btn-save-size'>Simpan Data</a>
                                        <a className='btn btn-danger btn-save-size' style={{marginTop:10}} href='/data-barang'>Batal</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input_Barang;