import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";
function Services({ services }) {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 class="display-4">Fresh & Organic Beans</h1>
        </div>
        <div class="row">
          {services.map((item) => (
            <ServiceItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
