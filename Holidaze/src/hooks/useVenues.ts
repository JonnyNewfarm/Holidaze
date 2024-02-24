import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { json } from "react-router-dom";
export  interface venues {
    
    id: string;
    name: string;
    description: string;
    media: string;
    
    
    
   
  }


const useVenues = (url: string) => {
    const [venues, setVenues] = useState<venues[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {

      const controller = new AbortController()
      apiClient
        .get<venues[]>(url, {signal: controller.signal})
        .then((res) => setVenues(res.data))
        .catch((err) => setError(err.message));

        return () => controller.abort()
    }, []);
    return { venues, error}



}

export default useVenues