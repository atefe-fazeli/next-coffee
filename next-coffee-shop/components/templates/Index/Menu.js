import React, { useState } from "react";

function Menu({ menu }) {
  let coldMenu=[]
  let hotMenu=[]
  menu.map(item=>{
    if(item.type=="cold"){
      console.log(item)
      coldMenu=[...coldMenu,item]
    }else{
      hotMenu=[...hotMenu,item]
    }
  })
  console.log(coldMenu,hotMenu,"menus")
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu & Pricing
          </h4>
          <h1 class="display-4">Competitive Pricing</h1>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h1 class="mb-5">Hot Coffee</h1>
            {hotMenu?.map((item) => (
              <div class="row align-items-center mb-5" key={item.id}>
                <div class="col-4 col-sm-3">
                  <img
                    class="w-100 rounded-circle mb-3 mb-sm-0"
                    src={item.img}
                    alt=""
                  />
                  <h5 class="menu-price">{item.price}</h5>
                </div>
                <div class="col-8 col-sm-9">
                  <h4>{item.title}e</h4>
                  <p class="m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div class="col-lg-6">
            <h1 class="mb-5">Cold Coffee</h1>
            {coldMenu?.map((item) => (
              <div class="row align-items-center mb-5" key={item.id}>
                <div class="col-4 col-sm-3">
                  <img
                    class="w-100 rounded-circle mb-3 mb-sm-0"
                    src={item.img}
                    alt=""
                  />
                  <h5 class="menu-price">{item.price}</h5>
                </div>
                <div class="col-8 col-sm-9">
                  <h4>{item.title}e</h4>
                  <p class="m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
