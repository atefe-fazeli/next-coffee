import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ReservationDetail from "@/components/templates/Reservation/ReservationDetail";

function Reservation() {
  return (
    <>
      <PageHeader title="Reservation" />
      <ReservationDetail />
    </>
  );
}

export default Reservation;
