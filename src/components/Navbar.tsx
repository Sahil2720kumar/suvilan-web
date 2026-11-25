"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/suvilan-data";
import { Button } from "@/components/ui/button";
import { SuvilanLogo } from "@/components/SuvilanLogo";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const pendingScrollId = useRef<string | null>(null);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reliable scroll spy
  useEffect(() => {
    let ticking = false;

    const handleScrollSpy = () => {
      if (ticking || isManualScrolling.current) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const headerOffset = 110;
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        // Bottom of page
        if (scrollPosition + viewportHeight >= documentHeight - 15) {
          setActiveId(NAV_ITEMS[NAV_ITEMS.length - 1].id);
          ticking = false;
          return;
        }

        // Top of page
        if (scrollPosition < 80) {
          setActiveId(NAV_ITEMS[0].id);
          ticking = false;
          return;
        }

        let currentSection: string = NAV_ITEMS[0].id;

        for (const item of NAV_ITEMS) {
          const element = document.getElementById(item.id);

          if (!element) continue;

          const rect = element.getBoundingClientRect();

          if (rect.top <= headerOffset + 30) {
            currentSection = item.id;
          }
        }

        setActiveId((previous) =>
          previous === currentSection ? previous : currentSection,
        );

        ticking = false;
      });
    };

    handleScrollSpy();

    window.addEventListener("scroll", handleScrollSpy, {
      passive: true,
    });

    window.addEventListener("resize", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", handleScrollSpy);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const performScroll = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    isManualScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 850);

    const headerOffset = 80;

    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  // Smooth section navigation
  const scrollToSection = (id: string) => {
    setActiveId(id);

    if (mobileOpen) {
      pendingScrollId.current = id;
      setMobileOpen(false);
    } else {
      performScroll(id);
    }
  };

  const handleExitComplete = () => {
    if (pendingScrollId.current) {
      const targetId = pendingScrollId.current;
      pendingScrollId.current = null;
      performScroll(targetId);
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-background/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Suvilan Home"
        >
          <SuvilanLogo />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium",
                  "transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{
                      type: "tween",
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ModeToggle />

          <Button
            size="lg"
            className="rounded-full px-5 font-medium shadow-xs"
            onClick={() => scrollToSection("features")}
          >
            Get Started
            <ArrowRight className="ml-1.5 size-4" />
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ModeToggle />

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false} onExitComplete={handleExitComplete}>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium",
                      "transition-colors duration-200",
                      isActive
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-2">
                <Button
                  size="lg"
                  className="w-full rounded-full font-medium"
                  onClick={() => scrollToSection("features")}
                >
                  Get Started
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
