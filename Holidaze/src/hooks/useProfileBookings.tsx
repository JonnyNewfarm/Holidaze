import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { json } from "react-router-dom";
import { CanceledError } from "axios";
export interface ProfileBookings {
  id: string;
  dateFrom: string;
  dateTo: string;
  guests: number;
  created: string;
  updated: string;
}

const useProfileBookings = (url: string) => {
  const [bookings, setBookings] = useState<ProfileBookings[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<ProfileBookings[]>(url, { signal: controller.signal })
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { bookings, error, isLoading };
};

export default useProfileBookings;
