import React from "react";
import { useState } from "react";
import { TextInput, Textarea, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("tYAFETHcjmXkNyHI3");

export default function ContactPage() {
  const navigate = useNavigate();

  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Message");
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const form = document.querySelector("#contact-form");
    const statusMessage = document.querySelector(".status-message");
    console.log(data);
    generateContactNumber();
    sendForm("default_service", "template_0dbqo1h", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message-success";
        setTimeout(() => {
          statusMessage.className = "statusMessage";
        }, 5000);
      },
      function (error) {
        console.log("failed", error);
        setStatusMessage("Failed to send - Please try again");
        statusMessage.className = "status-message-failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    );
    form.reset();
  };

  const message = watch("user_message") || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <div className="contact">
      <Title>Contact</Title>
      <p className="status-message">{statusMessage}</p>
      {errors.user_name && errors.user_name.type === "required" && (
        <div role="alert">
          Name is required
          <br />
        </div>
      )}
      {errors.user_email && errors.user_email.type === "required" && (
        <div role="alert">
          Email is required
          <br />
        </div>
      )}
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          {...register("user_name", { required: true })}
          placeholder="Name"
          maxLength="30"
          aria-invalid={errors.user_name ? "true" : "false"}
        />
        <br />
        <TextInput
          type="email"
          {...register("user_email", { required: true })}
          placeholder="Email"
          maxLength={"40"}
          aria-invalid={errors.user_email ? "true" : "false"}
        />
        <br />
        <Textarea
          id="messageInput"
          type="text"
          {...register("user_message", { required: true })}
          placeholder="Message"
          maxLength={"1500"}
          aria-invalid={errors.user_message ? "true" : "false"}
        />
        <br />
        <p className="message-chars-left">
          Characters left: {messageCharsLeft}
        </p>
        {errors.user_message && errors.user_message.type === "required" && (
          <div role="alert">
            Message can't be blank
            <br />
          </div>
        )}
        <input type="hidden" name="contact_number" value={contactNumber} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
