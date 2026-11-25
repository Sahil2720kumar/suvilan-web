"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ROLE_BENEFITS } from "@/data/suvilan-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative border-b border-border/60 bg-background py-20 sm:py-24"
    >
      <span id="for-residents" className="sr-only" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Built for Everyone Nearby
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How every role benefits from Suvilan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you are booking a repair for your home, coordinating your
            society, offering skilled services, or running a local shop,
            Suvilan is tailored to your needs.
          </p>
        </motion.div>

        <Tabs defaultValue="residents" className="mt-10">
          <TabsList className="h-auto flex-wrap justify-start gap-1.5 rounded-2xl bg-muted p-1.5">
            {ROLE_BENEFITS.map((role) => (
              <TabsTrigger
                key={role.id}
                value={role.id}
                className="rounded-xl px-4 py-2.5 text-sm font-medium data-[active]:bg-card data-[active]:text-primary data-[active]:shadow-xs"
              >
                {role.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {ROLE_BENEFITS.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-6">
              <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    For {role.label}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                    {role.headline}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <ul className="space-y-3.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-2xl bg-muted/45 p-4 text-sm leading-relaxed text-foreground/90"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
