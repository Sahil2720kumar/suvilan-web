"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { WHY_SUVILAN_POINTS } from "@/data/suvilan-data";

export function WhySuvilanSection() {
  return (
    <section className="border-b border-border/60 bg-muted/35 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Key Differentiators
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why choose Suvilan for your community
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Designed to align residents, technicians, society committees, and
            local shops around transparent rules and long-term trust.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_SUVILAN_POINTS.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
                <ShieldCheck className="size-4" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
