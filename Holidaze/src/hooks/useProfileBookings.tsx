import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { json } from "react-router-dom";
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

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<ProfileBookings[]>(url, { signal: controller.signal })
      .then((res) => setBookings(res.data))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);
  return { bookings, error };
};

export default useProfileBookings;
