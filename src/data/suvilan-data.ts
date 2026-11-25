export type FeatureStatus = "V1" | "Coming Soon";

export type FeatureCategory =
  | "Services & Booking"
  | "Payments & Wallets"
  | "Community & Pools"
  | "Local Business";

export interface FeatureItem {
  id: string;
  title: string;
  shortDescription: string;
  category: FeatureCategory;
  status: FeatureStatus;
  iconName:
    | "Wrench"
    | "FileText"
    | "CreditCard"
    | "Wallet"
    | "Store"
    | "PackageSearch"
    | "Building2"
    | "Users"
    | "Percent"
    | "HeartHandshake";
  summary: string;
  problemSolved: string;
  whyUseful: string;
  whatUsersCanDo: string[];
  whoBenefits: string[];
  importantCapabilities: string[];
  businessRules: string[];
  limitationsAndEdgeCases: string[];
  relatedFeatureIds: string[];
  steps?: { title: string; detail: string }[];
  example?: { title: string; body: string };
}

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "features", label: "Features" },
  { id: "benefits", label: "Benefits" },
  { id: "for-businesses", label: "For Businesses" },
  { id: "coming-soon", label: "Coming Soon" },
  { id: "faq", label: "FAQ" },
] as const;

export const PROBLEM_GROUPS = [
  {
    audience: "For Residents",
    iconName: "Home" as const,
    problems: [
      {
        issue: "Finding reliable local service professionals",
        solution:
          "Browse service categories, compare technician profiles, ratings, service areas, and indicative prices, then request a quote or book directly.",
      },
      {
        issue: "Managing service requests & repeat visits",
        solution:
          "Track job status, coordinate via in-app chat, keep booking history, and easily rebook a trusted technician you have worked with before.",
      },
      {
        issue: "Missing out on collective savings",
        solution:
          "With V2 Service Pools, neighbours with the same need can combine requests so providers can offer group discounts based on confirmed orders.",
      },
    ],
  },
  {
    audience: "For Residential Communities",
    iconName: "Building2" as const,
    problems: [
      {
        issue: "Neighbours booking the same service separately",
        solution:
          "V2 Residential Groups and Service Pools let residents within one community organize shared service requirements into structured pools.",
      },
      {
        issue: "Duplicate or fragmented community groups",
        solution:
          "Residents can discover existing groups in their locality and request to join with Group Admin approval, while duplicate groups in the same area are prevented.",
      },
      {
        issue: "Coordinating society-wide service needs",
        solution:
          "Society Admins can create society-wide Service Pools using the same provider-defined discount engine and transparent per-resident confirmation.",
      },
    ],
  },
  {
    audience: "For Service Providers",
    iconName: "Wrench" as const,
    problems: [
      {
        issue: "Reaching nearby customers consistently",
        solution:
          "Technicians build a verified KYC profile with skills, service area, and portfolio to receive nearby individual and (in V2) collective job requests.",
      },
      {
        issue: "Losing repeat customers or margin to off-app friction",
        solution:
          "Suvilan charges 0% commission on a technician's verified own repeat customer bookings, giving both sides a clear reason to stay on the platform.",
      },
      {
        issue: "Tracking online and cash payments cleanly",
        solution:
          "A single role-based wallet and ledger tracks online earnings, Cash/COD collections, commissions, and net payable settlements transparently.",
      },
    ],
  },
  {
    audience: "For Local Businesses",
    iconName: "Store" as const,
    problems: [
      {
        issue: "Limited visibility within the neighbourhood",
        solution:
          "Neighbourhood Business Booster lets local shops create a profile with hours, photos, and catalogue and reach nearby residents within a defined radius.",
      },
      {
        issue: "Vague promotion without measurable reach",
        solution:
          "Shops can send targeted neighbourhood alerts, gain followers, post updates, and view measurable profile views, followers, and alert reach.",
      },
    ],
  },
];

