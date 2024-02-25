import React, { FormEvent, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import apiClient from "../services/api-client";
import useAvatar from "../hooks/useAvatar";
const name = localStorage.getItem("name");

export const Avatar = () => {
  const { avatar } = useAvatar(`/holidaze/profiles/${name}`);

  return (
    <>
      <Image
        src={`${avatar?.avatar}`}
        alt="profile image"
        style={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          marginLeft: "50px",
          marginTop: "30px",
          objectFit: "cover",
        }}
      />
    </>
  );
};
