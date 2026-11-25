"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
  COMING_SOON_ITEMS,
  FEATURES,
  type FeatureItem,
} from "@/data/suvilan-data";
import { Badge } from "@/components/ui/badge";
import { FeatureIcon } from "@/components/FeatureIcon";

interface ComingSoonSectionProps {
  onSelectFeature: (feature: FeatureItem) => void;
}

export function ComingSoonSection({ onSelectFeature }: ComingSoonSectionProps) {
  return (
    <section
      id="coming-soon"
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
          <Badge
            variant="outline"
            className="rounded-full border-primary/35 text-primary"
          >
            Coming Soon • Future Roadmap
          </Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            More Ways to Connect, Coming Soon.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            After launching individual bookings, wallets, and Business
            Booster, Suvilan will introduce community features—clearly
            distinguished so you know exactly what is available first.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMING_SOON_ITEMS.map((item, idx) => {
            const linkedFeature = item.featureId
              ? FEATURES.find((f) => f.id === item.featureId) ?? null
              : null;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => {
                  if (linkedFeature) onSelectFeature(linkedFeature);
                }}
                className={`group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-all ${
                  linkedFeature
                    ? "cursor-pointer hover:border-primary/35 hover:shadow-md"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                      <FeatureIcon name={item.iconName} className="size-5" />
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/30 text-primary"
                    >
                      Coming Soon
                    </Badge>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {linkedFeature && (
                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                    <span className="text-xs font-medium text-primary">
                      Preview details
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectFeature(linkedFeature);
                      }}
                      aria-label={`Preview ${item.title}`}
                      className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
