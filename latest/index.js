(function(){
  function bearer(key){ return { 'Authorization': 'Bearer ' + String(key || '') }; }
  module.exports = { bearer };
})();

