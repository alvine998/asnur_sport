import React, { Component } from "react";
import "../../assets/css/style.css";
import Navbar from "../../components/Navbar";

class Transaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>

        <div className="container" style={{ paddingTop: 20 }}>
          <h2>
            <u>Transaksi Baru</u>
          </h2>
          <div className="row" style={{ paddingTop: 20 }}>
            <div className="col">
              <form>
                <input
                  autoFocus
                  type={"text"}
                  placeholder="Kode Barang"
                  className="form-control width-kode"
                />
                <a
                  className="btn btn-outline-success width-cari positioning"
                  href="#"
                >
                  Cari
                </a>

                <a
                  className="btn btn-outline-primary width-cari positioning"
                //   style={{marginLeft:10}}
                  href="#"
                >
                  Tambahkan
                </a>
              </form>

              {/* Table Data Barang Transaksi */}
              <div className="pad-table">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama Barang</th>
                      <th scope="col">Harga</th>
                      <th scope="col">Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>@mdo</td>
                      <td><a className="btn btn-danger">Hapus</a></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>@fat</td>
                      <td><a className="btn btn-danger">Hapus</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col">
              <div className="">
                <div className="box-harga"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaksi;
