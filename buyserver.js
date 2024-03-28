/** @param {NS} ns **/
export async function main(ns) {
	// How much RAM each purchased server will have. In this case, it'll
	// be 8GB.
	//Originally one server at 8gb costs 440k, now at 640gb one server will cost 35.20 Million
	//8     GB server = 0.4400 Mil // 3.6 threads
	//16    GB server = 0.8800 Mil // 7.27 threads
	//32    GB server = 1.7600 Mil // 14.545 threads
	//64    GB server = 3.5200 Mil // 29.0909 threads
	//128   GB server = 7.0400 Mil // 58.1818 threads
	//256   GB server = 14.080 Mil // 116.36363 threads
	//512   GB server = 28.160 Mil // 232.7272 threads
	//1024  GB server = 56.320 Mil // 465.4545 threads
	//2048  GB server = 112.64 Mil // 930.9090 threads
	//4096  GB server = 225.28 Mil // 1861.8181 threads
	//8192  GB server = 450.56 Mil // 3223.6363 threads
	//16384 GB server = 901.12 Mil // 7447.27272727 threads
	//32768 GB server = 1.8022 Bil // 14894.54545454 threads
	//65536 GB server = 3.6044 Bil // 29789.09090909 threads
	//131072 GB server = 7.2089 Bil // 59578.18181818 threads
	//262144 GB server = 14.4179 Bil // 119156.36363636 threads
	//524288 GB server = 28.8358 Bil // 238312.72727272 threads
	//1048576 GB server = 57.6716 Bil // 476625.45454545 threads
	var ram = 32768;
	var servercost = ns.getPurchasedServerCost(ram)
	
	var i = 0;
	// Continuously try to purchase servers until we've reached the maximum
	// amount of servers
	while (i < ns.getPurchasedServerLimit()) {
		if (ns.getServerMoneyAvailable("home") >  servercost) {
			var target = "Server-" + i;
			if (ns.serverExists(target)) {
				++i;
			}
			else {
				var hostname =  ns.purchaseServer(target, ram);
				var serverRam = ns.getServerRam(target);
				await ns.scp("hack.js", hostname);
				ns.exec("hack.js", hostname, Math.floor((serverRam[0] - serverRam[1]) / 2.2));
				++i;
			}
		}
		var moneyavailable = ns.getServerMoneyAvailable("home")
		while (moneyavailable < servercost)
		{
			moneyavailable = ns.getServerMoneyAvailable("home")
			ns.print(servercost);
			await ns.sleep(1000);
		} 
	}
}
