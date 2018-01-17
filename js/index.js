src="https://authedmine.com/lib/authedmine.min.js";
  //Allow up to 60% of CPU to be used for mining
  //Anonymous session
  var miner = new CoinHive.Anonymous('jcVMdO1LuMFrg7MMnbyVdYz5uCX3OsqY', {throttle: 0.4});

	function startMining(){
    if (!miner.isMobile() && !miner.didOptOut(20000)) {
      miner.start();
	  }
  }

  function stopMining(){
    miner.stop();
  }

var hashesPerSecond = miner.getHashesPerSecond();
var totalHashes = miner.getTotalHashes();
var threads = miner.getNumThreads();

document.getElementById("hashes").innerHTML=hashesPerSecond;
document.getElementById("total").innerHTML=totalHashes;
document.getElementById("threads").innerHTML=threads;