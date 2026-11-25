"use client";

import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@/data/suvilan-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="border-b border-border/60 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Clear answers about how Suvilan works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Everything you need to know about individual bookings, payments,
            wallets, Business Booster, and Residential Groups and Service
            Pools.
          </p>
        </motion.div>

        <div className="mt-12 rounded-3xl border border-border bg-card px-5 py-2 shadow-xs sm:px-8">
          <Accordion className="w-full">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem key={item.question} value={`faq-${idx}`}>
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
