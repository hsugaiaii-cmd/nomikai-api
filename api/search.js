export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { scene, budget } = req.body;

  res.status(200).json({
    shops: [
      {
        name: "渋谷うまい店",
        access: "渋谷駅 徒歩3分",
        price: budget + "円",
        reason: scene + "にぴったり",
        booking: "Web",
        url: "https://example.com"
      },
      {
        name: "新宿居酒屋",
        access: "新宿駅 徒歩5分",
        price: budget + "円",
        reason: "アクセス良好",
        booking: "電話",
        url: "https://example.com"
      }
    ]
  });
}
