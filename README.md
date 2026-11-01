# Hawke’s Bay Total Mobility

Next.js website for accessible transport bookings.

## Local development

Use Node.js 22, run `npm ci`, then `npm run dev`. Open http://localhost:3000.
Copy `.env.example` to `.env.local` and enter the public Splitforms access key if
you want to override the site's default form. Set `NEXT_PUBLIC_SITE_URL` to the
production domain when it differs from https://hawkesbaytotalmobility.co.nz.

## Booking requests

The homepage card carries trip details to `/contact#booking`. The completed form
posts directly to https://splitforms.com/api/submit using the site's public
Splitforms access key. It sends the passenger name, phone, trip date and time,
addresses, mobility aid, return preference, funding and notes. A hidden honeypot
and load timestamp help with spam filtering. The Splitforms embed loads once in
the root layout for form analytics.

Successful submissions reset the fields and show a confirmation that the request
was sent; the operator must still confirm the ride. Failed submissions retain
the visitor's entries and offer the phone number.

The access key is a public form identifier designed to appear in browser HTML,
not an account API token. The code includes the owner-supplied public key so
deployments work without additional configuration. Override it with
`NEXT_PUBLIC_SPLITFORMS_ACCESS_KEY` before building to route to another form.
Account tokens and private credentials must never go into this variable.

Verify notification recipients and allowed domains in the Splitforms dashboard
that owns this key. An API success confirms acceptance by Splitforms; it does not
prove inbox delivery. Do not use real passenger information for test bookings.

## Hostinger deployment

Deploy `Ramanmakkar1/Hawkestotal-mobility`, branch `main`, as a **Next.js Node.js
web app**. Use the repository root, Node.js 22, `npm run build` for the build and
`npm start` for the start command. Keep the framework's detected output settings.

In **Environment variables**, use **Import .env** to import the supplied
`Hawkestotal-mobility-hostinger.env`, or enter:

```dotenv
NEXT_PUBLIC_SPLITFORMS_ACCESS_KEY=YOUR_SPLITFORMS_ACCESS_KEY
NEXT_PUBLIC_SITE_URL=https://hawkesbaytotalmobility.co.nz
```

Apply the values and rebuild/redeploy from `main`. `NEXT_PUBLIC_` values are
embedded in the browser bundle at build time, so restarting alone does not
update them. The actual `.env.local` and Hostinger import file stay outside Git.
No SMTP password, database, or server-side form endpoint is required.

Hostinger instructions:
- https://www.hostinger.com/support/how-to-add-environment-variables-during-node-js-application-deployment/
- https://www.hostinger.com/support/how-to-edit-or-add-environment-variables-after-deployment/
- https://splitforms.com/docs

## Checks

Run `npm run lint` and `npm run build`. Test the homepage-to-contact prefill,
required fields, submission success, rejected requests and network failure.
