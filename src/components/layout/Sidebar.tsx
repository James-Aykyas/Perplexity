import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DiscoverIcon, HomeIcon, PerplexityLogo, SpacesIcon, ThreadsIcon } from "@/components/ui/icons";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const navigationItems = [
    { name: "Threads", icon: <ThreadsIcon /> },
    { name: "Home", icon: <HomeIcon /> },
    { name: "Discover", icon: <DiscoverIcon /> },
    { name: "Spaces", icon: <SpacesIcon /> },
  ];

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 h-full bg-[#111111] z-50 flex flex-col sidebar-transition",
        isExpanded ? "w-[240px]" : "w-[60px]",
        className
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full p-3 gap-2">
        <div className="flex items-center justify-center py-4">
          <motion.div
            className="flex items-center gap-2 text-white"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.8 }}
          >
            <PerplexityLogo />
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  className="font-semibold whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Perplexity
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "relative flex justify-start gap-3 text-muted-foreground hover:text-white hover:bg-[#222222]",
                isExpanded ? "pl-3 pr-6" : "justify-center"
              )}
            >
              {item.icon}
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}