export const SERVICE_CATEGORIES = [
  {
    title: "Plumbing",
    description:
      "Tap repairs, leak fixes, pipe fittings, and bathroom maintenance booked individually in V1 or pooled in V2.",
    iconName: "Droplets" as const,
    badge: "V1 Core",
  },
  {
    title: "Electrical",
    description:
      "Fan installation, switchboard repairs, wiring checks, and appliance electrical setup from nearby technicians.",
    iconName: "Zap" as const,
    badge: "V1 Core",
  },
  {
    title: "Home Cleaning",
    description:
      "Scheduled home cleaning requests with clear problem descriptions, preferred time slots, and transparent quotes.",
    iconName: "Sparkles" as const,
    badge: "V1 Core",
  },
  {
    title: "AC & Appliance Care",
    description:
      "AC servicing and repairs, with collective pool support in V2 and annual maintenance plans planned for later.",
    iconName: "Wind" as const,
    badge: "V1 + Pools Coming Soon",
  },
  {
    title: "Pest Control & Checks",
    description:
      "Community-friendly services suited for both individual home visits and society-wide coordination in V2.",
    iconName: "ShieldCheck" as const,
    badge: "V1 + Pools Coming Soon",
  },
  {
    title: "Spare Parts & Materials",
    description:
      "Discover nearby hardware, plumbing, and electrical shops when a job needs replacement parts or materials.",
    iconName: "PackageSearch" as const,
    badge: "V1 Discovery",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "individual-booking",
    title: "Individual Service Booking",
    shortDescription:
      "Browse local technicians, compare profiles, request quotations or book directly, chat in-app, and track every visit.",
    category: "Services & Booking",
    status: "V1",
    iconName: "Wrench",
    summary:
      "In V1, any resident or customer can book a home service individually for their own home—from plumbing and electrical work to cleaning—without needing to join a group.",
    problemSolved:
      "Eliminates the guesswork of finding a reliable local technician, agreeing on a price, and coordinating visit timings over scattered phone calls.",
    whyUseful:
      "Gives residents a structured, transparent way to compare nearby technicians, receive clear quotations, coordinate in-app, and build a verified service history for easy rebooking.",
    whatUsersCanDo: [
      "Browse service categories and filter technicians by rating, price, distance, and availability.",
      "Describe the issue, enter the service address, and pick a preferred date and time.",
      "Request a quotation or book an available slot, then accept or reject the provider's quote.",
      "Coordinate with the technician using in-app chat and confirm job completion.",
      "Leave a review and rebook the same technician later from booking history.",
    ],
    whoBenefits: [
      "Residents seeking dependable, transparent home services.",
      "Service Providers receiving organized job details and clear customer expectations.",
    ],
    importantCapabilities: [
      "Full booking lifecycle tracking (Submitted, Quoted, Confirmed, Completed, Cancelled).",
      "In-app chat and push notifications for visit coordination.",
      "Zero-commission policy on a technician's verified own repeat customer bookings.",
    ],
    businessRules: [
      "Individual bookings carry a 12% platform commission on the job value plus a ₹19 customer platform fee.",
      "Individual bookings never receive pool discounts and never count toward a Service Pool's confirmed-order total.",
      "When a customer rebooks the same verified technician through Suvilan after a completed job, platform commission is 0% (subject to eligibility rules).",
    ],
    limitationsAndEdgeCases: [
      "If a provider rejects a booking request or a resident rejects a quotation, the booking does not proceed to confirmation.",
      "Whether the ₹19 customer platform fee applies to a technician's eligible repeat booking is an open policy item to be finalized before launch.",
    ],
    relatedFeatureIds: [
      "provider-quotations",
      "flexible-payments",
      "role-wallets",
    ],
    steps: [
      {
        title: "Select category & enter details",
        detail:
          "Choose a service (e.g., Plumbing), describe the issue, and pick a preferred date and time.",
      },
      {
        title: "Receive & review quotation",
        detail:
          "The provider accepts, rejects, or submits a quotation for your approval.",
      },
      {
        title: "Choose payment & confirm",
        detail:
          "Select Online Payment or Cash/COD (if eligible) to confirm the booking.",
      },
      {
        title: "Complete & confirm",
        detail:
          "After the work is done, confirm completion and leave a review.",
      },
    ],
    example: {
      title: "Illustrative V1 Individual Booking",
      body: "A resident has a leaking tap, selects Plumbing, and books individually for Saturday morning. The plumber quotes ₹1,000. The resident accepts, chooses Cash/COD, and pays ₹1,000 plus the ₹19 platform fee after completion. No group discount applies.",
    },
  },
  {
    id: "provider-quotations",
    title: "Transparent Provider Quotations",
    shortDescription:
      "Service providers review job details and submit clear quotations that residents can accept or decline before confirming.",
    category: "Services & Booking",
    status: "V1",
    iconName: "FileText",
    summary:
      "Suvilan ensures pricing is agreed upfront through structured quotations—both for individual V1 bookings and for V2 collective Service Pools.",
    problemSolved:
      "Prevents surprise charges after a technician arrives by letting providers assess the requirement and share a clear quote beforehand.",
    whyUseful:
      "Builds mutual trust: residents know the expected amount before confirming, and providers can price fairly based on the actual job description.",
    whatUsersCanDo: [
      "Residents can submit problem details and request a quote from suitable providers.",
      "Providers can accept, reject, or submit a quotation with clear pricing.",
      "Residents can review the quotation and choose to accept or reject it.",
    ],
    whoBenefits: [
      "Residents who want price clarity before a visit begins.",
      "Service Providers who need to price custom or variable-scope repairs accurately.",
    ],
    importantCapabilities: [
      "Supports both individual quotes (V1) and collective pool quotes (V2).",
      "Tracks quotation states cleanly from Draft and Sent through Accepted, Rejected, or Expired.",
    ],
    businessRules: [
      "A booking is only confirmed once both the quotation price and the payment method are accepted.",
      "In V2 pools, a Pool Admin requests quotes from one or more providers and selects one quotation to share with pool participants.",
    ],
    limitationsAndEdgeCases: [
      "If a provider rejects a request or a resident declines a quotation, no payment is captured and no order is confirmed.",
      "In V2 pools, if fewer residents confirm than initially estimated and the per-home price increases, residents must explicitly re-accept the new price.",
    ],
    relatedFeatureIds: [
      "individual-booking",
      "discount-slabs",
      "service-pools",
    ],
  },
  {
    id: "flexible-payments",
    title: "Flexible Payments (Online & Cash/COD)",
    shortDescription:
      "Choose Online Payment or Cash on Delivery per booking, with verified digital records and a structured Collect Payment flow.",
    category: "Payments & Wallets",
    status: "V1",
    iconName: "CreditCard",
    summary:
      "Suvilan supports both Online Payment (via payment gateway) and Cash/COD across individual bookings, V2 collective bookings, and shop orders—neither method is forced.",
    problemSolved:
      "Gives residents flexibility to pay how they prefer while ensuring cash payments are accurately recorded so commissions and settlements stay balanced.",
    whyUseful:
      "Many neighbourhood customers prefer paying cash after inspecting completed work, while others prefer digital payments. Supporting both removes checkout friction.",
    whatUsersCanDo: [
      "Choose Online Payment or Cash/COD independently for each booking.",
      "Providers use the in-app Collect Payment action to record exact cash received after finishing a job.",
      "View itemized payment receipts and status history inside the app.",
    ],
    whoBenefits: [
      "Residents who get freedom of payment choice on every order.",
      "Service Providers and Shop Owners who receive clear settlement accounting for both online and cash jobs.",
    ],
    importantCapabilities: [
      "Idempotent, atomic payment recording so retries never create duplicate credits or debits.",
      "Automatic COD eligibility check before showing Cash/COD at checkout.",
      "Variance tracking if the cash collected differs from the expected amount.",
    ],
    businessRules: [
      "Online payments are verified in the ledger before crediting pending provider earnings.",
      "For COD, the provider taps Collect Payment and enters the physical amount received; duplicate confirmations are blocked.",
      "If the collected cash amount differs from the expected amount, a variance reason is required and the transaction is flagged for review.",
      "In V2 collective bookings, residents in the same pool can choose different payment methods; transactions are never merged.",
    ],
    limitationsAndEdgeCases: [
      "Pending, failed, or unverified online payments are never treated as completed earnings.",
      "If a provider has exceeded their negative balance limit, Cash/COD is hidden for new bookings while Online Payment remains available.",
    ],
    relatedFeatureIds: ["role-wallets", "individual-booking", "service-pools"],
    steps: [
      {
        title: "Choose payment method",
        detail:
          "Select Online Payment or Cash/COD when confirming your booking.",
      },
      {
        title: "Service completion",
        detail:
          "The provider completes the job; for COD, they tap Collect Payment and confirm the cash received.",
      },
      {
        title: "Ledger & settlement",
        detail:
          "The ledger records the payment, commission, and cash adjustment so cash is never paid out twice.",
      },
    ],
  },
  {
    id: "role-wallets",
    title: "Role-Based Wallets & Settlements",
    shortDescription:
      "Dedicated wallets for Residents, Providers, Society Admins, and Shop Owners with transparent balances, refunds, and COD reconciliation.",
    category: "Payments & Wallets",
    status: "V1",
    iconName: "Wallet",
    summary:
      "Every participant has a role-specific wallet backed by a single immutable central ledger. V2 collective bookings reuse this exact same V1 wallet and settlement system.",
    problemSolved:
      "Prevents confusion around cash-in-hand vs. online earnings, commission deductions, refunds, and withdrawal eligibility.",
    whyUseful:
      "Provides complete financial clarity: every credit, debit, commission, refund, and settlement is traceable with unique transaction IDs.",
    whatUsersCanDo: [
      "Residents: receive refund credits and use wallet balance for eligible future payments.",
      "Service Providers: track online earnings, COD cash adjustments, commissions, pending vs. withdrawable balance, and request payouts.",
      "Society Admins: receive eligible commissions, incentives, and approved adjustments (never full booking values).",
      "Shop Owners: track shop order earnings separately from Neighbourhood Business Booster expenses.",
    ],
    whoBenefits: [
      "All platform participants—Residents, Service Providers, Society Admins, and Shop Owners.",
    ],
    importantCapabilities: [
      "Immutable ledger: completed entries are never silently edited; corrections use reversal or adjustment entries.",
      "Accurate COD reconciliation: Net Payable = Online Earnings + Eligible Earnings − Platform Commission − Cash Already Collected ± Adjustments.",
      "Automated refund workflows to resident wallet or original payment method.",
    ],
    businessRules: [
      "Cash already collected by a provider via COD is deducted from their net payable so the platform never pays out collected cash a second time.",
      "Negative wallet balance & COD blocking: if a provider's cash held exceeds earnings and reaches the configured negative limit (e.g., −₹2,000 illustrative), new COD bookings are blocked until they repay via Clear Outstanding Balance.",
      "Pending, restricted, or already-settled funds cannot be withdrawn, and a provider with a negative balance cannot withdraw.",
      "Every refund references the original transaction; duplicate refund credits are blocked, and money never collected is never refunded.",
    ],
    limitationsAndEdgeCases: [
      "A negative balance restricts new COD bookings and withdrawals, but does not cancel already-accepted bookings and still allows Online Payment bookings.",
      "A screenshot or an unverified payment attempt never restores COD access—repayment must be verified in the ledger.",
    ],
    relatedFeatureIds: ["flexible-payments", "business-booster"],
    example: {
      title: "COD + Online Settlement Example",
      body: "A provider completes a ₹1,000 COD job (12% commission = ₹120) and a ₹500 online job (commission = ₹60). They keep the ₹1,000 cash, owe ₹180 total commission, and receive ₹320 net payable from the online job (₹440 − ₹120).",
    },
  },
  {
    id: "business-booster",
    title: "Neighbourhood Business Booster",
    shortDescription:
      "Help local shops and service businesses reach nearby residents with radius-based profiles, alerts, follower posts, and measurable reach.",
    category: "Local Business",
    status: "Coming Soon",
    iconName: "Store",
    summary:
      "Neighbourhood Business Booster connects local shops—such as bakeries, salons, hardware stores, groceries, and stationery shops—with residents living nearby.",
    problemSolved:
      "Helps local businesses gain visibility in their immediate neighbourhood without relying on vague promises or expensive broad advertising.",
    whyUseful:
      "Residents discover trustworthy shops around the corner, while shop owners get measurable local reach (profile views, followers, and alert delivery).",
    whatUsersCanDo: [
      "Create a business profile with address, hours, photos, contact details, and product catalogue.",
      "Reach residents within a defined radius (1 km free Basic, 3 km Plus, 5 km Pro).",
      "Send targeted 'New in your neighbourhood' alerts and post updates for followers.",
      "Track profile views, followers, and alert reach in analytics.",
    ],
    whoBenefits: [
      "Local Shop Owners looking to attract and retain nearby neighbourhood customers.",
      "Residents discovering convenient local stores and neighbourhood offers.",
    ],
    importantCapabilities: [
      "Tiered visibility plans: Business Basic (Free, 1 km, 1 alert), Business Plus (₹299/month, 3 km, 2 alerts/month), Business Pro (₹799/month, 5 km, 4 alerts/month), Grand Opening pack (₹499 one-time), and Single boost (₹99/alert).",
      "Shop order earnings (online and COD) tracked in the Shop Owner Wallet.",
    ],
    businessRules: [
      "Booster plans are paid via Shop Owner Wallet or Digital Payment and tracked as separate Booster transactions.",
      "Booster fees are promotional expenses and are never automatically deducted from shop order sales.",
      "Suvilan reports measurable local reach (alert delivery, profile views, followers) rather than guaranteeing a fixed number of sales.",
    ],
    limitationsAndEdgeCases: [
      "Neighbourhood alerts are batched and capped per user so residents are not overwhelmed by notifications.",
    ],
    relatedFeatureIds: ["spare-parts-discovery", "role-wallets"],
  },
  {
    id: "spare-parts-discovery",
    title: "Spare-Parts & Material Discovery",
    shortDescription:
      "Find nearby hardware, plumbing, and electrical suppliers when a home service job needs replacement parts or materials.",
    category: "Local Business",
    status: "Coming Soon",
    iconName: "PackageSearch",
    summary:
      "When a technician or resident discovers during a job that a part is needed (such as a tap cartridge or switchboard), Suvilan surfaces nearby listed suppliers and their catalogues.",
    problemSolved:
      "Saves time during repairs when a technician or homeowner does not know which nearby shop carries the required spare part.",
    whyUseful:
      "Connects the services marketplace directly with local merchants without Suvilan needing to own or stock physical inventory.",
    whatUsersCanDo: [
      "Discover nearby hardware, plumbing, and electrical shops listed on Suvilan.",
      "View shop contact details, location, and available product catalogues.",
      "Coordinate parts purchase locally so the repair can be completed promptly.",
    ],
    whoBenefits: [
      "Technicians who can source parts faster without delaying jobs.",
      "Residents who get quicker repairs.",
      "Local Material Suppliers who receive relevant local inquiries.",
    ],
    importantCapabilities: [
      "Location-based supplier discovery integrated into the local ecosystem.",
      "Merchant store profiles with product catalogues and inquiries.",
    ],
    businessRules: [
      "Suvilan shows nearby shops and catalogues; it does not own or stock spare parts itself.",
      "Supplier referral or transaction partnerships are planned as a future expansion once agreements are in place.",
    ],
    limitationsAndEdgeCases: [
      "Inventory availability depends on the local merchant's listed catalogue and direct inquiry.",
    ],
    relatedFeatureIds: ["business-booster", "individual-booking"],
  },
  {
    id: "residential-groups",
    title: "Residential Groups",
    shortDescription:
      "Discover your apartment or colony group, request to join with Group Admin approval, and connect with neighbours in one shared community.",
    category: "Community & Pools",
    status: "Coming Soon",
    iconName: "Building2",
    summary:
      "In V2, a Residential Group represents an entire residential community or area (such as an apartment complex or housing colony), managed by a Group Admin.",
    problemSolved:
      "Gives residents of a building or neighbourhood one verified digital home to organize shared service needs without duplicate, fragmented groups.",
    whyUseful:
      "Creates the foundation for Service Pools and society-wide bookings while keeping membership verified through Group Admin approval.",
    whatUsersCanDo: [
      "Discover existing Residential Groups in their locality before creating a new one.",
      "Submit a join request to an existing group and get approved by the Group Admin.",
      "Submit a request to create a new Residential Group if none exists for their area (residents or Society Admins).",
      "Manage group membership requests as a Group Admin.",
    ],
    whoBenefits: [
      "Residents who want to connect and coordinate services with verified neighbours.",
      "Society Admins managing community membership and shared service needs.",
    ],
    importantCapabilities: [
      "Geolocation-aware group discovery.",
      "Duplicate residential group prevention in the same geographical area.",
      "One Residential Group can host multiple independent Service Pools.",
    ],
    businessRules: [
      "Only one Residential Group is permitted per community or geographical area.",
      "Join requests are reviewed and accepted or rejected by the Group Admin.",
      "Group Admins manage membership but cannot set or override service provider discount slabs.",
    ],
    limitationsAndEdgeCases: [
      "If a resident's join request is rejected, they do not become a member of that group and cannot join its Service Pools.",
      "This capability is part of V2 and is not available in V1.",
    ],
    relatedFeatureIds: [
      "service-pools",
      "discount-slabs",
      "neighbour-networking",
    ],
  },
  {
    id: "service-pools",
    title: "Community-Powered Service Pools",
    shortDescription:
      "Pool similar service requests within your Residential Group—or across an entire society—to unlock provider-defined collective discounts.",
    category: "Community & Pools",
    status: "Coming Soon",
    iconName: "Users",
    summary:
      "In V2, residents inside a Residential Group who need the same service (like Plumbing or AC Repair) can form or join a Service Pool, submit their own home requirements, and book together.",
    problemSolved:
      "Stops neighbours from booking the exact same technician type separately at full individual cost when they could coordinate together.",
    whyUseful:
      "Providers save travel and acquisition effort by serving multiple homes in one community, and residents can unlock provider-defined group discounts with the ₹19 platform fee waived.",
    whatUsersCanDo: [
      "Create a Service Pool inside a Residential Group (creator becomes Pool Admin) with category, deadline, and proposed time window.",
      "Discover and join open pools in your group, or leave a pool before it closes.",
      "Submit individual service requirements (issue, address, preferred schedule).",
      "Society Admins can create society-wide bulk Service Pools using the same system.",
      "Review the selected provider quotation and independently accept or reject your own order and choose Online Payment or Cash/COD.",
    ],
    whoBenefits: [
      "Residents saving on collective service needs with zero ₹19 platform fee.",
      "Society Admins coordinating society-wide maintenance.",
      "Service Providers fulfilling multiple confirmed jobs in one location.",
    ],
    importantCapabilities: [
      "Clear hierarchy: One Residential Group → Multiple Service Pools → Multiple Residents in Each Pool.",
      "Per-resident independent decision and payment method (Online or COD).",
      "8% platform commission on the final discounted amount (vs. 12% individual).",
    ],
    businessRules: [
      "Joining a pool and submitting requirements does NOT create a confirmed order.",
      "The Pool Admin selects ONE provider quotation and shares it with participants.",
      "Only confirmed, accepted orders count toward the provider's discount slab—never the total number of group or pool members.",
      "If fewer residents confirm than estimated and the final price increases, every confirming resident must re-accept the updated price.",
    ],
    limitationsAndEdgeCases: [
      "Suvilan never raises a resident's payable amount silently when pool participation drops.",
      "Part of V2 (Coming Soon); not available in V1.",
    ],
    relatedFeatureIds: [
      "residential-groups",
      "discount-slabs",
      "flexible-payments",
    ],
    steps: [
      {
        title: "Create or join a pool",
        detail:
          "A resident or Society Admin creates a pool inside their Residential Group; neighbours join and submit their requirements.",
      },
      {
        title: "Request & select quotation",
        detail:
          "The Pool Admin requests quotes from providers and selects one quotation to share.",
      },
      {
        title: "Independent confirmation",
        detail:
          "Each resident accepts or rejects their own quote and picks Online Payment or Cash/COD.",
      },
      {
        title: "Final slab & service",
        detail:
          "The provider's discount slab is applied to confirmed orders only, and services are scheduled.",
      },
    ],
  },
  {
    id: "discount-slabs",
    title: "Provider-Defined Discount Slabs",
    shortDescription:
      "Service providers configure their own tiered discount slabs based on confirmed participant counts—never imposed by admins.",
    category: "Community & Pools",
    status: "Coming Soon",
    iconName: "Percent",
    summary:
      "In V2 collective bookings, discounts are configured and funded by each Service Provider through their own category-specific discount slabs.",
    problemSolved:
      "Protects technician margins while giving residents transparent, predictable group pricing as more confirmed orders join a pool.",
    whyUseful:
      "Providers decide what discount makes sense for their business, and residents see exactly how confirmed participation affects their per-home price.",
    whatUsersCanDo: [
      "Service Providers configure custom discount slabs per service category.",
      "Pool participants view provisional and final per-home pricing based on confirmed orders.",
    ],
    whoBenefits: [
      "Service Providers who retain full control over their pricing and margins.",
      "Residents who get transparent collective pricing.",
    ],
    importantCapabilities: [
      "Validated slab structure: no gaps, no overlaps, inclusive bounds, and an open-ended final slab (e.g., 8+).",
      "Automatic recalculation if confirmed order count differs from initial interest.",
    ],
    businessRules: [
      "Discount slabs are owned exclusively by the Service Provider; Society Admins and Group Admins cannot impose or edit them.",
      "Only confirmed, accepted orders count toward the slab.",
      "Platform commission (8%) is calculated on the final discounted service amount.",
    ],
    limitationsAndEdgeCases: [
      "If 9 residents show interest (e.g., 15% illustrative slab) but only 6 confirm (e.g., 10% illustrative slab), residents must re-accept the higher final price before orders are finalized.",
    ],
    relatedFeatureIds: ["service-pools", "provider-quotations"],
    example: {
      title: "Illustrative Provider Slab Example (Not a Fixed Rule)",
      body: "A provider might configure: 1–2 confirmed jobs → 0%, 3–4 → 5%, 5–7 → 10%, 8+ → 15%. These numbers are illustrative examples only—each provider sets their own ranges and percentages.",
    },
  },
  {
    id: "neighbour-networking",
    title: "Hyperlocal Neighbour Networking",
    shortDescription:
      "Opt-in local discovery, interest groups, community events, and volunteer help requests with safety moderation tools.",
    category: "Community & Pools",
    status: "Coming Soon",
    iconName: "HeartHandshake",
    summary:
      "Planned for a later phase, Hyperlocal Neighbour Networking helps residents connect around shared interests, local events, and neighbourhood help requests.",
    problemSolved:
      "Helps neighbours who live in the same community get to know each other and coordinate non-commercial local activities safely.",
    whyUseful:
      "Builds local trust and community engagement—for example, book clubs, morning running groups, parents' groups, blood-donation volunteer requests, or society sports days.",
    whatUsersCanDo: [
      "Opt into discovery within a selected radius or restrict visibility to their own society.",
      "Add interest tags, create events or help requests, join groups, and message other residents.",
      "Use safety tools including phone/ID verification badges and block/report controls.",
    ],
    whoBenefits: [
      "Residents looking to build stronger, more supportive neighbourhood connections.",
    ],
    importantCapabilities: [
      "Visibility controls (radius-based or own-society only).",
      "Community rules, reporting, and moderation workflows.",
    ],
    businessRules: [
      "No direct charge at launch; designed for community engagement and retention.",
      "Will only launch once moderation, reporting, and safety response processes are fully ready.",
    ],
    limitationsAndEdgeCases: [
      "Planned for a future phase after core marketplace and V2 pools are established.",
    ],
    relatedFeatureIds: ["residential-groups"],
  },
];

