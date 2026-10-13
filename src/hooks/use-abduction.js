/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                          useAbduction CUSTOM HOOK                          */
/* -------------------------------------------------------------------------- */
const DELAYS = { arriving: 900, beaming: 1000, leaving: 800};
const NEXT = { arriving: "beaming", beaming: "leaving" };

function useAbduction({ onComplete }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [selectedId, setSelectedId] = useState(null);
  const [phase, setPhase] = useState("idle");

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const start = (id) => {
    if (phase !== "idle") return;
    setSelectedId(id);
    setPhase("arriving");
  };

  useEffect(() => {
    if (phase === "idle") return;
    const timeout = setTimeout(() => {
      if (phase === "leaving") {
        setPhase("idle");
        onCompleteRef.current(selectedId);
        setSelectedId(null);
      } else {
        setPhase(NEXT[phase]);
      }
    }, DELAYS[phase]);

    return () => clearTimeout(timeout);
  }, [phase, selectedId]);

/* -------------------------------- RENDERING ------------------------------- */
  return {
    selectedId, 
    phase,
    start
  }
};

export default useAbduction;