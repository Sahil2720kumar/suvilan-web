"use client";

import { motion } from "framer-motion";
import { SERVICE_CATEGORIES } from "@/data/suvilan-data";
import { Badge } from "@/components/ui/badge";
import { FeatureIcon } from "@/components/FeatureIcon";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-border/60 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Home Services &amp; Local Supply
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everyday services, built for your neighbourhood
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Suvilan launches with focused, dependable home-service categories
              and nearby material discovery, then expands into
              community-powered Service Pools.
            </p>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Transparent profiles, upfront quotations, and your choice of Online
            Payment or Cash/COD on every booking.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-xs transition-shadow hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <FeatureIcon name={service.iconName} className="size-5" />
                </span>
                {service.badge ? (
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {service.badge}
                  </Badge>
                ) : null}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
