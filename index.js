const semver = require('semver');

module.exports = function(version, versions) {
  if (!semver.valid(version)) {
    return { version, invalid: true };
  }

  let index = versions.indexOf(version);
  if (index === -1) {
    throw new Error(`"${version}" is not found in the passed "versions" array.`);
  }

  let isPreRelease = semver.prerelease(version) !== null;

  let previousVersions = versions
    .filter((_, _index) => _index < index)
    .filter(_version => semver.valid(_version))
    .filter(_version => semver.gte(version, _version))
    .filter(_version => {
      let _isPreRelease = semver.prerelease(_version) !== null;
      return isPreRelease || !_isPreRelease;
    })
    .sort(semver.compare);

  let previous = previousVersions.slice(-1)[0] || null;
  return { version, previous };
};
