import React, { useState } from "react";
import axios from "axios";

function CreateTicket() {
    const [showForm, setShowForm] = useState(false);

    const [category, setCategory] = useState("");

    const [subcategory, setSubcategory] = useState("");

    const [description, setDescription] = useState("");

    const openTicketForm = (cat, subcat) => {

        setCategory(cat);

        setSubcategory(subcat);

        setShowForm(true);
        };

        const handleSubmit = async () => {

        try {

            const res = await axios.post(

            "http://localhost:3002/createTicket",

            {
                category,
                subcategory,
                description
            },

            {
                withCredentials: true
            }
            );

            alert(res.data.msg);

            setShowForm(false);

            setDescription("");

        } catch(err){

            console.log(err);

            alert("Error creating ticket");
        }
        };
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="row">
            <div className="col-4 p-5 mt-2 mb-2">
                <h4><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Resident individual</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Minor</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership, HUF and LLP</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Glossary</a><br />
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h4>
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your Profile</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account modification</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Nomination</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transfer and conversion of securities</a><br />
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4><i class="fa fa-bars" aria-hidden="true"></i> Kite</h4>
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Margin Trading Facility (MTF) and Margins</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charts and orders</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Alerts and Nudges</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>General</a><br />
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4><i class="fa fa-square-o" aria-hidden="true"></i> Funds</h4>
                <p
                onClick={() => openTicketForm(
                    "Funds",
                    "Add money"
                )}

                style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                    cursor: "pointer",
                    color: "#387ed1"
                }}
                >
                Add money
                </p> 

                <p
                onClick={() => openTicketForm(
                    "Funds",
                    "Withdraw money"
                )}

                style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                    cursor: "pointer",
                    color: "#387ed1"
                }}
                >
                Withdraw money
                </p>             

                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Add bank accounts</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>eMandates</a><br />
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4><i class="fa fa-gg-circle" aria-hidden="true"></i> Console</h4>
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate actions</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Funds statement</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Profile</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Segments</a><br />
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4><i class="fa fa-check-circle" aria-hidden="true"></i> Coin</h4>
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Mutual funds</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>National Pension Scheme (NPS)</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Features on Coin</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Payments and Orders</a><br />
                <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>General</a><br />
            </div>
            </div>
        </div>
        {
        showForm && (

        <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999
        }}>

        <div style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            width: "400px"
        }}>
            
            <div
                onClick={() => {
                    setShowForm(false);
                    setDescription("");
                }}

                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    fontSize: "22px",
                    fontWeight: "bold"
                }}
            >
                ×
            </div>

            <h3>Create Ticket</h3>

            <p>
            <strong>Category:</strong> {category}
            </p>

            <p>
            <strong>Issue:</strong> {subcategory}
            </p>

            <textarea

            placeholder="Describe your issue"

            value={description}

            onChange={(e)=>setDescription(e.target.value)}

            style={{
                width: "100%",
                height: "120px",
                marginTop: "10px",
                padding: "10px"
            }}
            />

            <button

            onClick={handleSubmit}

            style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "#387ed1",
                color: "#fff",
                border: "none",
                cursor: "pointer"
            }}
            >
            Submit Ticket
            </button>

        </div>

        </div>

        )}
    </div>
  );
}

export default CreateTicket;