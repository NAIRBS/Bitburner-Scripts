/** @param {NS} ns **/
export async function main(ns) {
var i = 0;

while (i < 25) {
	var hostname = "Server-" + i;
	if (ns.serverExists(hostname)) {
			ns.killall(hostname); 
			await ns.scp("hack.js", hostname);
			var serverRam = ns.getServerRam(hostname);
			ns.exec("hack.js", hostname, Math.floor(serverRam[0]/2.2));

			//await ns.scp("share.js", hostname);
			//ns.exec("share.js", hostname, Math.floor(serverRam[0]/4));
		}
	++i;
}
}
