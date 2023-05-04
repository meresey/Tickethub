import React from "react";

const apiURL = "http://localhost:3001/tickets"
export default function TicketList({tickets, setTickets}) {
    return (
        <div className='ticket-list-container'>
    
        <div className='ticket-cards-container'>
          {tickets.map((ticket) => (
            <div key={ticket.id} className='ticket-card'>
              <img
                src={ticket.image}
                alt={ticket.name}
                className='ticket-image'
              />
  
              <div className='ticket-card'>
                <h2 className='ticket-name'>{ticket.name}</h2>
                <p className='ticket-location'>
                  <strong>Location:</strong>
                  {ticket.location}
                </p>
                <p className='ticket-date'>
                  <strong>Date:</strong>
                  {ticket.date}
                </p>
                <p className='ticket-capacity'>
                  <strong> Remaining tickets:</strong>
                  {ticket.available_tickets}
                </p>
                <button onClick={() => updateCapacity(ticket,setTickets, tickets)}>
                  Buy button
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

function updateCapacity(ticket,setTickets, tickets) {

    // return setTickets(tickets.map(ticket => {
    //     if (ticket.available_tickets==0) return {...ticket}
    //   }))  
      return fetch(`${apiURL}/${ticket.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...ticket, available_tickets: ticket.available_tickets-1
          }),
        })
          .then((res) => res.json())
          .then((result) => {
              setTickets(tickets.map(ticket=> {
                return ticket.id === result.id ? {...result} : {...ticket}
              }))
          })
          .catch((err) => console.log('error: ', err))
       
      
}

const updateEvent = (ticket) => {


      
  }