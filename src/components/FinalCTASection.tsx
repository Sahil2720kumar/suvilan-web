"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-primary/20 bg-primary px-6 py-12 text-center text-primary-foreground shadow-sm sm:px-12 sm:py-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3.5 py-1 text-xs font-medium text-primary-foreground">
            <Sparkles className="size-3.5" />
            Built for Stronger Neighbourhoods
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Your Neighbourhood Can Do More. Start Together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Discover better services, connect with your neighbours and support
            the businesses around you with Suvilan.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 rounded-full px-6 text-base font-medium text-primary shadow-xs"
              onClick={() => scrollTo("features")}
            >
              Explore All Capabilities
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-6 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() => scrollTo("coming-soon")}
            >
              See Coming Soon
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
