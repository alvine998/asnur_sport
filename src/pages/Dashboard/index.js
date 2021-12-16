import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    getFlag(){
        let flag = localStorage.getItem('flagKey')
        console.log("Flag : ", flag)
    }

    componentDidMount(){
        this.getFlag();
    }
    
    render() {
        return (
            <div>
                <div>
                    <Navbar beranda />
                </div>

                <div className='container'>

                    {/* Grafik */}
                    <div className='box-grafik'>
                        Grafik Info
                    </div>

                    {/* Table Transaksi */}
                    <div style={{paddingTop:50, paddingBottom:50}}>
                        Transaksi Terakhir
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Kode Transaksi</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;