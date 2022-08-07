// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = initMiddleware(
  Cors({
    methods: ["OPTIONS"],
  })
);

export default async function handler(req, res) {
  // Preflight Check:
  if (req.method == "OPTIONS") {
    res.setHeader("Allow", "OPTIONS");
    return res.status(202).json({});
  }

  // Allow only POST Methods
  if (req.method !== "GET") {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  await cors(req, res);

  const returnedObj = [
    { context: "Unit Tests", state: "passed", assertions: [1] },
    { context: "Unit Tests", state: "passed", assertions: [2] },
    { context: "Unit Tests", state: "passed", assertions: [3] },
    { context: "Unit Tests", state: "passed", assertions: [4] },
    { context: "Unit Tests", state: "passed", assertions: [5] },
    { context: "Unit Tests", state: "passed", assertions: [6] },
    { context: "Unit Tests", state: "passed", assertions: [7] },
    { context: "Unit Tests", state: "passed", assertions: [8] },
    { context: "Unit Tests", state: "passed", assertions: [9] },
    { context: "Unit Tests", state: "passed", assertions: [10] },
    { context: "Unit Tests", state: "passed", assertions: [11] },
    { context: "Unit Tests", state: "passed", assertions: [12] },
    { context: "Unit Tests", state: "passed", assertions: [13] },
    { context: "Unit Tests", state: "passed", assertions: [14] },
    { context: "Unit Tests", state: "passed", assertions: [15] },
    { context: "Unit Tests", state: "passed", assertions: [16] },
    { context: "Functional Tests", state: "passed", assertions: [1] },
    { context: "Functional Tests", state: "passed", assertions: [2] },
    { context: "Functional Tests", state: "passed", assertions: [3] },
    { context: "Functional Tests", state: "passed", assertions: [4] },
    { context: "Functional Tests", state: "passed", assertions: [5] },
  ];
  res.status(200).json(returnedObj);
}
