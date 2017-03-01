const semver = require('semver');

module.exports = function(version, versions) {
  if (!semver.valid(version)) {
    return { version, invalid: true };
  }

  let index = versions.indexOf(version);
  if (index === -1) {
    throw new Error(`"${version}" is not found in the passed "versions" array.`);
  }

  let previousVersions = versions
    .filter((_, _index) => _index < index)
    .filter(version => semver.valid(version));

  let previous = previousVersions.slice(-1)[0] || null;
  return { version, previous };
};
