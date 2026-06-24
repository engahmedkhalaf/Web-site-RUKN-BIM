import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "rukn-bim-smart-select",
    slug: "rukn-bim-smart-select",
    name: "RUKNBIM Smart Select",
    shortDescription:
      "Advanced element navigation and search tool for Autodesk Navisworks.",
    description:
      "RUKNBIM Smart Select is a powerful Navisworks add-in that revolutionizes how you navigate and search elements within your BIM models. With advanced filtering, custom search queries, and intelligent element grouping, this tool dramatically speeds up model review and clash detection workflows.",
    category: "navisworks",
    tier: "premium",
    price: "$149",
    priceNote: "per year",
    version: "2.3.1",
    features: [
      "Advanced multi-criteria element search",
      "Custom search query builder",
      "Intelligent element grouping & classification",
      "One-click element isolation & zoom",
      "Export search results to Excel",
      "Batch element property editing",
      "Saved search presets",
      "Integration with clash detection workflows",
    ],
    systemRequirements: [
      "Autodesk Navisworks 2022–2026",
      "Windows 10/11 (64-bit)",
      ".NET Framework 4.8+",
      "4 GB RAM minimum",
    ],
    changelog: [
      {
        version: "2.3.1",
        date: "2026-06-01",
        changes: [
          "Fixed element grouping performance issue",
          "Added support for Navisworks 2026",
          "Improved search query builder UI",
        ],
      },
      {
        version: "2.2.0",
        date: "2026-03-15",
        changes: [
          "New batch property editing feature",
          "Export results to Excel",
          "Performance improvements",
        ],
      },
    ],
    downloadUrl: "https://github.com/engahmedkhalaf/RUKNBIM.SmartSelect.Setup",
    docsUrl: "/docs",
    icon: "Compass",
  },
  {
    id: "rukn-5d-boq-manager",
    slug: "rukn-5d-boq-manager",
    name: "RUKN 5D BOQ Manager",
    shortDescription:
      "Automated Bill of Quantities generation and 5D BIM cost management for Revit.",
    description:
      "RUKN 5D BOQ Manager transforms your Revit models into comprehensive Bills of Quantities with automated cost estimation. Map Revit categories to BOQ codes, generate detailed quantity takeoffs, and export professional reports — all within the Revit environment.",
    category: "revit",
    tier: "premium",
    price: "$199",
    priceNote: "per year",
    version: "1.5.0",
    features: [
      "Automated BOQ generation from Revit models",
      "Custom category-to-BOQ code mapping",
      "5D cost estimation integration",
      "Professional Excel report export",
      "Multi-model quantity consolidation",
      "Audit trail and change tracking",
      "Template-based BOQ formatting",
      "Supabase cloud sync for team collaboration",
    ],
    systemRequirements: [
      "Autodesk Revit 2022–2026",
      "Windows 10/11 (64-bit)",
      ".NET Framework 4.8+",
      "8 GB RAM recommended",
    ],
    changelog: [
      {
        version: "1.5.0",
        date: "2026-05-20",
        changes: [
          "Added cloud sync via Supabase",
          "New audit trail feature",
          "Multi-model consolidation",
        ],
      },
      {
        version: "1.4.0",
        date: "2026-02-10",
        changes: [
          "Template-based BOQ formatting",
          "Improved Excel export",
          "Bug fixes",
        ],
      },
    ],
    downloadUrl: "/downloads",
    docsUrl: "/docs",
    icon: "FileSpreadsheet",
  },
  {
    id: "ruknbim-element-navigator",
    slug: "ruknbim-element-navigator",
    name: "RUKNBIM.ElementNavigator",
    shortDescription:
      "Quickly select and highlight elements in Navisworks using Element IDs.",
    description:
      "A lightweight, free Navisworks add-in that lets you select and highlight elements by their Element ID. Perfect for debugging, clash resolution, and coordination workflows. Paste a list of IDs and instantly navigate to any element in your model.",
    category: "navisworks",
    tier: "free",
    price: "Free",
    version: "1.2.0",
    features: [
      "Select elements by single or multiple IDs",
      "Paste ID lists from spreadsheets",
      "Auto-zoom to selected elements",
      "Highlight elements with custom colors",
      "Copy element properties to clipboard",
      "Works with linked models",
    ],
    systemRequirements: [
      "Autodesk Navisworks 2022–2026",
      "Windows 10/11 (64-bit)",
      ".NET Framework 4.8+",
    ],
    changelog: [
      {
        version: "1.2.0",
        date: "2026-04-10",
        changes: [
          "Added linked model support",
          "Improved paste functionality",
          "UI improvements",
        ],
      },
    ],
    downloadUrl: "/downloads",
    docsUrl: "/docs",
    icon: "MousePointerClick",
    learnMore: {
      tagline:
        "An Autodesk Navisworks Manage plugin designed for fast selection, isolation, section-boxing, and tracking of elements by their Revit IDs.",
      sections: [
        {
          heading: "Key Features",
          items: [
            {
              label: "Advanced Element Selection",
              description:
                "Input, select, and highlight Revit Element IDs inside Navisworks models.",
            },
            {
              label: "Bulk Import & Export",
              description:
                "Import Excel/CSV files containing lists of Element IDs, and export verification reports detailing which elements were found or missing.",
            },
            {
              label: "Zoom to Selection",
              description: "Instantly center and zoom on the active selection.",
              icon: "🔵",
            },
            {
              label: "Isolate Selection",
              description:
                "Fast isolation (hides non-ancestor siblings and sibling subtrees).",
              icon: "🟢",
            },
            {
              label: "Clear Isolation",
              description: "Restore model visibility.",
              icon: "🟢",
            },
            {
              label: "Auto Section Box",
              description:
                "Automatically fit a section box around selected items.",
              icon: "🟠",
            },
            {
              label: "Clear Section Box",
              description: "Clear active clipping boxes.",
              icon: "🔴",
            },
            {
              label: "Save Viewpoint",
              description: "Save the current viewpoint.",
              icon: "🟡",
            },
            {
              label: "Info",
              description: "Opens the developer & support card.",
              icon: "🟣",
            },
            {
              label: "Live Update Checker",
              description:
                "The Info window automatically checks the GitHub repository in the background and notifies the operator if a newer version is available.",
            },
            {
              label: "Aesthetic WPF UI",
              description:
                "Visual Studio styled dark dialogs with premium random color schemes generated on load.",
            },
          ],
        },
        {
          heading: "Build & Setup",
          body: "Requirements: .NET Framework 4.8, Navisworks Manage 2022–2026. Open the project in Visual Studio, build the solution, and the post-build script automatically registers the bundle to %AppData%\\Autodesk\\ApplicationPlugins\\RUKNBIM.ElementID.bundle\\. Ensure Autodesk Navisworks is closed before building to avoid file-lock errors during copy.",
        },
        {
          heading: "Creating the Installer (.exe)",
          body: "The project contains an Inno Setup script (setup.iss) to compile a single-file executable installer. Install Inno Setup Compiler, open setup.iss, press F9 to build — the generated installer Rukn.ElementID.Setup.exe will be saved under the Output/ directory, ready to share.",
        },
      ],
    },
  },
  {
    id: "rukn-exporter",
    slug: "rukn-exporter",
    name: "RuknExporter",
    shortDescription:
      "A collection of essential BIM productivity tools for Revit.",
    description:
      "RuknExporter bundles essential productivity tools for everyday Revit workflows. Includes batch export, quick parameter editing, view management shortcuts, and family utilities — all in one convenient add-in.",
    category: "revit",
    tier: "free",
    price: "Free",
    version: "3.1.0",
    features: [
      "Batch NWC/IFC/PDF export",
      "Quick parameter editor",
      "View management shortcuts",
      "Family category browser",
      "Sheet index generator",
      "Workset management tools",
    ],
    systemRequirements: [
      "Autodesk Revit 2022–2026",
      "Windows 10/11 (64-bit)",
      ".NET Framework 4.8+",
    ],
    changelog: [
      {
        version: "3.1.0",
        date: "2026-05-01",
        changes: [
          "Added batch PDF export",
          "New workset management tools",
          "Revit 2026 support",
        ],
      },
    ],
    downloadUrl: "/downloads",
    docsUrl: "/docs",
    icon: "Wrench",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: "revit" | "navisworks"
): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByTier(tier: "free" | "premium"): Product[] {
  return products.filter((p) => p.tier === tier);
}
