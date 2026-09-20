# Americká vrba — product and enquiry website

A Czech product website for American willow plants, combining product information, care guidance, a gallery and order/contact forms.

**Status:** Portfolio website source; email delivery and production operation require deployment-specific validation.

## Scope

- Product benefits, specifications, care information, FAQ and image gallery.
- Order form and modal UI.
- Next.js server routes for contact messages and order submission using Nodemailer.
- Cookie-consent UI and reusable landing-page sections.

## Technology

Next.js, React, TypeScript, Tailwind CSS, Nodemailer.

## Architecture and source map

- `app/page.tsx` — landing-page composition
- `components/` — product sections, gallery and forms
- `app/api/contact/route.ts` — contact email handler
- `app/api/submit-order/route.ts` — order email handler
- `app/api/images/route.ts` — image-list endpoint

## Local development

Requires Node.js and npm. From the repository root:

```sh
npm install
npm run dev
```

Build command declared by this checkout: `npm run build`.

These are the repository scripts, not a claim of a passing build. Dependency installation, build and live integrations were not executed during the documentation review.

## Configuration and limitations

Both mail handlers read `EMAIL_PASSWORD` on the server. Review their existing SMTP sender and recipient configuration and replace it with an authorized test mailbox before testing; account identifiers are intentionally omitted here. Never commit mailbox credentials. An order form does not establish payment processing or an order-management backend.

The current development script binds to `0.0.0.0`. For a local-only preview, use `npx next dev -H 127.0.0.1`. Multiple Next.js configuration files are present; verify the effective configuration before deployment.

## Portfolio relevance

Demonstrates a complete user-facing flow from product discovery to a server-side enquiry integration, with clear separation of public UI and mail credentials.

## Documentation next steps

Capture screenshots using synthetic data, document a reproducible test run, and record which integrations have been verified. Keep credentials and deployment-specific configuration outside version control.
