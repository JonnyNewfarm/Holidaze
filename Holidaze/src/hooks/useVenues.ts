import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { json } from "react-router-dom";
import { CanceledError } from "axios";
export  interface venues {
    
    id: string;
    name: string;
    description: string;
    media: string;
    
    
    
   
  }


const useVenues = (url: string) => {
    const [venues, setVenues] = useState<venues[]>([]);
    const [error, setError] = useState("");
    const [isloading, setLoading] = useState(false)

    useEffect(() => {

      const controller = new AbortController()
      setLoading(true)
      apiClient
        .get<venues[]>(url, {signal: controller.signal})
        .then((res) =>{ setVenues(res.data);
          setLoading(false)
        
        })
        .catch((error) => {
          if(error instanceof CanceledError) return;
          setError(error.message)
          setLoading(false)
        });

        return () => controller.abort()
    }, []);
    return { venues, error, isloading}



}

export default useVenues