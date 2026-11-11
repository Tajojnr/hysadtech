import { siteConfig } from '@/config/site'

interface BotResponse {
  text: string
  quickReplies?: string[]
}

export function getBotResponse(query: string): BotResponse {
  const q = query.toLowerCase().trim()

  // Greetings
  if (/^(hi|hello|sannu|salaam|barka|hey|good|assalam)/.test(q)) {
    return {
      text: "Sannu! Welcome to Hysad Tech (AG Import). I am Hysad AI. How can I assist you today?",
      quickReplies: ["iPhone prices", "Skycargo rates", "Import Class", "Track order"]
    }
  }

  // Contact / WhatsApp / Phone
  if (q.includes("phone") || q.includes("number") || q.includes("contact") || q.includes("whatsapp") || q.includes("call") || q.includes("reach")) {
    return {
      text: `You can contact Hysad Tech directly on WhatsApp or Call:\n\nLine 1: ${siteConfig.contacts.formattedPrimary}\nLine 2: ${siteConfig.contacts.formattedSecondary}\n\nOur team replies within minutes for pre-orders and cargo updates.`,
      quickReplies: ["Shop now", "Track order", "Import Class"]
    }
  }

  // Importation Class / Academy
  if (q.includes("class") || q.includes("course") || q.includes("learn") || q.includes("training") || q.includes("academy") || q.includes("teach")) {
    return {
      text: "Our Online Importation Masterclass teaches you step-by-step how to import from China using Pinduoduo, 1688, supplier verification, and Skycargo shipping. Lessons are in English and Hausa. Visit the Academy page to enroll!",
      quickReplies: ["Class price", "What do I need?", "Enroll now"]
    }
  }

  // Phone Prices / Catalog
  if (q.includes("iphone") || q.includes("samsung") || q.includes("pixel") || q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("how much")) {
    return {
      text: "We offer direct China wholesale prices for iPhone, Samsung, Google Pixel, and accessories. Check our live Shop or Daily Price List for current pre-order rates!",
      quickReplies: ["Open Shop", "View Price List", "Order via WhatsApp"]
    }
  }

  // Shipping / Skycargo
  if (q.includes("ship") || q.includes("cargo") || q.includes("skycargo") || q.includes("china") || q.includes("weight") || q.includes("air") || q.includes("delivery")) {
    return {
      text: "Express Skycargo air freight takes 3-7 days from China to Nigeria. We also handle sea cargo and customs clearance. Track your parcel anytime on our Track page!",
      quickReplies: ["Track parcel", "Sea cargo", "Contact support"]
    }
  }

  // Order Tracking
  if (q.includes("track") || q.includes("where is my") || q.includes("order status") || q.includes("parcel")) {
    return {
      text: "You can track your shipment on our Track page using your Hysad Tech Tracking ID (example: HYD-2025-84920). Enter it there for live flight and delivery status.",
      quickReplies: ["Go to Track page", "Talk to agent"]
    }
  }

  // Hausa fallback
  if (q.includes("nawa") || q.includes("yaya") || q.includes("ina") || q.includes("hausa")) {
    return {
      text: `Sannu! Muna da ingantattun wayoyi daga China (iPhone, Samsung, Pixel) da kuma karin bayani game da Skycargo. Kuna iya kiranmu a ${siteConfig.contacts.formattedPrimary}.`,
      quickReplies: ["Binciko wayoyi", "Track order", "Tuntuɓi mu"]
    }
  }

  // Default
  return {
    text: `Thank you for reaching out to Hysad Tech! You can browse our phone catalog, view the daily price list, or chat directly with our sales team on WhatsApp at ${siteConfig.contacts.formattedPrimary}.`,
    quickReplies: ["Shop phones", "Price list", "Contact us"]
  }
}