import type { CSSProperties } from "react";

type DecorativeLinesVariant = "light" | "dark";

export default function DecorativeLines({
  variant,
  className,
  style,
}: {
  variant: DecorativeLinesVariant;
  className?: string;
  style?: CSSProperties;
}) {
  const COLORS: Record<
    DecorativeLinesVariant,
    Record<"12" | "11" | "10" | "9" | "8" | "7" | "6" | "5" | "4", string>
  > = {
    dark: {
      "12": "bg-white/12",
      "11": "bg-white/11",
      "10": "bg-white/10",
      "9": "bg-white/9",
      "8": "bg-white/8",
      "7": "bg-white/7",
      "6": "bg-white/6",
      "5": "bg-white/5",
      "4": "bg-white/4",
    },
    light: {
      "12": "bg-black/12",
      "11": "bg-black/11",
      "10": "bg-black/10",
      "9": "bg-black/9",
      "8": "bg-black/8",
      "7": "bg-black/7",
      "6": "bg-black/6",
      "5": "bg-black/5",
      "4": "bg-black/4",
    },
  };

  const c = (opacity: "12" | "11" | "10" | "9" | "8" | "7" | "6" | "5" | "4") =>
    COLORS[variant][opacity];

  return (
    <div
      className={`absolute inset-0 pointer-events-none${className ? ` ${className}` : ""}`}
      style={style}
    >
      {/* Pattern 1 - Top Left to Bottom Right */}
      <div className={`absolute top-0 left-0 w-px h-[25%] ${c("12")}`}></div>
      <div
        className={`absolute top-[25%] left-0 w-[35%] h-px ${c("12")}`}
      ></div>
      <div
        className={`absolute top-[25%] left-[35%] w-px h-[30%] ${c("12")}`}
      ></div>
      <div
        className={`absolute top-[55%] left-[35%] w-[35%] h-px ${c("12")}`}
      ></div>
      <div
        className={`absolute top-[55%] left-[70%] w-px h-[45%] ${c("12")}`}
      ></div>
      <div
        className={`absolute bottom-0 left-[70%] w-[30%] h-px ${c("12")}`}
      ></div>

      {/* Pattern 2 - Top Left to Bottom Right */}
      <div
        className={`absolute top-0 left-[15%] w-px h-[30%] ${c("10")}`}
      ></div>
      <div
        className={`absolute top-[30%] left-[15%] w-[30%] h-px ${c("10")}`}
      ></div>
      <div
        className={`absolute top-[30%] left-[45%] w-px h-[28%] ${c("10")}`}
      ></div>
      <div
        className={`absolute top-[58%] left-[45%] w-[32%] h-px ${c("10")}`}
      ></div>
      <div
        className={`absolute top-[58%] right-[23%] w-px h-[42%] ${c("10")}`}
      ></div>
      <div
        className={`absolute bottom-0 right-[23%] w-[23%] h-px ${c("10")}`}
      ></div>

      {/* Pattern 3 - Top Right to Bottom Left */}
      <div
        className={`absolute top-0 right-0 w-px h-[28%] ${c("8")}`}
      ></div>
      <div
        className={`absolute top-[28%] right-[12%] w-[12%] h-px ${c("8")}`}
      ></div>
      <div
        className={`absolute top-[28%] right-[12%] w-px h-[32%] ${c("8")}`}
      ></div>
      <div
        className={`absolute top-[60%] right-[28%] w-[16%] h-px ${c("8")}`}
      ></div>
      <div
        className={`absolute top-[60%] right-[28%] w-px h-[40%] ${c("8")}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-[72%] h-px ${c("8")}`}
      ></div>

      {/* Pattern 4 - Top Left to Bottom Right */}
      <div className={`absolute top-0 left-[8%] w-px h-[22%] ${c("7")}`}></div>
      <div
        className={`absolute top-[22%] left-[8%] w-[18%] h-px ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[22%] left-[26%] w-px h-[25%] ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[47%] left-[26%] w-[30%] h-px ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[47%] left-[56%] w-px h-[28%] ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[75%] left-[56%] w-[44%] h-px ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[75%] right-0 w-px h-[25%] ${c("7")}`}
      ></div>

      {/* Pattern 5 - Top Left to Bottom Right */}
      <div
        className={`absolute top-0 left-[52%] w-px h-[20%] ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[20%] left-[52%] w-[22%] h-px ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[20%] right-[26%] w-px h-[18%] ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[38%] right-[26%] w-[18%] h-px ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[38%] right-[8%] w-px h-[62%] ${c("7")}`}
      ></div>
      <div
        className={`absolute bottom-0 right-[8%] w-[8%] h-px ${c("7")}`}
      ></div>

      {/* Pattern 6 - Top Right to Bottom Left */}
      <div
        className={`absolute top-0 right-[25%] w-px h-[18%] ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[18%] right-[50%] w-[25%] h-px ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[18%] right-[50%] w-px h-[35%] ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[53%] right-[50%] w-[15%] h-px ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[53%] right-[35%] w-px h-[47%] ${c("6")}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-[65%] h-px ${c("6")}`}
      ></div>

      {/* Pattern 7 - Top Left to Bottom Left */}
      <div
        className={`absolute top-0 left-[22%] w-px h-[15%] ${c("5")}`}
      ></div>
      <div
        className={`absolute top-[15%] left-[5%] w-[17%] h-px ${c("5")}`}
      ></div>
      <div
        className={`absolute top-[15%] left-[5%] w-px h-[85%] ${c("5")}`}
      ></div>

      {/* Pattern 8 - Top Left to Bottom Left */}
      <div
        className={`absolute top-0 left-[40%] w-px h-[12%] ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[12%] left-[20%] w-[20%] h-px ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[12%] left-[20%] w-px h-[38%] ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[50%] left-[3%] w-[17%] h-px ${c("6")}`}
      ></div>
      <div
        className={`absolute top-[50%] left-[3%] w-px h-[50%] ${c("6")}`}
      ></div>
      <div className={`absolute bottom-0 left-0 w-[3%] h-px ${c("6")}`}></div>

      {/* Pattern 9 - Top Right to Bottom Right */}
      <div
        className={`absolute top-0 right-[12%] w-px h-[20%] ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[20%] right-[15%] w-[3%] h-px ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[20%] right-[15%] w-px h-[25%] ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[45%] right-[30%] w-[15%] h-px ${c("7")}`}
      ></div>
      <div
        className={`absolute top-[45%] right-[30%] w-px h-[55%] ${c("7")}`}
      ></div>
      <div
        className={`absolute bottom-0 right-[30%] w-[30%] h-px ${c("7")}`}
      ></div>

      {/* Pattern 10 - Top Left to Bottom Right */}
      <div
        className={`absolute top-0 left-[18%] w-px h-[24%] ${c("4")}`}
      ></div>
      <div
        className={`absolute top-[24%] left-[18%] w-[28%] h-px ${c("4")}`}
      ></div>
      <div
        className={`absolute top-[24%] left-[46%] w-px h-[36%] ${c("4")}`}
      ></div>
      <div
        className={`absolute top-[60%] left-[46%] w-[38%] h-px ${c("4")}`}
      ></div>
      <div
        className={`absolute top-[60%] right-[16%] w-px h-[40%] ${c("4")}`}
      ></div>
      <div
        className={`absolute bottom-0 right-[16%] w-[16%] h-px ${c("4")}`}
      ></div>
    </div>
  );
}


