import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const NOTIFICATION_CONTEXT = `You are the Afri-Bridge Live Operations Feed generator. Generate realistic, specific logistics operation notifications for a leading African freight forwarding and customs clearing company.

RULES:
- Generate exactly 8 notifications
- Mix of categories: shipment received, in transit, customs cleared, border crossing, delivery completed, port update, documentation, warehouse, delay alert
- Use realistic African locations: Johannesburg, Cape Town, Durban, Maputo, Dar es Salaam, Nairobi, Lagos, Luanda, Lusaka, Harare, Windhoek, Mombasa, Walvis Bay, Gaborone, Bamako
- Use realistic shipment references like AFB-2026-XXXXX
- Use realistic company names as consignees/shippers
- Include specific cargo types: electronics, mining equipment, pharmaceuticals, automotive parts, agricultural products, textiles, industrial machinery, FMCG, chemicals
- Include specific transport modes: road, ocean (FCL/LCL), air freight
- Time references should be recent (today, this morning, 2 hours ago, etc.)
- Be specific about weights, container numbers, border posts
- Include professional logistics terminology (BOL, customs release, manifests, etc.)

OUTPUT FORMAT: Return ONLY a valid JSON array, no markdown, no code fences. Each object must have:
{
  "id": "unique string",
  "category": "one of: received, in_transit, customs, border, completed, port, warehouse, alert, documentation",
  "title": "short title (max 60 chars)",
  "description": "brief description (max 120 chars)",
  "reference": "AFB-2026-XXXXX",
  "location": "city, country",
  "timestamp": "relative time string like '2 min ago', '1 hour ago'",
  "priority": "one of: normal, high, urgent"
}

CATEGORY DISTRIBUTION (approximately):
- 1 received (new shipment booked)
- 2 in_transit (currently moving)
- 1 customs (clearance update)
- 1 border (crossing update)
- 1 completed (delivery done)
- 1 port/ocean update
- 1 alert or documentation`;

interface NotificationItem {
  id: string;
  category: string;
  title: string;
  description: string;
  reference: string;
  location: string;
  timestamp: string;
  priority: string;
}

// Fallback notifications when AI is unavailable
const FALLBACK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "fb-1",
    category: "received",
    title: "New Shipment Booked — Mining Equipment",
    description: "3×40HC containers of mining equipment received from Shanghai. Ready for customs processing at Durban Port.",
    reference: "AFB-2026-48291",
    location: "Durban, South Africa",
    timestamp: "5 min ago",
    priority: "normal",
  },
  {
    id: "fb-2",
    category: "in_transit",
    title: "FCL Cargo En Route — Johannesburg",
    description: "2×20ft containers of automotive parts departed Maputo. ETA Johannesburg DC: 14:00 SAST.",
    reference: "AFB-2026-48187",
    location: "Maputo Corridor",
    timestamp: "12 min ago",
    priority: "normal",
  },
  {
    id: "fb-3",
    category: "customs",
    title: "Customs Release — Pharmaceutical Shipment",
    description: "SARS customs release obtained for temperature-controlled pharma shipment. Awaiting collection at OR Tambo.",
    reference: "AFB-2026-48203",
    location: "Johannesburg, South Africa",
    timestamp: "28 min ago",
    priority: "high",
  },
  {
    id: "fb-4",
    category: "border",
    title: "Border Crossing — Beitbridge Update",
    description: "Cross-border truck cleared at Beitbridge. 1×40HC of textiles en route to Harare. No delays reported.",
    reference: "AFB-2026-48155",
    location: "Beitbridge, Zimbabwe",
    timestamp: "45 min ago",
    priority: "normal",
  },
  {
    id: "fb-5",
    category: "in_transit",
    title: "Air Freight Departed — Nairobi",
    description: "Urgent air cargo of industrial electronics departed Jomo Kenyatta. Connecting via OR Tambo to Luanda.",
    reference: "AFB-2026-48234",
    location: "Nairobi, Kenya",
    timestamp: "1 hour ago",
    priority: "high",
  },
  {
    id: "fb-6",
    category: "completed",
    title: "Delivery Completed — FMCG Distribution",
    description: "Last-mile delivery of 15 pallets FMCG completed to retailer DC in Lusaka. POD uploaded to ATLAS.",
    reference: "AFB-2026-48098",
    location: "Lusaka, Zambia",
    timestamp: "2 hours ago",
    priority: "normal",
  },
  {
    id: "fb-7",
    category: "port",
    title: "Vessel Arrival — Durban Container Terminal",
    description: "MV Maersk Elba arrived at DCT. 5 Afri-Bridge containers aboard. Discharge expected within 24 hours.",
    reference: "AFB-2026-48122",
    location: "Durban, South Africa",
    timestamp: "3 hours ago",
    priority: "normal",
  },
  {
    id: "fb-8",
    category: "alert",
    title: "Weather Alert — Walvis Bay Port",
    description: "Adverse weather conditions at Walvis Bay. Potential 12-hour delay for 2×40HC project cargo discharge.",
    reference: "AFB-2026-48267",
    location: "Walvis Bay, Namibia",
    timestamp: "4 hours ago",
    priority: "urgent",
  },
];

export async function GET() {
  try {
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [
        { role: "system", content: NOTIFICATION_CONTEXT },
        {
          role: "user",
          content: `Generate 8 fresh Afri-Bridge logistics notifications. Current date: ${new Date().toISOString().split("T")[0]}. Return ONLY the JSON array.`,
        },
      ],
      max_tokens: 2000,
      temperature: 0.9,
    });

    const raw = completion.choices?.[0]?.message?.content || "";

    // Parse JSON from response (handle possible markdown fences)
    const jsonStr = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const notifications: NotificationItem[] = JSON.parse(jsonStr);

    // Validate structure
    if (!Array.isArray(notifications) || notifications.length === 0) {
      return NextResponse.json({ notifications: FALLBACK_NOTIFICATIONS });
    }

    return NextResponse.json({ notifications });
  } catch (error: unknown) {
    console.error("Live Updates API error:", error);
    // Graceful fallback
    return NextResponse.json({ notifications: FALLBACK_NOTIFICATIONS });
  }
}
