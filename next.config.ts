import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't auto-generate AGENTS.md/CLAUDE.md — not part of this project's deliverables.
  agentRules: false,
  // experimental.inlineCss was measured and left off: it removes Lighthouse's
  // "render-blocking request" note, but Next also copies the CSS into the RSC
  // payload, which made the HTML 3x larger (gzip) and added main-thread long
  // tasks under CPU throttling. A cacheable 8 KB stylesheet is the better deal.
};

export default nextConfig;
