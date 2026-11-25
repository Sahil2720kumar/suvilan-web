"use client";

import { motion } from "framer-motion";
import { Building2, Home, Store, Wrench, ArrowRight } from "lucide-react";
import { PROBLEM_GROUPS } from "@/data/suvilan-data";

const ICONS = {
  Home,
  Building2,
  Wrench,
  Store,
};

export function ProblemSection() {
  return (
    <section
      id="problems"
      className="border-b border-border/60 bg-muted/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Why Suvilan
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real neighbourhood challenges, solved in one place
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From finding a dependable technician to coordinating society-wide
            service demand and helping local shops get discovered nearby,
            Suvilan is designed for every participant in your neighbourhood.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROBLEM_GROUPS.map((group, idx) => {
            const Icon = ICONS[group.iconName];
            return (
              <motion.div
                key={group.audience}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.audience}
                  </h3>
                </div>

                <div className="mt-6 space-y-5">
                  {group.problems.map((item) => (
                    <div
                      key={item.issue}
                      className="rounded-xl bg-muted/55 p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {item.issue}
                      </p>
                      <div className="mt-1.5 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <ArrowRight className="mt-1 size-3.5 shrink-0 text-primary" />
                        <span>{item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
