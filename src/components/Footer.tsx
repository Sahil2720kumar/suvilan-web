import { NAV_ITEMS, FEATURES } from "@/data/suvilan-data";
import { SuvilanLogo } from "@/components/SuvilanLogo";

export function Footer() {
  const availableFeatures = FEATURES.filter((f) => f.status === "");
  const comingSoonFeatures = FEATURES.filter((f) => f.status === "Coming Soon");

  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SuvilanLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Suvilan is a hyperlocal platform helping residents find reliable
              home-service professionals, connect with neighbours, and discover
              businesses in their neighbourhood.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-muted-foreground">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">
              Capabilities
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-muted-foreground">
              {availableFeatures.map((item) => (
                <li key={item.id}>
                  <a
                    href="#features"
                    className="transition-colors hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">
              Coming Soon
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-muted-foreground">
              {comingSoonFeatures.map((item) => (
                <li key={item.id}>
                  <a
                    href="#coming-soon"
                    className="transition-colors hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 Suvilan. All rights reserved.</p>
          <p>
            Product information based on the Suvilan Product Requirements
            Document.
          </p>
        </div>
      </div>
    </footer>
  );
}
