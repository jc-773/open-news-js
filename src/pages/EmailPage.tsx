import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateOtp } from "../api/api";
import "./EmailPage.css";

export default function EmailPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleSendOtp() {
    if (!email.includes("@") || !email.includes(".com")) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const resp = await generateOtp(email);

      if (resp.status === 200) {
        localStorage.setItem("email", email);
        navigate("/otp");
      } else if (resp.status === 409) {
        // Already subscribed → skip OTP flow
        localStorage.setItem("email", email);
        navigate("/subscribe");
      } else {
        alert("Failed to send OTP.");
      }
    } catch (err) {
      alert("Network error sending OTP.");
      console.error(err);
    }
  }

  return (
    <div className="center-container">
      <div className="content-box">
        <h1>openNewsletter</h1>

        <p style={{ marginTop: "-10px", color: "gray" }}>
          Your personalized morning newsletter.
        </p>

        <div className="input-row">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      </div>
    </div>
  );
}