import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
import useVenues from "../hooks/useVenues";
import { Link } from "react-router-dom";
import { CanceledError } from "axios";

export interface Product {
    id: string;
   name: string
   media: string
   price: number
   maxGuests: number
   description: string


   
  }
const useProductDetail = (url: string) => {
    const [products, setProducts] = useState<Product>();
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        
            apiClient
              .get<Product>(url, {signal: controller.signal})
              .then((res) => setProducts(res.data))
              .catch((err) => {
              if (err instanceof CanceledError) return;
              setError(err.message)
          });
          return () => controller.abort()
        }, []);

        return {products, error}
  
};

export default useProductDetail;