export const ILLUSTRATIVE_DISCOUNT_SLABS = [
  { range: "1–2 confirmed jobs", discount: "0%", note: "Base individual rate" },
  { range: "3–4 confirmed jobs", discount: "5%", note: "Small group example" },
  { range: "5–7 confirmed jobs", discount: "10%", note: "Medium pool example" },
  { range: "8+ confirmed jobs", discount: "15%", note: "Large pool example" },
];

export const BUSINESS_BOOSTER_PLANS = [
  {
    name: "Business Basic",
    price: "Free",
    radius: "1 km radius",
    alerts: "1 neighbourhood alert",
    highlights: ["Business profile & hours", "Local discovery listing"],
  },
  {
    name: "Business Plus",
    price: "₹299 / month",
    radius: "3 km radius",
    alerts: "2 alerts / month",
    highlights: ["Basic reach analytics", "Profile views & followers"],
    featured: true,
  },
  {
    name: "Business Pro",
    price: "₹799 / month",
    radius: "5 km radius",
    alerts: "4 alerts / month",
    highlights: ["Promoted placement", "Follower insights & analytics"],
  },
  {
    name: "Grand Opening Pack",
    price: "₹499 one-time",
    radius: "Launch boost",
    alerts: "Extra alert + 7-day feed boost",
    highlights: ["Built for new local shops", "Single boost also at ₹99/alert"],
  },
];

