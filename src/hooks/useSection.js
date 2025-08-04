import { useContext } from "react";
import { SectionContext } from "../context/SectionContextDefinition";

export const useSection = () => useContext(SectionContext);
