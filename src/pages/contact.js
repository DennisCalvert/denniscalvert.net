import * as React from "react";
import Layout from "../components/layout";

export default function Component() {
  return (
    <Layout>
      <main className="contact contentWrapper">
        <div>256-339-7048</div>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="text" name="email" />
          <label>Message</label>
          <textarea />
          <button>Send</button>
        </div>
      </main>
    </Layout>
  );
}
