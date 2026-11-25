import {
  Building2,
  CalendarClock,
  CreditCard,
  Droplets,
  FileText,
  HeartHandshake,
  Layers,
  PackageSearch,
  Percent,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Wallet,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

const ICON_MAP = {
  Wrench,
  FileText,
  CreditCard,
  Wallet,
  Store,
  PackageSearch,
  Building2,
  Users,
  Percent,
  HeartHandshake,
  Droplets,
  Zap,
  Sparkles,
  Wind,
  ShieldCheck,
  Layers,
  CalendarClock,
};

export type IconName = keyof typeof ICON_MAP;

export function FeatureIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  return <Icon className={className} aria-hidden="true" />;
}
