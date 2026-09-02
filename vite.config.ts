import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` is passed on the command line by the deploy workflow
// (`vite build --base=...`), so the same config works whether the repo
// is served from a user-site root or a project-site subpath.
export default defineConfig({
  plugins: [react()],
})
