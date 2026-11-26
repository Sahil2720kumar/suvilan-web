"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FEATURES,
  ILLUSTRATIVE_DISCOUNT_SLABS,
  type FeatureCategory,
  type FeatureItem,
} from "@/data/suvilan-data";
import { FeatureCard } from "@/components/FeatureCard";
import { FeatureDetail } from "@/components/FeatureDetail";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const CATEGORIES: ("All" | FeatureCategory)[] = [
  "All",
  "Services & Booking",
  "Payments & Wallets",
  "Community & Pools",
  "Local Business",
];

interface FeatureSectionProps {
  selectedFeature: FeatureItem | null;
  onSelectFeature: (feature: FeatureItem | null) => void;
}

export function FeatureSection({
  selectedFeature,
  onSelectFeature,
}: FeatureSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | FeatureCategory>(
    "All",
  );

  const visibleFeatures =
    activeCategory === "All"
      ? FEATURES
      : FEATURES.filter((item) => item.category === activeCategory);

  return (
    <section
      id="features"
      className="border-b border-border/60 bg-muted/35 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Platform Capabilities
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore how Suvilan works for your home and neighbourhood
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Click any card below to expand full details—what it solves, who
            benefits, and the clear rules behind V1 core capabilities and V2
            community features.
          </p>
        </motion.div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Filter features by category"
        >
          {CATEGORIES.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-xs"
                    : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleFeatures.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={idx}
              onSelect={(item) => onSelectFeature(item)}
            />
          ))}
        </div>

        {/* Service Pools & Provider-Defined Discount Slabs Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mt-14 grid gap-6 lg:grid-cols-12"
        >
          <div className="rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8 lg:col-span-6">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Coming Soon • Community Architecture
            </Badge>
            <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
              How Residential Groups and Service Pools relate
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              One Residential Group can host multiple independent Service Pools
              at the same time—each for a specific service category.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-border bg-muted/45 p-4">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  1. One Residential Group
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Your apartment complex or colony (managed by a Group Admin,
                  with duplicate groups prevented).
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/45 p-4">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  2. Multiple Service Pools
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Independent pools inside the group—such as a Plumbing Pool, AC
                  Repair Pool, or Society-Wide Pool.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/45 p-4">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  3. Multiple Residents in Each Pool
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Each resident submits their own requirement, accepts their own
                  quote, and chooses UPI, card, netbanking, or COD.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8 lg:col-span-6">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Illustrative Example Only • Coming Soon
            </Badge>
            <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
              Provider-Defined Discount Slabs
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Each Service Provider configures their own discount slabs—never
              imposed by Society Admins. Only confirmed, accepted orders count
              toward the final slab.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/70 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Confirmed Orders</th>
                    <th className="px-4 py-3">Example Discount</th>
                    <th className="hidden px-4 py-3 sm:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {ILLUSTRATIVE_DISCOUNT_SLABS.map((slab) => (
                    <tr key={slab.range}>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {slab.range}
                      </td>
                      <td className="px-4 py-3 font-semibold text-primary">
                        {slab.discount}
                      </td>
                      <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                        {slab.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Note: Percentages above are illustrative examples from the product
              blueprint, not fixed platform-wide tiers. If fewer residents
              confirm than estimated and the price rises, residents must
              re-accept the updated price.
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <FeatureDetail
            key={selectedFeature.id}
            feature={selectedFeature}
            onClose={() => onSelectFeature(null)}
            onSelectRelated={(rel) => onSelectFeature(rel)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
