import { MotionProps } from 'framer-motion';

// Animation variants for the sidebar
export const sidebarVariants = {
  expanded: { width: 240, transition: { duration: 0.3, ease: "easeInOut" } },
  collapsed: { width: 60, transition: { duration: 0.3, ease: "easeInOut" } }
};

// Animation variants for text elements
export const textVariants: MotionProps = {
  initial: { opacity: 0, width: 0 },
  animate: { opacity: 1, width: "auto", transition: { duration: 0.2 } },
  exit: { opacity: 0, width: 0, transition: { duration: 0.2 } }
};