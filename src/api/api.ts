const API_BASE = import.meta.env.VITE_API_BASE;

export async function generateOtp(email: string) {
  return fetch(`${API_BASE}/auth/generate/otp?email=${email}`);
}

//You down with OTP?
export async function verifyOtp(email: string, otp: string) {
  return fetch(`${API_BASE}/auth/verify/otp?email=${email}&otp=${otp}`);
}

export async function subscribe(payload: unknown) {
  return fetch(`${API_BASE}/auth/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}