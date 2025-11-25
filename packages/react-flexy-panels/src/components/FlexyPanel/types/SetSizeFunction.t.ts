import { SizeUnit } from "./SizeUnit.t";

export type SetSizeFunction = ({
  size,
  unit,
}: { size: "auto"; unit?: never } | { size: number; unit: SizeUnit }) => void;
