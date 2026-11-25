"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Store,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 bg-background py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <Badge
            variant="secondary"
            className="mb-5 rounded-full px-3.5 py-1 text-xs font-medium text-primary"
          >
            Hyperlocal Services, Community &amp; Neighbourhood Business
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            Better Services.{" "}
            <span className="text-primary">Stronger Neighbourhoods.</span>{" "}
            Together.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover local services, bring neighbours together, unlock group
            savings and support businesses around you with Suvilan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              size="lg"
              className="h-12 rounded-full px-6 text-base font-medium shadow-sm"
              onClick={() => scrollTo("services")}
            >
              Explore Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-6 text-base font-medium"
              onClick={() => scrollTo("features")}
            >
              Discover Suvilan
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0 text-primary" />
              <span>Individual Bookings</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <CreditCard className="size-4 shrink-0 text-primary" />
              <span>Online &amp; Cash/COD</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Users className="size-4 shrink-0 text-primary" />
              <span>Service Pools Coming Soon</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <div className="relative rounded-3xl border border-border bg-muted/50 p-5 shadow-sm sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Wrench className="size-5" />
                  </span>
                </div>
                <h2 className="mt-4 text-base font-semibold text-foreground">
                  Home Service Booking
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Compare verified local technicians, get clear quotes, chat
                  in-app, and pay online or via Cash/COD.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Store className="size-5" />
                  </span>
                </div>
                <h2 className="mt-4 text-base font-semibold text-foreground">
                  Business Booster
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Local shops reach nearby residents with radius-based profiles,
                  alerts, and measurable reach.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/25 bg-card p-5 shadow-xs sm:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Building2 className="size-5" />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-foreground">
                        Residential Groups &amp; Service Pools
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        One Residential Group → Multiple Service Pools →
                        Collective Savings
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    Coming Soon
                  </Badge>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  <div className="rounded-xl bg-muted/70 px-3.5 py-2.5 text-xs">
                    <p className="font-medium text-foreground">
                      Confirmed Orders Only
                    </p>
                    <p className="mt-0.5 text-muted-foreground">
                      Discounts apply to accepted jobs
                    </p>
                  </div>
                  <div className="rounded-xl bg-muted/70 px-3.5 py-2.5 text-xs">
                    <p className="font-medium text-foreground">
                      Provider-Owned Slabs
                    </p>
                    <p className="mt-0.5 text-muted-foreground">
                      Technicians set their own tiers
                    </p>
                  </div>
                  <div className="rounded-xl bg-muted/70 px-3.5 py-2.5 text-xs">
                    <p className="font-medium text-foreground">
                      ₹19 Fee Waived
                    </p>
                    <p className="mt-0.5 text-muted-foreground">
                      On collective pool bookings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2 font-medium text-foreground">
                <ShieldCheck className="size-4 text-primary" />
                Role-based Wallets &amp; Immutable Ledger
              </span>
              <span>Residents • Providers • Societies • Shops</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
