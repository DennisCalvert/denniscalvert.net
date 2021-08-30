import * as React from "react";
import Layout from "../components/layout";

export default function Component() {
  return (
    <Layout>
      <main className="contact contentWrapper">
        <div>256-339-7048</div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button>Send</button>
        </form>
      </main>
    </Layout>
  );
}
