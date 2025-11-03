export const fadeSlide = (direction = "up", duration = 0.6) => {
  let x = 0, y = 0;
  switch (direction) {
    case "up": y = 30; break;
    case "down": y = -30; break;
    case "left": x = 30; break;
    case "right": x = -30; break;
  }
  return {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration, ease: "easeOut" } },
  };
};

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
