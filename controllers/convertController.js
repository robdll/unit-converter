function convertController() {
  this.getNum = function (input) {
    let result;
    input.replace(/\d/g, (p, i) => {
      result = input
        .split("")
        .slice(0, i + 1)
        .join("");
      if (result.indexOf("/") >= 0) {
        let num1 = result.split("/")[0];
        let num2 = result.split("/")[1];
        result = !num1 || !num2 ? null : num1 / num2;
      } else {
        result =
          result.indexOf(".") >= 0
            ? Number.parseFloat(result)
            : Number.parseInt(result);
      }
    });
    if (typeof result === "undefined") {
      result = 1;
    }
    return result;
  };

  this.getUnit = function (input) {
    let result;
    input.replace(/\d/g, (p, i) => {
      result = input
        .split("")
        .slice(i + 1)
        .join("");
    });
    if (typeof result === "undefined") {
      result = input;
    }
    if (result === "l") {
      result = result.toUpperCase();
    }
    return result !== "L" ? result.toLowerCase() : result;
  };

  this.getReturnUnit = function (initUnit) {
    let availableConversion = {
      gal: "L",
      GAL: "L",
      l: "gal",
      L: "gal",
      lbs: "kg",
      LBS: "kg",
      kg: "lbs",
      Kg: "lbs",
      KG: "lbs",
      mi: "km",
      Mi: "km",
      MI: "km",
      km: "mi",
      Km: "mi",
      KM: "mi",
    };
    return availableConversion[initUnit];
  };

  this.isValidUnit = function (unit) {
    let validUnits = [
      "gal",
      "GAL",
      "l",
      "L",
      "lbs",
      "LBS",
      "kg",
      "Kg",
      "KG",
      "mi",
      "Mi",
      "MI",
      "km",
      "Km",
      "KM",
    ];
    return validUnits.includes(unit);
  };

  this.spellOutUnit = function (unit) {
    let availableUnits = {
      gal: "gallons",
      GAL: "gallons",
      l: "liters",
      L: "liters",
      lbs: "pounds",
      LBS: "pounds",
      kg: "kilograms",
      Kg: "kilograms",
      KG: "kilograms",
      mi: "miles",
      Mi: "miles",
      MI: "miles",
      km: "kilometers",
      Km: "kilometers",
      KM: "kilometers",
    };
    return availableUnits[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "GAL":
      case "gal": {
        result = initNum * galToL;
        break;
      }
      case "l":
      case "L": {
        result = initNum / galToL;
        result = result.toFixed(5);
        break;
      }
      case "LBS":
      case "lbs": {
        result = initNum * lbsToKg;
        result = result.toFixed(5);
        break;
      }
      case "kg":
      case "Kg":
      case "KG": {
        result = initNum / lbsToKg;
        result = result.toFixed(5);
        break;
      }

      case "Mi":
      case "MI":
      case "mi": {
        result = initNum * miToKm;
        result = result.toFixed(5);
        break;
      }
      case "KM":
      case "km":
      case "Km": {
        result = initNum / miToKm;
        result = result.toFixed(5);
        break;
      }
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = convertController;
