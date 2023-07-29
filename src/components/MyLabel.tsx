export interface MyLabelProps {
  /**
   * How should the text look like?
   */
  label: string;
  /**
   * How large should the label be?
   */
  size?: "text-sm" | "text-base" | "text-lg";
  /**
   * transform the label into uppercase
   */
  allCaps?: boolean;
  /**
   * What color should the label be?
   *
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Set a Custom color
   */
  customColor?: string;
}

function MyLabel({
  label = "No label",
  size = "text-base",
  allCaps = false,
  color,
  customColor,
}: MyLabelProps) {
  return (
    <span
      className={`${size} ${allCaps && "uppercase"} ${color}`}
      style={{ color: customColor }}
    >
      {label}
    </span>
  );
}

export default MyLabel;
