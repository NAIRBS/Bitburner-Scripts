/** @param {NS} ns **/
export async function main(ns) {
	var target = "home";
	var i = 0;
	ns.scriptKill("hack.js", target);
	ns.scriptKill("share.js", target);
	ns.scriptKill("serverclear.js", target);
	ns.exec("serverclear.js", target);
	await ns.sleep(100);
	ns.scriptKill("serverclear.js", target);

	if (ns.serverExists("Server-"+ i)) {
		ns.exec("adjust.js",target);
	}

	var serverRam = ns.getServerRam(target);
	ns.exec("hack.js", target, Math.floor((serverRam[0] - serverRam[1]) / 2.2));
	//ns.exec("share.js", target, Math.floor((serverRam[0] - serverRam[1]) / 4));
}
