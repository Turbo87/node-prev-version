const semver = require('semver');

module.exports = function(version, versions) {
  if (!semver.valid(version)) {
    return { version, invalid: true };
  }

  return {
    version,
  };
};
