import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp, generateOtp } from "../api/api";

export default function OtpPage() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email") || "";
  const [otp, setOtp] = useState("");

  async function handleVerify() {
    const resp = await verifyOtp(email, otp);

    if (resp.status === 200) {
      navigate("/subscribe");
    } else {
      alert("Invalid or expired OTP.");
    }
  }

  async function handleResend() {
    await generateOtp(email);
    alert("OTP resent!");
  }

  return (
    <div>
      <h2>Enter the OTP sent to {email}</h2>

      <input
        type="password"
        value={otp}
        onChange={e => setOtp(e.target.value)}
      />

      <button onClick={handleVerify}>Verify</button>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
}