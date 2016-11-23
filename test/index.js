const expect = require('chai').expect;

describe('sprites-cli', function() {
  this.timeout(5000);
  this.slow(3000);

  // Test example:
  describe('command \'sprt\' run by -h', function() {
    var captured_stdout;

    before(function(done){
      const exec = require('child_process').exec;
      const r = exec('sprt -h',function(error, stdout, stderr){
        if (error) done(error);
        captured_stdout = stdout;
        done();
      });
    });

    it('should print sprt help info', function() {
      console.log(captured_stdout);
      expect(captured_stdout).to.not.equal('');
    });
  });
});