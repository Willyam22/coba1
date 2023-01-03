import React from "react";

export default function Vcher() {
    const coba = () => {
        const c = document.getElementById("tcher").value
        if (c === "B2QQR") {
            alert("voucher is valid")
        }
        else {
            alert("voucheris invalid")
        }
    }
    return (
        <React.Fragment>
            
            <div style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/001/594/267/original/red-christmas-background-free-vector.jpg)"}}>
    <div className="center">
        <div className="text-container"><img src="https://cdn-icons-png.flaticon.com/512/61/61521.png" alt="" />
            <div className="center1">
                insert voucher
            </div>
            <div className="center1">
                <input type="text" id="tcher" />
            </div>
            <div className="center1">
                <button id="pencet" onClick = {coba}>submit</button>
            </div>
        </div>

    </div>

    <div className="abang-mahesa">
        <div className="card-container-1">
            <div className="card-voucher">
                <img src="./disscount.png" alt=""  />
                <div className="text-voucher">
                    <p className="bor">winter sale</p>
                    <p >discount 30%</p>
                </div>

            </div>
            <div className="card-voucher">
                <img src="./disscount.png" alt=""  />
                <div className="text-voucher">
                    <p className="bor" >12-12</p>
                    <p >discount 10%</p>
                </div>

            </div>
            <div className="card-voucher">
                <img src="./disscount.png" alt=""  />
                <div className="text-voucher">
                    <p className="bor" >winter sale</p >
                    <p >discount 30%</p >
                </div>

            </div>
            <div className="card-voucher">
                <img src="./disscount.png" alt=""  />
                <div className="text-voucher">
                    <p className="bor" >winter sale</p >
                    <p>discount 30%</p >
                </div>

            </div>
            <div className="card-voucher">
                <img src="./disscount.png" alt=""  />
                <div className="text-voucher">
                    <p className="bor" >chirstmas</p >
                    <p>discount 20%</p>
                </div>

            </div>
            <div className="card-voucher">
                <img src="./disscount.png" alt=""  />
                <div className="text-voucher">
                    <p className="bor" >12-12</p >
                    <p>discount 10%</p >
                </div>

            </div>

        </div>

    </div>
  </div>
        </React.Fragment>
    )
}