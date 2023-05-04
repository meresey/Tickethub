import React from "react";

import TicketList from "./TicketList";

export default function Home({tickets, setTickets}){
    return (
        <TicketList tickets={tickets} setTickets={setTickets} />
    )
}

