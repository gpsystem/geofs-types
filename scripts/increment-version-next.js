const fs = require("fs");
const { join } = require("path");
const packageJson = require("../package.json");

function getNewVersion() {
  let { version } = packageJson;
  if (/^[0-9].[0-9].[0-9]$/g.test(version)) {
    // the version number is three digits, ex. 1.2.3
    version += "-next.1"; // 1.2.3 => 1.2.3-next.1
  } else if (/^[0-9].[0-9].[0-9]-next.[0-9]$/g.test(version)) {
    // the version number is already a next version, ex. 1.2.3-next.4
    let versionArray = version.split(".");
    let nextNumber = Number(versionArray[3]);
    versionArray[3] = nextNumber + 1;
    version = versionArray.join("."); // 1.2.3-next.4 => 1.2.3-next.5
  } else {
    // unrecognizable, trim
    version = version.substring(0, 5) + "-next.1";
  }

  packageJson.version = version;
}

getNewVersion();

fs.writeFileSync(
  join(__dirname, "../package.json"),
  JSON.stringify(packageJson)
);
