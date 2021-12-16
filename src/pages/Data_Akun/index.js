import React, { Component } from "react";
import "../../assets/css/style.css";
import Navbar from "../../components/Navbar";

class Data_Akun extends Component {
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

        <div className="container" style={{ paddingTop: 20 }}>
          <h2>
            <u>Data Akun</u>
          </h2>
          <div className="position-fix">
            <div className="box-akun">
              <div>
                <form>
                  <div className="row">
                    <div className="col-3">
                      <h5>Email : </h5>
                    </div>
                    <div className="col">
                      <input
                        type={"email"}
                        className="form-control width-akun"
                        placeholder="admin@asnursport.com"
                      />
                    </div>
                  </div>

                  <div className="row" style={{ paddingTop: 20 }}>
                    <div className="col-3">
                      <h5>Password : </h5>
                    </div>
                    <div className="col">
                      <input
                        type={"password"}
                        className="form-control width-akun"
                        placeholder="*******"
                      />
                    </div>
                  </div>

                  <div className="row" style={{ paddingTop: 20 }}>
                    <div className="col-3">
                    </div>
                    <div className="col">
                      <a className="btn btn-primary full-size" href="#">
                        Ganti
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Data_Akun;
