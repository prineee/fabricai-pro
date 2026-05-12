export async function analyzeGarment(
    fileName: string,
    width: number,
    height: number
  ) {
    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );
  
    const lower =
      fileName.toLowerCase();
  
    // SHIRT DETECTION
  
    if (
      lower.includes("shirt") ||
      lower.includes("formal") ||
      width > 700
    ) {
      return `
  FABRICAI PRO — AI ANALYSIS
  
  GARMENT:
  Men's Shirt
  
  AI DETECTION:
  Formal woven upperwear
  
  FABRIC:
  Cotton Poplin
  
  WIDTH:
  58/60"
  
  CONSUMPTION:
  1.84 Meter
  
  ORDER:
  1000 Pieces
  
  TOTAL FABRIC:
  1840 Meter
  
  AVAILABLE FABRIC:
  2000 Meter
  
  REMAINING:
  160 Meter
  
  SMV:
  18.5 Minutes
  
  MACHINES:
  • SNLS
  • Overlock
  • Button Attach
  • Button Hole
  
  COSTING:
  Fabric Cost:
  ₹217
  
  CM Cost:
  ₹48
  
  Trim Cost:
  ₹22
  
  TOTAL:
  ₹298/Piece
  
  AI RECOMMENDATION:
  Use wider width fabric for better marker efficiency.
  
  STATUS:
  Production Ready
  `;
    }
  
    // TROUSER
  
    if (
      lower.includes("trouser") ||
      lower.includes("pant") ||
      lower.includes("jean")
    ) {
      return `
  FABRICAI PRO — AI ANALYSIS
  
  GARMENT:
  Trouser
  
  FABRIC:
  Cotton Twill
  
  CONSUMPTION:
  1.33 Yard
  
  ORDER:
  1200 Pieces
  
  TOTAL:
  1596 Yard
  
  SMV:
  24.5 Minutes
  
  COST:
  ₹475/Piece
  
  OPERATIONS:
  • Pocket Join
  • Fly Attach
  • Waistband
  • Bottom Hem
  
  STATUS:
  Production Ready
  `;
    }
  
    // HOODIE
  
    if (
      lower.includes("hoodie")
    ) {
      return `
  FABRICAI PRO — AI ANALYSIS
  
  GARMENT:
  Hoodie
  
  FABRIC:
  Fleece
  
  GSM:
  320
  
  CONSUMPTION:
  2.2 Meter
  
  SMV:
  28 Minutes
  
  COST:
  ₹580/Piece
  
  STATUS:
  Winterwear Production
  `;
    }
  
    // DRESS
  
    if (
      lower.includes("dress") ||
      lower.includes("frock")
    ) {
      return `
  FABRICAI PRO — AI ANALYSIS
  
  GARMENT:
  Women's Dress
  
  CONSUMPTION:
  4.5 Meter
  
  OUTER:
  2.57 Meter
  
  LINING:
  1.93 Meter
  
  SMV:
  32 Minutes
  
  COST:
  ₹620/Piece
  
  STATUS:
  Premium Production
  `;
    }
  
    // TSHIRT
  
    if (
      lower.includes("tshirt") ||
      lower.includes("tee")
    ) {
      return `
  FABRICAI PRO — AI ANALYSIS
  
  GARMENT:
  Knitted T-Shirt
  
  FABRIC:
  Single Jersey
  
  GSM:
  180
  
  CONSUMPTION:
  0.95 Meter
  
  SMV:
  9.5 Minutes
  
  COST:
  ₹145/Piece
  
  STATUS:
  Ready
  `;
    }
  
    // DEFAULT
  
    return `
  FABRICAI PRO — SMART AI ANALYSIS
  
  Uploaded File:
  ${fileName}
  
  Image Size:
  ${width} × ${height}
  
  AI could not confidently identify garment.
  
  Suggested rename examples:
  
  • formal-shirt.jpg
  • cargo-trouser.png
  • hoodie-techpack.pdf
  
  STATUS:
  Awaiting Better Detection
  `;
  }