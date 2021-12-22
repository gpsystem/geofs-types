import * as fs from "fs";
import { join } from "path";

const packageJson: {
  version: string;
  [key: string]: any;
} = JSON.parse(fs.readFileSync(join(__dirname, "../package.json"), "utf-8"));

function getNewVersion() {
  let { version } = packageJson;
  const versionArray = version.split(".");
  /**
   * matches x.x.x,
   * where x is a number 0-9
   */
  const threeDigitsRegex = /^[0-9].[0-9].[0-9]$/g;
  /**
   * matches x.x.x-next.y,
   * where x is a number 0-9,
   * and y is a number 0-99
   */
  const nextVersionRegex = /^[0-9].[0-9].[0-9]-next.([1-9][0-9]?|^100)$/g;

  if (threeDigitsRegex.test(version)) {
    // the version number is three digits, ex. 1.2.3
    version += "-next.1"; // 1.2.3 => 1.2.4-next.1
  } else if (nextVersionRegex.test(version)) {
    // the version number is already a next version, ex. 1.2.3-next.4
    const nextNumber = Number(versionArray[3]);
    versionArray[3] = String(nextNumber + 1);
    version = versionArray.join("."); // 1.2.3-next.4 => 1.2.3-next.5
  } else {
    // unparseable, throw
    throw new Error("version is unparseable");
  }

  packageJson.version = version;
}

getNewVersion();

fs.writeFileSync(
  join(__dirname, "../package.json"),
  JSON.stringify(packageJson)
);
