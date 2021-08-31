import React, { useState } from "react";
import Layout from "../components/layout";

export default function Component() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSend = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://denniscalvert-net-service.herokuapp.com/mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: email,
          name,
          text,
        }),
      }
    );
    setIsLoading(false);
    setIsMessageSent(true);
  };

  const isSendDisabled = () => {
    return !!name && !!text && !!email && !isLoading;
  };

  if (isMessageSent) {
    return <Layout>Message sent. Thanks for reaching out!</Layout>;
  }

  return (
    <Layout>
      <main className="contact contentWrapper">
        <div>256-339-0748</div>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          required
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          required
          id="message"
          name="message"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSend} disabled={!isSendDisabled()}>
          Send
        </button>
      </main>
    </Layout>
  );
}
