import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul style={container}>
      {order.map((backgroundColor) => (
        <motion.li
          key={backgroundColor}
          layout
          transition={spring}
          style={{ ...item, backgroundColor }}
        />
      ))}
    </ul>
  );
}

const initialOrder = ["#143D60", "#27667B", "#A0C878", "#DDEB9D"];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const container: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const item: React.CSSProperties = {
  width: 20,
  height: 20,
  borderRadius: "10px",
};
