import convertController from "../../controllers/convertController";

export default function handler(req, res) {
  // Preflight Check:
  if (req.method == "OPTIONS") {
    res.setHeader("Allow", "POST");
    return res.status(202).json({});
  }

  // Allow only POST Methods
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  if (!req.query) {
    return res
      .status(400)
      .json({ data: "invalid number", error: "invalid number" });
  }

  const convertHandler = new convertController();
  const input = req.query.input;
  const initNum = convertHandler.getNum(input);
  const initUnit = convertHandler.getUnit(input);
  const isInvalidNum = !initNum;
  const isInvalidUnit = !convertHandler.isValidUnit(initUnit);
  if (isInvalidNum && isInvalidUnit) {
    return res.status(200).json({
      data: "invalid unit and number",
      error: "invalid number and unit",
    });
  }
  if (isInvalidUnit) {
    return res
      .status(200)
      .json({ data: "invalid unit", error: "invalid unit" });
  }
  if (isInvalidNum) {
    return res
      .status(200)
      .json({ data: "invalid number", error: "invalid number" });
  }
  const returnNum = convertHandler.convert(initNum, initUnit);
  const returnUnit = convertHandler.getReturnUnit(initUnit);
  const retString = convertHandler.getString(
    initNum,
    initUnit,
    returnNum,
    returnUnit
  );
  const retObj = {
    initNum,
    initUnit,
    returnNum,
    returnUnit,
    string: retString,
  };
  res.status(200).json(retObj);
}