export const COMING_SOON_ITEMS = [
  {
    title: "Residential Groups & Admin Approval",
    description:
      "Discover your apartment or colony group, request to join with Group Admin approval, and prevent duplicate groups in the same area.",
    iconName: "Building2" as const,
    featureId: "residential-groups",
  },
  {
    title: "Community-Powered Service Pools",
    description:
      "Organize shared service requests inside your Residential Group, compare provider quotations, and book together with zero ₹19 fee.",
    iconName: "Users" as const,
    featureId: "service-pools",
  },
  {
    title: "Society-Wide Service Pools",
    description:
      "Society Admins can coordinate society-wide bulk service bookings using the same transparent provider-defined discount engine.",
    iconName: "Layers" as const,
    featureId: "service-pools",
  },
  {
    title: "Provider-Defined Discount Slabs",
    description:
      "Providers configure their own tiered discount slabs per category, applied strictly to confirmed orders.",
    iconName: "Percent" as const,
    featureId: "discount-slabs",
  },
  {
    title: "Hyperlocal Neighbour Networking",
    description:
      "Opt-in interest groups, local events, and volunteer help requests with phone/ID verification badges and moderation.",
    iconName: "HeartHandshake" as const,
    featureId: "neighbour-networking",
  },
  {
    title: "Annual Maintenance & Expansion Plans",
    description:
      "Planned recurring care packages (such as AC servicing and pest control), supplier partnerships, Society Pro, and regional languages.",
    iconName: "CalendarClock" as const,
    featureId: null,
  },
];

