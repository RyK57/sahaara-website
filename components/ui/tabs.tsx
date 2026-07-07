"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { defaultTransition, springSnappy } from "@/lib/motion";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-0 data-[orientation=horizontal]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list relative inline-flex w-fit items-center justify-center rounded-lg p-[3px] group-data-[orientation=horizontal]/tabs:h-auto group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        line: "gap-1 bg-transparent text-muted-foreground",
        accent: "gap-1 bg-transparent text-accent-foreground/75",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

const TabsTriggerMotion = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { "data-state"?: string }
>(function TabsTriggerMotion({ className, children, ...props }, ref) {
  const isActive = props["data-state"] === "active";

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "relative z-10 inline-flex h-auto min-h-9 w-full flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "text-foreground/60 hover:text-foreground",
        "group-data-[variant=accent]/tabs-list:text-accent-foreground/75 group-data-[variant=accent]/tabs-list:hover:text-accent-foreground",
        "group-data-[variant=line]/tabs-list:bg-transparent",
        "data-[state=active]:bg-transparent data-[state=active]:text-accent-foreground",
        "group-data-[variant=accent]/tabs-list:data-[state=active]:text-primary-foreground",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-1.5">
        {children}
      </span>
      {isActive && (
        <motion.span
          layoutId="sahaara-tab-pill"
          className={cn(
            "absolute inset-0 rounded-lg shadow-sm group-data-[variant=line]/tabs-list:rounded-lg",
            "bg-accent group-data-[variant=accent]/tabs-list:bg-primary",
          )}
          style={{ zIndex: 0 }}
          transition={springSnappy}
        />
      )}
    </button>
  );
});

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger asChild {...props}>
      <TabsTriggerMotion className={className}>{children}</TabsTriggerMotion>
    </TabsPrimitive.Trigger>
  );
}

function ActiveTabPanel({ children }: { children: React.ReactNode }) {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useLayoutEffect(() => {
    const root = panelRef.current?.parentElement;
    if (!root) return;

    const syncActive = () => {
      setIsActive(root.getAttribute("data-state") === "active");
    };

    syncActive();
    const observer = new MutationObserver(syncActive);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-state", "hidden"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={panelRef}
      initial={false}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={defaultTransition}
    >
      {children}
    </motion.div>
  );
}

function TabsContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    >
      <ActiveTabPanel>{children}</ActiveTabPanel>
    </TabsPrimitive.Content>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
