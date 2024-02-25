import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import apiClient from "../services/api-client";
import useVenues from "../hooks/useVenues";
import { Link } from "react-router-dom";
import { CanceledError } from "axios";

export interface Avatar {
  avatar: string;
}
const useAvatar = (url: string) => {
  const [avatar, setAvatar] = useState<Avatar>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Avatar>(url, { signal: controller.signal })
      .then((res) => setAvatar(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { avatar, error };
};

export default useAvatar;