export const ROLE_BENEFITS = [
  {
    id: "residents",
    label: "Residents",
    headline: "Reliable services at home, with collective savings ahead",
    description:
      "Find trusted local technicians in V1, pay online or in cash, and unlock V2 community Service Pools when neighbours need the same service.",
    points: [
      "Browse service categories and compare technician profiles, ratings, distance, and indicative prices (V1).",
      "Request quotations, coordinate via in-app chat, and rebook trusted technicians from history (V1).",
      "Pay flexibly via Online Payment or Cash/COD per booking, with refunds credited to wallet or original method (V1).",
      "Discover local shops and neighbourhood alerts through Business Booster (V1).",
      "Join your Residential Group and participate in Service Pools for provider-defined discounts with the ₹19 fee waived (V2 Coming Soon).",
    ],
  },
  {
    id: "society-admins",
    label: "Society Admins",
    headline: "Structured community coordination without pricing guesswork",
    description:
      "Manage verified residential membership, organize society-wide service needs in V2, and track eligible society earnings transparently.",
    points: [
      "Dedicated Society Admin wallet for eligible commissions, incentives, and approved adjustments (V1).",
      "Create and manage your community's Residential Group and approve or reject join requests (V2 Coming Soon).",
      "Prevent duplicate residential groups in the same geographical area (V2 Coming Soon).",
      "Launch society-wide Service Pools using the same provider-defined discount engine (V2 Coming Soon).",
      "Optional Society Pro capabilities planned for later phases once communities actively use announcements and reports.",
    ],
  },
  {
    id: "service-providers",
    label: "Service Providers",
    headline:
      "More nearby jobs, 0% repeat-customer commission, and clear payouts",
    description:
      "Build a verified profile, quote transparently, keep 100% of verified own repeat-job earnings, and manage online and cash settlements in one wallet.",
    points: [
      "KYC-verified profile with skills, service area, portfolio, and lead management (V1).",
      "0% platform commission on your verified own repeat customer bookings (V1).",
      "Clear settlement tracking across Online Earnings and Cash/COD via Collect Payment (V1).",
      "Discover nearby material suppliers when a job needs spare parts (V1).",
      "Configure your own category discount slabs and serve multiple confirmed homes in one society via V2 Service Pools (Coming Soon).",
    ],
  },
  {
    id: "shop-owners",
    label: "Shop Owners",
    headline: "Put your local shop in front of nearby residents",
    description:
      "Create a neighbourhood storefront, send radius-based alerts, track measurable reach, and keep shop earnings separate from Booster expenses.",
    points: [
      "List your shop profile with address, hours, photos, and product catalogue (V1).",
      "Send targeted 'New in your neighbourhood' alerts within 1 km, 3 km, or 5 km (V1).",
      "View measurable analytics: profile views, followers, and alert reach (V1).",
      "Accept Online Payment or Cash/COD for shop orders with dedicated Shop Owner Wallet tracking (V1).",
      "Pay for Booster plans via wallet or digital payment—never deducted silently from shop sales (V1).",
    ],
  },
];

