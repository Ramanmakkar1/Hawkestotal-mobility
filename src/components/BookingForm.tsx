"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Icon } from "./icons";

const field =
  "mt-2 block w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[17px] text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/30";
const label = "block text-[15px] font-semibold text-navy";

/**
 * No server needed: the form turns the trip details into a text message
 * to the booking number and opens the phone's messaging app.
 */
export function BookingForm() {
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const lines = [
      "Booking request — Hawke’s Bay Total Mobility",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Date: ${get("date")}${get("time") ? ` at ${get("time")}` : ""}`,
      `Pickup: ${get("pickup")}`,
      `Destination: ${get("destination")}`,
      `Return trip: ${get("return") || "No"}`,
      `Mobility: ${get("mobility")}`,
      get("tmcard") ? "Total Mobility cardholder: Yes" : "",
      get("notes") ? `Notes: ${get("notes")}` : "",
    ].filter(Boolean);
    const body = lines.join("\n");
    setMessage(body);
    window.location.href = `sms:${site.smsNumber}?&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-card sm:p-8 lg:p-10">
      <h2 className="font-display text-2xl font-extrabold text-navy lg:text-[28px]">Request a booking</h2>
      <p className="mt-2 leading-relaxed">
        Fill in your trip and tap send — it opens a text message to us with everything filled in. We’ll reply to
        confirm.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Phone number
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className={label}>
          Date
          <input name="date" type="date" required className={field} />
        </label>
        <label className={label}>
          Pickup time
          <input name="time" type="time" className={field} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          Pickup address
          <input name="pickup" required autoComplete="street-address" className={field} />
        </label>
        <label className={`${label} sm:col-span-2`}>
          Destination
          <input name="destination" required placeholder="e.g. Hawke’s Bay Hospital, Hastings" className={field} />
        </label>
        <label className={label}>
          Mobility needs
          <select name="mobility" className={field} defaultValue="Wheelchair">
            <option>Wheelchair</option>
            <option>Power wheelchair</option>
            <option>Walker or walking frame</option>
            <option>Walking stick</option>
            <option>No mobility aid</option>
          </select>
        </label>
        <label className={label}>
          Return trip needed?
          <select name="return" className={field} defaultValue="Yes">
            <option>Yes</option>
            <option>No</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          Anything else we should know?
          <textarea name="notes" rows={3} className={field} placeholder="Support person coming, extra luggage, appointment time…" />
        </label>
        <label className="flex items-center gap-3 text-[17px] text-navy sm:col-span-2">
          <input name="tmcard" type="checkbox" className="size-5 accent-brand" />
          I have a Total Mobility card
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-brand px-7 text-[17px] font-semibold text-white hover:bg-brand-dark sm:w-auto"
      >
        <Icon name="arrow" />
        Send by text message
      </button>

      {message && (
        <div className="mt-6 rounded-2xl bg-sky p-5" role="status">
          <p className="font-semibold text-navy">
            Didn’t open your messages app? Text or call {site.phoneDisplay} with these details:
          </p>
          <pre className="mt-3 font-sans text-[15px] whitespace-pre-wrap text-ink">{message}</pre>
        </div>
      )}
    </form>
  );
}
