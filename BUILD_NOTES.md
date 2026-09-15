# Build notes

- The company logo is now imported from `src/assets/images/logo_generated.jpg` so Vite fingerprints and emits it into `dist/assets/` during `npm run build` instead of leaving a `../../public/...` path in the compiled application.
- WhatsApp replaces the Facebook/Instagram links. The icon opens WhatsApp for `+1 619 634 5953` with a pre-filled welcome message.
- Run `npm install` and then `npm run build` to generate a fresh production `dist/` folder.

## Verification in the provided environment

The source changes were reviewed, but a fresh Vite build could not be executed in this environment because the uploaded project did not contain a complete usable dependency installation and package downloads were unavailable. The existing `dist/` folder was therefore removed from this deliverable so it cannot be mistaken for a build containing the new changes.
