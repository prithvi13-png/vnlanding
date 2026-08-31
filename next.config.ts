import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't auto-generate AGENTS.md/CLAUDE.md — not part of this project's deliverables.
  agentRules: false,
};

export default nextConfig;
