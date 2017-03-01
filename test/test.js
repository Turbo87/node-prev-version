const fs = require('fs');
const expect = require('chai').expect;

const prevVersion = require('..');

describe('prevVersion', function() {
  let files = fs.readdirSync(`${__dirname}/fixtures`);

  files.forEach(file => {
    let content = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${file}`));
    let fileTitle = content.title || file;

    describe(fileTitle, function() {
      let versions;
      beforeEach(function() {
        versions = content.versions.map(it => it.version);
      });

      content.versions.forEach(item => {
        let testTitle = item.invalid ?
          `"${item.version}" is invalid` :
          `"${item.version}" has previous version "${item.previous}"`;

        it(testTitle, function() {
          expect(prevVersion(item.version, versions)).to.deep.equal(item);
        });
      });
    });
  });
});
