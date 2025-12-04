import { useState } from "react";
import { subscribe } from "../api/api";

export default function SubscribePage() {
  const email = localStorage.getItem("email") || "";

  const [topics, setTopics] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [excluded, setExcluded] = useState<string[]>([]);
  const [language, setLanguage] = useState("English");

  async function handleSubscribe() {
    if (topics.length === 0) {
      alert("Please choose at least one topic.");
      return;
    }

    const payload = {
      email,
      topics,
      sources,
      excludedDomains: excluded,
      language,
      enabled: true,
    };

    const resp = await subscribe(payload);

    if (resp.status === 200) {
      alert("Account created successfully!");
    } else {
      alert("Error creating account.");
    }
  }

  return (
    <div>
      <h1>Subscription Settings</h1>

      <h3>Topics</h3>
      <input
        type="text"
        placeholder="Add topics… (comma separated)"
        onChange={e => setTopics(e.target.value.split(","))}
      />

      <h3>Sources</h3>
      <input
        type="text"
        placeholder="e.g. cnn, bbc-news"
        onChange={e => setSources(e.target.value.split(","))}
      />

      <h3>Excluded Sources</h3>
      <input
        type="text"
        placeholder="exclude…"
        onChange={e => setExcluded(e.target.value.split(","))}
      />

      <h3>Language</h3>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        {["Arabic","German","English","Spanish","French","Hebrew","Italian","Dutch","Norwegian","Portuguese","Russian","Swedish"].map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
}