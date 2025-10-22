const allDonuts = [
  {
    id: "1",
    name: "Cinnamon Stack Overflow",
    description:
      "Zu viele Lagen Zimt, zu wenig Speicherplatz – bitte neu starten (und essen).",
    image: "d-1.png",
    likes: 72,
  },
  {
    id: "2",
    name: "Donut.js",
    description:
      "Frontend-freundlich, pink, mit unvorhersehbarem State – aber immer snackable.",
    image: "d-2.png",
    likes: 95,
  },

  {
    id: "3",
    name: "Chocolate Runtime Error",
    description:
      "Sah harmlos aus – bis die Glasur durchdrehte und Streusel im Stack landeten.",
    image: "d-3.png",
    likes: 82,
  },
  {
    id: "4",
    name: "Sprinkle Injection",
    description:
      "Wie Dependency Injection, nur süßer. Streusel überall – auch im Legacy-Code.",
    image: "d-4.png",
    likes: 53,
  },
  {
    id: "5",
    name: "Cream Injection Failure",
    description:
      "Ein cremiger Bug in der Pipeline – bitte nicht in Produktion deployen (oder doch?).",
    image: "d-5.png",
    likes: 38,
  },
  {
    id: "6",
    name: "Merge Berliner",
    description:
      "Hat sich beim Rebase mit Marmelade gefüllt – jetzt voller Konflikte (und Geschmack).",
    image: "d-6.png",
    likes: 71,
  },
];

const allComments = [
  {
    id: "cmt_001",
    text: "Schmeckt nach einem Commit ohne Review – riskant, aber genial.",
    author: "code_cruncher42",
    donut_id: "3",
  },
  {
    id: "cmt_002",
    text: "Streusel-Level: 11/10. Mein Linter würde meckern, aber ich nicht.",
    author: "frontendFlo",
    donut_id: "3",
  },
  {
    id: "cmt_003",
    text: "Zimt-Schock! Habe aus Versehen meine Tastatur gegessen.",
    author: "snackoverflow",
    donut_id: "2",
  },
  {
    id: "cmt_004",
    text: "Stacktrace beim Reinbeißen – ich liebe es.",
    author: "debuggery",
    donut_id: "2",
  },
  {
    id: "cmt_005",
    text: "Der Merge war süßer als erwartet. Trotzdem Konflikt im Magen.",
    author: "gitgourmet",
    donut_id: "1",
  },
  {
    id: "cmt_006",
    text: "Hat mein Herz geforkt.",
    author: "issue_lover",
    donut_id: "1",
  },
  {
    id: "cmt_007",
    text: "So reaktiv, ich glaube der Donut hat selbst useEffect benutzt.",
    author: "jsx_junkie",
    donut_id: "4",
  },
  {
    id: "cmt_008",
    text: "State-Management? Dieser Donut regelt das mit Geschmack.",
    author: "hooked_on_sweets",
    donut_id: "4",
  },
  {
    id: "cmt_009",
    text: "Glasur-exception bei Biss 3 – worth it.",
    author: "choco_dev",
    donut_id: "5",
  },
  {
    id: "cmt_010",
    text: "Würde ich in jeden Sprint einplanen.",
    author: "scrummybaker",
    donut_id: "5",
  },
  {
    id: "cmt_011",
    text: "Nicht production-ready, aber staging-tauglich.",
    author: "pipeline_peter",
    donut_id: "6",
  },
  {
    id: "cmt_012",
    text: "Der Bug war leckerer als erwartet.",
    author: "qa_queen",
    donut_id: "6",
  },
];

module.exports = function setupDonutsApi(app) {
  app.get("/api/donuts", (req, res) => {
    return res.status(200).json(allDonuts);
  });

  app.get("/api/donuts/:donutId", (req, res) => {
    const theDonut = allDonuts.find((d) => d.id === req.params.donutId);
    if (!theDonut) {
      return res
        .status(404)
        .json({ error: `Donut not found with id '${req.params.donutId}'` });
    }

    return res.status(200).json(theDonut);
  });

  app.put("/api/donuts/:donutId/likes", (req, res) => {
    const donut = allDonuts.find((d) => d.id === req.params.donutId);
    if (!donut) {
      return res.status(404).json({
        error: `Donut not found with id '${req.params.donutId}' 😢`,
      });
    }

    donut.likes = donut.likes + 1;

    return res.status(200).json(donut);
  });

  app.get("/api/donuts/:donutId/comments", (req, res) => {
    const thisComments = allComments.filter(
      (c) => c.donut_id === req.params.donutId
    );

    console.log("COMMENTS", thisComments);

    return res.status(200).json(thisComments);
  });
};
