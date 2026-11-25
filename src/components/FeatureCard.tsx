"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { FeatureItem } from "@/data/suvilan-data";
import { Badge } from "@/components/ui/badge";
import { FeatureIcon } from "@/components/FeatureIcon";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: FeatureItem;
  onSelect: (feature: FeatureItem) => void;
  index: number;
}

export function FeatureCard({ feature, onSelect, index }: FeatureCardProps) {
  return (
    <motion.article
      layoutId={`feature-card-${feature.id}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        opacity: { duration: 0.35, delay: index * 0.04 },
        y: { duration: 0.35, delay: index * 0.04 },
        layout: { type: "spring", stiffness: 300, damping: 30 },
      }}
      onClick={() => onSelect(feature)}
      className="group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-primary/35 hover:shadow-md"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <motion.span
            layoutId={`feature-icon-${feature.id}`}
            className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <FeatureIcon name={feature.iconName} className="size-5" />
          </motion.span>
          {feature.status ? (
            <Badge
              variant="outline"
              className="rounded-full border-primary/35 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {feature.status}
            </Badge>
          ) : null}
        </div>

        <p className="mt-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {feature.category}
        </p>

        <motion.h3
          layoutId={`feature-title-${feature.id}`}
          className="mt-1.5 text-lg font-semibold text-foreground"
        >
          {feature.title}
        </motion.h3>

        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {feature.shortDescription}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
        <span className="text-xs font-medium text-primary">
          Explore details
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(feature);
          }}
          aria-label={`Open full details for ${feature.title}`}
          className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.article>
  );
}