export const WHY_SUVILAN_POINTS = [
  {
    title: "Built around neighbourhoods, not just isolated bookings",
    description:
      "Suvilan connects home service bookings, local shops, and residential communities in one shared hyperlocal ecosystem.",
  },
  {
    title: "Zero commission on verified repeat customers",
    description:
      "Unlike platforms that penalize repeat relationships, Suvilan charges 0% commission on a technician's verified own repeat bookings.",
  },
  {
    title: "Provider-owned discount slabs in V2",
    description:
      "Providers configure their own discount slabs based on confirmed orders—never forced by admins—so collective savings stay sustainable.",
  },
  {
    title: "Multiple Service Pools per Residential Group",
    description:
      "One community group can run independent pools for plumbing, electrical, AC care, and more at the same time.",
  },
  {
    title: "True payment flexibility with clean reconciliation",
    description:
      "Both Online Payment and Cash/COD are supported everywhere, backed by one immutable wallet ledger and Collect Payment verification.",
  },
  {
    title: "Measurable local visibility for neighbourhood shops",
    description:
      "Business Booster focuses on transparent local reach—profile views, followers, and alert delivery—rather than vague promises.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is Suvilan?",
    answer:
      "Suvilan is a hyperlocal platform that helps residents find reliable home-service professionals, connect with nearby neighbours, and discover local businesses. Version 1 (V1) delivers individual service booking, online and cash payments, role-based wallets, and Neighbourhood Business Booster. Version 2 (V2) adds Residential Groups and Service Pools.",
  },
  {
    question: "What problems does Suvilan solve?",
    answer:
      "Suvilan addresses the difficulty residents face in finding reliable local technicians and coordinating shared service needs, helps service providers reach nearby customers and retain repeat clients without off-app friction, and gives local shops measurable visibility within their immediate neighbourhood.",
  },
  {
    question: "What is available in V1 vs. Coming Soon (V2)?",
    answer:
      "V1 includes individual service discovery and booking, quotations, Online Payment and Cash/COD with Collect Payment, role-based wallets and settlements. Residential Groups, Service Pools, society-wide pools, provider-defined discount slabs, and neighbour networking,spare-parts supplier discovery, and Neighbourhood Business Booster are part of V2 (Coming Soon).",
  },
  {
    question: "How can residents join a neighbourhood group (V2)?",
    answer:
      "In V2, residents can discover existing Residential Groups in their locality and send a join request. The Group Admin reviews and accepts or rejects the request. If a request is rejected, the resident does not become a member of that group.",
  },
  {
    question:
      "Can residents create groups, and how are duplicates prevented (V2)?",
    answer:
      "Yes. Both Society Admins and individual residents can submit a request to create a Residential Group if no suitable group exists in their locality. The system prevents duplicate residential groups in the same geographical area.",
  },
  {
    question:
      "What is a Service Pool, and can one group have multiple pools (V2)?",
    answer:
      "A Service Pool is a group of residents inside one Residential Group who want the same type of service collectively (such as a Plumbing Pool or AC Repair Pool). Yes—one Residential Group can have many independent Service Pools, and a resident can join several pools. Society Admins can also create society-wide Service Pools.",
  },
  {
    question:
      "What happens if a Service Pool does not reach its expected participation (V2)?",
    answer:
      "Joining a pool does not create a confirmed order—only confirmed, accepted orders count toward a provider's discount slab. If fewer residents confirm than provisionally estimated and the final per-home price rises, every confirming resident must explicitly re-accept the new price. Suvilan never raises a resident's payable amount silently.",
  },
  {
    question:
      "How are group discounts decided and who configures discount slabs (V2)?",
    answer:
      "Each Service Provider configures and funds their own discount slabs per service category (with no gaps or overlaps, and an open-ended final slab). Society Admins and Group Admins cannot impose fixed discount percentages or edit a provider's slabs.",
  },
  {
    question: "What happens if a provider rejects a service request?",
    answer:
      "If a provider rejects an individual service request or a resident declines a quotation, the booking is not confirmed and no payment is captured.",
  },
  {
    question: "What payment methods are supported and how does Cash/COD work?",
    answer:
      "Suvilan supports both Online Payment (via payment gateway) and Cash/COD across individual bookings, V2 collective bookings (chosen independently per resident), and shop orders. For COD, the provider completes the work and taps Collect Payment in the app to record the physical cash received. If the amount differs from the expected total, a variance reason is required and flagged for review.",
  },
  {
    question:
      "What happens if an online payment fails or a booking is refunded?",
    answer:
      "Pending, failed, or unverified online payments are never treated as completed earnings. When an eligible booking is cancelled or refunded, online refunds are credited to the resident's wallet or original payment method, while COD adjustments are recorded through wallet ledger entries after verifying cash was collected. Duplicate refunds are blocked.",
  },
  {
    question:
      "What is the Suvilan Wallet, and what happens if a provider hits the negative balance limit?",
    answer:
      "Every role—Resident, Service Provider, Society Admin, and Shop Owner—has a wallet backed by an immutable ledger. For providers, COD cash collected is deducted during settlement so cash isn't paid twice. If a provider's negative balance reaches the configured limit (e.g., −₹2,000 illustrative), new COD bookings and withdrawals are blocked while Online Payment bookings remain available and existing bookings are not cancelled. Repaying digitally via Clear Outstanding Balance restores COD eligibility once verified.",
  },
  {
    question: "How do Service Providers earn and participate on Suvilan?",
    answer:
      "Technicians complete KYC, set up their skills, service area, and portfolio, and receive individual booking requests (and V2 pool requests). Standard commission is 12% on new individual bookings (8% on V2 collective bookings), and 0% on a technician's verified own repeat customer bookings. Optional Technician Pro tools are also planned.",
  },
  {
    question:
      "What is Neighbourhood Business Booster and how do local shop owners benefit?",
    answer:
      "Neighbourhood Business Booster lets local shops create a storefront profile, send radius-based 'New in your neighbourhood' alerts (from 1 km free Basic up to 5 km Pro), gain followers, and view measurable analytics like profile views and alert reach. Shop order earnings are tracked separately from Booster plan expenses.",
  },
];
