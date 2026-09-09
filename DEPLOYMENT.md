# Publishing FIMI-RESIST

## 1. Create the GitHub repository

Create an empty repository, push this project to its `main` branch, then open **Settings → Pages** and set the source to **GitHub Actions**. The included workflow builds and publishes the static site on every push to `main`.

## 2. Buy `fimi-resist.eu`

Use an EURid-accredited registrar. Porkbun is a simple low-cost option; INWX is a good EU-based alternative. Enable two-factor authentication and automatic renewal.

## 3. Connect the domain

At the registrar, add these GitHub Pages DNS records:

- `A` record for `@` → `185.199.108.153`
- `A` record for `@` → `185.199.109.153`
- `A` record for `@` → `185.199.110.153`
- `A` record for `@` → `185.199.111.153`
- `CNAME` record for `www` → `<github-username>.github.io`

In the repository's **Settings → Pages**, enter `fimi-resist.eu` as the custom domain. Once GitHub confirms the DNS check, enable **Enforce HTTPS**.

The included `public/CNAME` file ensures the custom domain remains attached after each deployment.

## 4. Before launch

- Replace the partner-logo placeholders.
- Add a real project contact and data-controller details to the privacy notice.
- Verify the official project entry URL on CORDIS and update the footer link.
- Add social-media links only after the accounts exist.
