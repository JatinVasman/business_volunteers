import { useContext } from "react";
import { SectionContext } from "../context/SectionContextDefinition";

export const useActiveSection = () => useContext(SectionContext);
