import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("eSewa");
  // handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "eSewa" ? "active" : ""
                      }`}
                      id="esewa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="esewa"
                      aria-selected={activeTab === "esewa"}
                      onClick={() => handleTabChange("esewa")}
                      href="#eSewa"
                    >
                      <img
                        src="https://tedxmaitighar.com/wp-content/uploads/2024/06/wsewa.png"
                        alt="eSewa"
                        width="80"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "khalti" ? "active" : ""
                      }`}
                      id="khalti-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="khalti"
                      aria-selected={activeTab === "khalti"}
                      onClick={() => handleTabChange("khalti")}
                      href="#khalti"
                    >
                      <img
                        src="data:image/png;base64,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"
                        alt="khalti"
                        width="80"
                      />
                    </a>
                  </li>
                </ul>

                  {/* contents */}
                  <div className="tab-content" id="myTabContent">
                    {/* eSewa-content */}
                    <div className={`tab-pane fade ${activeTab ==="eSewa" ? "show active" : ""}`}
                    id="eSewa"
                    role="tabpanel" 
                    aria-labelledby="eSewa-tab"
                    >
                      {/* esewa tab content */}
                      <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>eSewa Account Info</h5>

                        </div>
                        <div className="form mt-3"> 
                          <div className="inputbox">
                          <span>Enter your email :</span>
                            <input type="text" name="name" id="name" className="form-control" required/>
                          


                          </div>
                          <div className="inputbox">
                          <span>Your Name :</span>

                            <input type="text" name="number" id="number" min='1' max='999'className="form-control" required />
                            
                          </div>
                          <div className="d-flex flex-row">
                            <div className="inputbox">
                            <span>Extra info :</span>
                              <input type="text" name="number" id="number" min='1' max="999" className="form-control" required />
                             

                            </div>
                            <div className="px-5 pay"><br />
                              <button className="btn btn-success btn-block">Order</button>

                            </div>

                          </div>

                        </div>

                      </div>
                    </div>
                    {/* Khalti-content */}
                  </div>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
