"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { FEATURES, type FeatureItem } from "@/data/suvilan-data";
import { Badge } from "@/components/ui/badge";
import { FeatureIcon } from "@/components/FeatureIcon";
import { cn } from "@/lib/utils";

let globalOpener: HTMLElement | null = null;
let activeFeatureId: string | null = null;
let originalScrollY: number | null = null;
let originalBodyOverflow: string | null = null;

interface FeatureDetailProps {
  feature: FeatureItem;
  onClose: () => void;
  onSelectRelated: (feature: FeatureItem) => void;
}

export function FeatureDetail({
  feature,
  onClose,
  onSelectRelated,
}: FeatureDetailProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeFeatureId = feature.id;

    if (!globalOpener) {
      const active = document.activeElement;
      if (active instanceof HTMLElement && !active.closest('[role="dialog"]')) {
        globalOpener = active;
      }
    }

    if (originalBodyOverflow === null) {
      const currentOverflow = document.body.style.overflow;
      originalBodyOverflow = currentOverflow === "hidden" ? "" : currentOverflow;
      originalScrollY = window.scrollY;
    }
    document.body.style.overflow = "hidden";

    const focusTimer = requestAnimationFrame(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      } else if (dialogRef.current) {
        dialogRef.current.focus();
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const focusableElements = dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (
            document.activeElement === firstElement ||
            !dialog.contains(document.activeElement)
          ) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (
            document.activeElement === lastElement ||
            !dialog.contains(document.activeElement)
          ) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);

      // Only restore focus, scroll, and overflow when the modal is truly closing
      // and no related feature is replacing it.
      if (activeFeatureId === feature.id) {
        if (originalBodyOverflow !== null) {
          document.body.style.overflow = originalBodyOverflow;
          originalBodyOverflow = null;
        }
        if (originalScrollY !== null) {
          window.scrollTo(0, originalScrollY);
          originalScrollY = null;
        }
        if (globalOpener && document.contains(globalOpener)) {
          globalOpener.focus();
        }
        globalOpener = null;
        activeFeatureId = null;
      }
    };
  }, [feature.id, onClose]);

  const relatedFeatures = FEATURES.filter((f) =>
    feature.relatedFeatureIds.includes(f.id)
  );

  return (
    <motion.div
      ref={dialogRef}
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-foreground/45 backdrop-blur-xs outline-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`detail-title-${feature.id}`}
      onClick={onClose}
    >
      <motion.div
        layoutId={`feature-card-${feature.id}`}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-full w-full flex-col overflow-y-auto bg-background sm:m-4 sm:h-[calc(100vh-2rem)] sm:max-w-5xl sm:rounded-3xl sm:border sm:border-border sm:shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-5 py-4 backdrop-blur-sm sm:px-8">
          <div className="flex items-center gap-3">
            <motion.span
              layoutId={`feature-icon-${feature.id}`}
              className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"
            >
              <FeatureIcon name={feature.iconName} className="size-5" />
            </motion.span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {feature.category}
                </span>
                {feature.status ? (
                  <Badge
                    variant="outline"
                    className="rounded-full border-primary/35 px-2.5 py-0.5 text-xs text-primary"
                  >
                    {feature.status}
                  </Badge>
                ) : null}
              </div>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close feature details"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="space-y-8 px-5 py-7 sm:px-8 sm:py-9">
          <div>
            <motion.h2
              id={`detail-title-${feature.id}`}
              layoutId={`feature-title-${feature.id}`}
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {feature.title}
            </motion.h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {feature.summary}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted/45 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <HelpCircle className="size-4 text-primary" />
                <span>1. What problem it solves</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.problemSolved}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted/45 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sparkles className="size-4 text-primary" />
                <span>2. Why it is useful</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.whyUseful}
              </p>
            </div>
          </div>

          {feature.steps && feature.steps.length > 0 && (
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-base font-semibold text-foreground">
                How it works
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {feature.steps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="rounded-xl bg-muted/50 p-4"
                  >
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {idx + 1}
                    </span>
                    <p className="mt-2.5 text-sm font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                <span>3. What users can do</span>
              </div>
              <ul className="mt-3.5 space-y-2.5">
                {feature.whatUsersCanDo.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <Users className="size-4 text-primary" />
                  <span>4. Who benefits</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {feature.whoBenefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <Layers className="size-4 text-primary" />
                  <span>5. Important capabilities</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {feature.importantCapabilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-secondary/45 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                <ShieldCheck className="size-4 text-primary" />
                <span>6. Key business rules</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {feature.businessRules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-muted/55 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-base font-semibold text-foreground">
                <AlertCircle className="size-4 text-primary" />
                <span>7. Important limitations &amp; edge cases</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {feature.limitationsAndEdgeCases.map((edge) => (
                  <li
                    key={edge}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{edge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {feature.example && (
            <div className="rounded-2xl border border-primary/20 bg-secondary/35 p-5 sm:p-6">
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                {feature.example.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {feature.example.body}
              </p>
            </div>
          )}

          {relatedFeatures.length > 0 && (
            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Related capabilities
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {relatedFeatures.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    onClick={() => {
                      activeFeatureId = rel.id;
                      onSelectRelated(rel);
                    }}
                    className="flex items-center justify-between rounded-xl border border-border bg-card p-3.5 text-left transition-colors hover:border-primary/40 hover:bg-muted/40"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {rel.title}
                      </p>
                      {rel.status ? (
                        <p className="text-xs text-muted-foreground">
                          {rel.status}
                        </p>
                      ) : null}
                    </div>
                    <ChevronRight className="size-4 shrink-0 text-primary" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
