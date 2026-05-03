"use client";

import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from 'react';

const headingFont = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const fieldBase =
  "w-full rounded-lg border border-slate-200 bg-white/80 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-400/40 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-50";

  /** DD/MM/YYYY hh:mm am/pm (12-hour, lowercase am/pm) */
function formatSubmissionTimestamp(date = new Date()): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  let h24 = date.getHours();
  const ampm = h24 >= 12 ? "pm" : "am";
  let h12 = h24 % 12;
  if (h12 === 0) h12 = 12;
  const hours = h12.toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState('');
  const [opportunity, setOpportunity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    const formData = new URLSearchParams();
    formData.append("Timestamp", formatSubmissionTimestamp());
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Contact", contact);
    formData.append("State", state);
    formData.append("City", city);
    formData.append("Pincode", pincode);
    formData.append("Address", address);
    formData.append("Service", service);
    formData.append("Opportunity", opportunity);
    formData.append("Message", message);
    formData.append("token", "w9Xf2@Lk7Pq!8sTz#4VnR6mY$1aC0dE3"!);
    formData.append("website", "");
    
    await fetch("https://script.google.com/macros/s/AKfycbxtc-W7sh1KG-p9Myz9T3VPOmzbb-sqwF7Jd97L9np6GGOqSpMhQbLAl8lGLDZMdxgwHQ/exec", {
      method: "POST",
      body: formData,
    });

    setName('');
    setEmail('');
    setContact('');
    setState('');
    setCity('');
    setPincode('');
    setAddress('');
    setService('');
    setOpportunity('');
    setMessage('');
  };

  return (
    <section className="mx-auto mt-12 w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6 md:mt-20 md:pb-24">
      <div className="mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            headingFont.className,
            "text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50"
          )}
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className={cn(
            headingFont.className,
            "mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          )}
        >
          Let&apos;s talk about your growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base"
        >
          Share your details and our strategy team will connect with a focused plan.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="ds-panel rounded-[1.75rem] border-slate-200/75 bg-gradient-to-br from-white/90 via-white/82 to-blue-50/70 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.16)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              Name<span className="text-red-500">*</span>
            </label>
            <input type="text" required placeholder="Name*" className={fieldBase} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              Email<span className="text-red-500">*</span>
            </label>
            <input type="email" required placeholder="Email*" className={fieldBase} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              Contact No.<span className="text-red-500">*</span>
            </label>
            <input type="tel" required placeholder="Contact No.*" className={fieldBase} value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              State<span className="text-red-500">*</span>
            </label>
            <input type="text" required placeholder="State*" className={fieldBase} value={state} onChange={(e) => setState(e.target.value)} />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              City<span className="text-red-500">*</span>
            </label>
            <input type="text" required placeholder="City*" className={fieldBase} value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              Pincode<span className="text-red-500">*</span>
            </label>
            <input type="text" required placeholder="Pincode*" className={fieldBase} value={pincode} onChange={(e) => setPincode(e.target.value)} />
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              Address<span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              required
              rows={3}
              placeholder="Address*"
              autoComplete="street-address"
              className={cn(fieldBase, "resize-y")}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              Select Service<span className="text-red-500">*</span>
            </label>
            <select required className={cn(fieldBase, "appearance-none")} value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">Select Service</option>
              <option>Logistics</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
              Select Opportunity<span className="text-red-500">*</span>
            </label>
            <select required className={cn(fieldBase, "appearance-none")} value={opportunity} onChange={(e) => setOpportunity(e.target.value)}>
              <option value="">Select Opportunity</option>
              <option>Booking Point</option>
              <option>Min Hub</option>
              <option>EKART Franchise</option>
              <option>SHADOWFAX Franchise</option>
              <option>DELHIVERY Franchise</option>
              <option>One Pincode Franchise</option>
              <option>Master Franchise (3 Pincodes)</option>
              <option>Mini District Franchise (5 Pincodes)</option>
              <option>District Model Franchise (10 Pincodes)</option>
            </select>
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Message"
            className={cn(fieldBase, "resize-y")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* 🔐 Honeypot field (ANTI-BOT) */}
        <input
          type="text"
          name="website"
          value=""
          onChange={() => {}}
          style={{ display: "none" }}
          autoComplete="off"
        />

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className={cn(
              headingFont.className,
              "inline-flex items-center rounded-full bg-[#ff7a2f] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#ff7a2f]/40 transition hover:bg-[#e4661f] hover:shadow-lg hover:shadow-[#e4661f]/40"
            )}
          >
            Request Consultation
          </button>
        </div>
      </motion.form>
    </section>
  );
}

