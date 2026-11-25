"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BellRing,
  Check,
  MapPin,
  Store,
  Wallet,
} from "lucide-react";
import { BUSINESS_BOOSTER_PLANS } from "@/data/suvilan-data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function BusinessBoosterSection() {
  return (
    <section
      id="for-businesses"
      className="border-b border-border/60 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <Badge variant="secondary" className="rounded-full text-primary">
              Local Business Capability
            </Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Give Your Local Business the Neighbourhood Spotlight.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Help nearby residents discover local businesses and make your
              neighbourhood a stronger place to shop and grow.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-muted/40 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Store className="size-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Local Storefront &amp; Catalogue
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add your address, hours, photos, contact details, and
                    available products so nearby residents and technicians can
                    find you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-muted/40 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Radius-Based Neighbourhood Alerts
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Reach residents within 1 km, 3 km, or 5 km with targeted
                    &ldquo;New in your neighbourhood&rdquo; alerts and follower
                    updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-muted/40 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <BarChart3 className="size-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Measurable Reach, Transparent Accounting
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Track profile views, followers, and alert reach. Shop order
                    earnings (Online &amp; COD) stay separate from Booster
                    payments—never deducted silently from sales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {BUSINESS_BOOSTER_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "flex flex-col justify-between rounded-2xl border p-6 shadow-xs",
                    plan.featured
                      ? "border-primary/45 bg-secondary/35"
                      : "border-border bg-card"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {plan.name}
                      </h3>
                      {plan.featured && (
                        <Badge className="rounded-full text-[11px]">
                          Popular Tier
                        </Badge>
                      )}
                    </div>
                    <p className="mt-3 text-2xl font-bold text-foreground">
                      {plan.price}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs font-medium text-primary">
                      <BellRing className="size-3.5" />
                      <span>
                        {plan.radius} • {plan.alerts}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2 border-t border-border/70 pt-4">
                      {plan.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-muted/50 px-5 py-3.5 text-xs text-muted-foreground">
              <Wallet className="size-4 shrink-0 text-primary" />
              <span>
                Booster plans can be paid using your Shop Owner Wallet or
                Digital Payment and are recorded as separate Booster
                transactions. Proposed starting prices exclude applicable GST.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
