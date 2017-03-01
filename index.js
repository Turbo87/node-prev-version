const semver = require('semver');

module.exports = function(version, versions) {
  if (!semver.valid(version)) {
    return { version, invalid: true };
  }

  let index = versions.indexOf(version);
  if (index === -1) {
    throw new Error(`"${version}" is not found in the passed "versions" array.`);
  }

  let previous = versions[index - 1] || null;
  return { version, previous };
};
