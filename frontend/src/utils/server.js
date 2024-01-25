import {QueryClient} from "@tanstack/react-query";
export const queryClient = new QueryClient();

export default async function createNewEvent(eventData) {
    let url = 'http://localhost:7007/register';
    const response = await fetch(url,{
      method : "POST",
      body : JSON.stringify(eventData),
      headers : {
        'Content-type':"application/json"
      }
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the events');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    const { events } = await response.json();
  
    return events;
  }