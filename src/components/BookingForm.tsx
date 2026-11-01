"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { splitformsAccessKey, splitformsEndpoint } from "@/lib/splitforms";

const field =
  "mt-2 block w-full rounded-[10px] border border-line bg-white px-4 py-3.5 text-[17px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/25";
const label = "block font-semibold text-ink";

/** Sends the completed booking to Splitforms, including trips started on the home page. */
export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const submitting = useRef(false);
  const loadedAt = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Trip details started in the home-page booking card arrive as query parameters.
  useEffect(() => {
    if (loadedAt.current) loadedAt.current.value = String(Date.now());
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    let filled = false;
    for (const key of ["pickup", "destination", "date", "time", "mobility"]) {
      const value = params.get(key);
      const el = form.elements.namedItem(key);
      if (value && (el instanceof HTMLInputElement || el instanceof HTMLSelectElement)) {
        el.value = value;
        filled = true;
      }
    }
    if (filled) form.querySelector<HTMLInputElement>("#booking-name")?.focus();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    submitting.current = true;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch(splitformsEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(
          typeof result.message === "string"
            ? result.message
            : "We couldn’t send your request. Please try again or call us.",
        );
      }
      form.reset();
      if (loadedAt.current) loadedAt.current.value = String(Date.now());
      // Remove the initial trip parameters so reloading cannot restore a sent request.
      window.history.replaceState(null, "", window.location.pathname + window.location.hash);
      setStatus("success");
    } catch (cause) {
      setError(
        cause instanceof Error && cause.name === "Error"
          ? cause.message
          : "We couldn’t confirm your request was received. Your details are still here. Please call us before trying again.",
      );
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form ref={formRef} id="booking" action={splitformsEndpoint} method="POST" onSubmit={handleSubmit} aria-busy={status === "sending"} className="scroll-mt-32">
      <input type="hidden" name="access_key" value={splitformsAccessKey} />
      <input type="hidden" name="subject" value="Website booking request – Hawke’s Bay Total Mobility" />
      <input ref={loadedAt} type="hidden" name="form_loaded_at" />
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <h2 className="font-display text-[28px] font-normal tracking-[-0.02em] text-ink">Booking request</h2>
      <p className="mt-2 text-[17px] text-muted">Fields marked * are needed. Everything else helps us plan.</p>

      <fieldset disabled={status === "sending"} className="mt-8 grid min-w-0 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className={label}>
            Passenger’s name *
          </label>
          <input id="booking-name" name="name" required autoComplete="name" className={field} />
        </div>

        <div>
          <label htmlFor="booking-phone" className={label}>
            Phone number *
          </label>
          <input id="booking-phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>

        <div>
          <label htmlFor="booking-date" className={label}>
            Date *
          </label>
          <input id="booking-date" name="date" type="date" required className={field} />
        </div>

        <div>
          <label htmlFor="booking-time" className={label}>
            Pickup time
          </label>
          <input id="booking-time" name="time" type="time" className={field} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="booking-pickup" className={label}>
            Pickup address *
          </label>
          <input id="booking-pickup" name="pickup" required autoComplete="street-address" className={field} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="booking-destination" className={label}>
            Where are you going? *
          </label>
          <input id="booking-destination" name="destination" required placeholder="e.g. Outpatients, Hawke’s Bay Hospital" className={field} />
        </div>

        <div>
          <label htmlFor="booking-mobility" className={label}>
            Do you use a mobility aid?
          </label>
          <select id="booking-mobility" name="mobility" className={field} defaultValue="Manual wheelchair">
            <option>Manual wheelchair</option>
            <option>Power chair</option>
            <option>Walker or walking frame</option>
            <option>Walking stick</option>
            <option>None</option>
          </select>
        </div>

        <div>
          <label htmlFor="booking-return" className={label}>
            Do you need a ride home?
          </label>
          <select id="booking-return" name="return" className={field} defaultValue="Yes, I’ll call when I’m ready">
            <option>Yes, I’ll call when I’m ready</option>
            <option>Yes, at a set time</option>
            <option>No, one way only</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="booking-funding" className={label}>
            How will you pay?
          </label>
          <select id="booking-funding" name="funding" className={field} defaultValue="Total Mobility card">
            <option>Total Mobility card</option>
            <option>ACC (claim number or purchase order)</option>
            <option>Health NZ travel voucher (NTA)</option>
            <option>EFTPOS or credit card</option>
            <option>Cash</option>
            <option>Invoice to rest home or village</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="booking-notes" className={label}>
            Anything else we should know?
          </label>
          <textarea
            id="booking-notes"
            name="notes"
            rows={3}
            className={field}
            placeholder="Someone travelling with you, the make of your chair, which entrance or department…"
          />
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-13 items-center justify-center rounded-full bg-brand px-7 text-[17px] font-semibold text-white hover:bg-brand-dark disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending request…" : "Send booking request"}
        </button>
      </div>
      <p className="mt-4 text-[15px] text-muted">
        We’ll contact you to confirm availability and your pickup time. Your ride is only booked once we confirm it.
        For same-day travel, call <a href={site.phoneHref} className="font-semibold text-brand underline underline-offset-4">{site.phoneDisplay}</a>.
      </p>
      <p className="mt-3 text-[14px] text-muted">
        By sending this request, you agree to us using your details to arrange your trip. Read our{" "}
        <Link href="/privacy" className="text-brand underline underline-offset-4">privacy policy</Link>.
      </p>

      {status === "success" && (
        <div className="mt-6 rounded-[10px] border border-line bg-mist p-5" role="status" aria-live="polite">
          <p className="font-semibold text-ink">Your booking request has been sent.</p>
          <p className="mt-2 text-[16px]">We’ll contact you to confirm your ride. If you need to travel today, please call {site.phoneDisplay}.</p>
        </div>
      )}
      {status === "error" && (
        <div className="mt-6 rounded-[10px] border border-red-300 bg-red-50 p-5 text-ink" role="alert">
          <p className="font-semibold">Your booking request could not be confirmed.</p>
          <p className="mt-2 text-[16px]">{error}</p>
          <a href={site.phoneHref} className="mt-3 inline-block font-semibold text-brand underline underline-offset-4">Call {site.phoneDisplay}</a>
        </div>
      )}
    </form>
  );
}
