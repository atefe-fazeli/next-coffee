import React, { useState } from "react";

function Offer() {
  const [email, setImail] = useState("");
  function emailHandler(e) {
    setImail(e.target.value);
  }
  async function submitHandler(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/newsLetters", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({ email }),
    });
    if (res.status == "201") {
      alert("email send sucssesfully");
      setImail("");
    }
  }
  return (
    <div class="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div class="container py-5">
        <h1 class="display-3 text-primary mt-3">50% OFF</h1>
        <h1 class="text-white mb-3">Sunday Special Offer</h1>
        <h4 class="text-white font-weight-normal mb-4 pb-3">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </h4>
        <form class="form-inline justify-content-center mb-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control p-4"
              placeholder="Your Email"
              style={{ height: "60px" }}
              value={email}
              onChange={(e) => emailHandler(e)}
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary font-weight-bold px-4"
                type="submit"
                onClick={(e) => submitHandler(e)}
              >
                join
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Offer;
