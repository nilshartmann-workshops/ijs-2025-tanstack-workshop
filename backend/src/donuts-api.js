const allDonuts = [
  {
    id: "1",
    name: "Cinnamon Stack Overflow",
    description:
      "Too many cinnamon layers, not enough memory – please reboot (and take a bite).",
    image: "d-1.png",
    likes: 72,
  },
  {
    id: "2",
    name: "Donut.js",
    description:
      "Frontend-friendly, pink, and totally unpredictable state – but always snackable.",
    image: "d-2.png",
    likes: 95,
  },

  {
    id: "3",
    name: "Chocolate Runtime Error",
    description:
      "Looked harmless – until the glaze went rogue and sprinkles hit the stack.",
    image: "d-3.png",
    likes: 82,
  },
  {
    id: "4",
    name: "Sprinkle Injection",
    description:
      "Like dependency injection, but sweeter. Sprinkles everywhere – even in legacy code.",
    image: "d-4.png",
    likes: 53,
  },
  {
    id: "5",
    name: "Cream Injection Failure",
    description:
      "A creamy bug in the pipeline – do *not* deploy to production (or do, who cares?).",
    image: "d-5.png",
    likes: 38,
  },
  {
    id: "6",
    name: "Merge Berliner",
    description:
      "Got filled with jam during rebase – now full of conflicts (and flavor).",
    image: "d-6.png",
    likes: 71,
  },
];

const allComments = [
  {
    id: "cmt_001",
    text: "Tastes like a commit without review – risky, but brilliant.",
    author: "code_cruncher42",
    donut_id: "3",
  },
  {
    id: "cmt_002",
    text: "Sprinkle level: 11/10. My linter would complain, but I won’t.",
    author: "frontendFlo",
    donut_id: "3",
  },
  {
    id: "cmt_003",
    text: "Cinnamon shock! Accidentally ate my keyboard.",
    author: "snackoverflow",
    donut_id: "2",
  },
  {
    id: "cmt_004",
    text: "Got a stacktrace with every bite – I love it.",
    author: "debuggery",
    donut_id: "2",
  },
  {
    id: "cmt_005",
    text: "The merge was sweeter than expected. Still caused a conflict in my stomach.",
    author: "gitgourmet",
    donut_id: "1",
  },
  {
    id: "cmt_006",
    text: "It forked my heart.",
    author: "issue_lover",
    donut_id: "1",
  },
  {
    id: "cmt_007",
    text: "So reactive, I swear this donut used useEffect.",
    author: "jsx_junkie",
    donut_id: "4",
  },
  {
    id: "cmt_008",
    text: "State management? This donut handles it with flavor.",
    author: "hooked_on_sweets",
    donut_id: "4",
  },
  {
    id: "cmt_009",
    text: "Glaze exception on bite #3 – worth it.",
    author: "choco_dev",
    donut_id: "5",
  },
  {
    id: "cmt_010",
    text: "I’d schedule this for every sprint.",
    author: "scrummybaker",
    donut_id: "5",
  },
  {
    id: "cmt_011",
    text: "Not production-ready, but solid for staging.",
    author: "pipeline_peter",
    donut_id: "6",
  },
  {
    id: "cmt_012",
    text: "The bug tasted better than expected.",
    author: "qa_queen",
    donut_id: "6",
  },
];

module.exports = function setupDonutsApi(app) {
  app.get("/api/donuts", (req, res) => {

    let result = [...allDonuts];

    const orderBy = req.query.orderBy;

    if (orderBy === "likes") {
      result.sort((a, b) => b.likes - a.likes);
    } else if (orderBy === "name") {
      result.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (!!orderBy) {
      return res.status(400).json({"error": `Invalid orderBy '${orderBy}'`})
    }

    return res.status(200).json(result);
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
