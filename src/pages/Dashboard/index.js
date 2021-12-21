import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import './dashboard.css';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import {Line} from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

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

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Live Chart',
                },
            },
        };

        const labels = [
            'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
        ]

        const data = {
            labels,
            datasets:[
                {
                    label: 'Dataset 1',
                    data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        };

        return (
            <div>
                <div>
                    <Navbar beranda />
                </div>

                <div className='container'>
                    <h2 style={{marginTop:20}}><u>Welcome Home Admin</u></h2>

                    {/* Grafik */}
                    <div>
                        <Line options={options} data={data}/>
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