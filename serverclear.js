/** @param {NS} ns **/
export async function main(ns) {
var target = "n00dles";
var failedattemptcount = 0;
var successfulattemptcount = 0;

const servers = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "darkweb", "max-hardware", "zer0", "nectar-net", "CSEC", "neo-net", "phantasy", "omega-net", "silver-helix", "the-hub", "netlink", "johnson-ortho", "avmnite-02h", "comptek", "crush-fitness", "catalyst", "syscore", "I.I.I.I", "rothman-uni", "summit-uni", "zb-institute", "lexo-corp", "alpha-ent", "millenium-fitness", "rho-construction", "aevum-police", "galactic-cyber", "aerocorp", "global-pharm", "snap-fitness", "omnia", "unitalife", "deltaone", "defcomm", "solaris", "icarus", "univ-energy", "zeus-med", "infocomm", "taiyang-digital", "zb-def", "nova-med", "titan-labs", "applied-energetics", "microdyne", "run4theh111z", "fulcrumtech", "stormtech", "helios", "vitalife", "kuai-gong", ".", "omnitek", "4sigma", "clarkinc", "powerhouse-fitness", "b-and-a", "blade", "nwo", "ecorp", "megacorp", "fulcrumassets", "The-Cave"];
var failedattempt = [];
var successfulattempt = [];
for(var i=0; i < servers.length; ++i)
{
	target = servers[i];
	var portsopen = 0;
	if(ns.serverExists(target)){
		// If we have the BruteSSH.exe program, use it to open the SSH Port
		// on the target server
		if (ns.fileExists("BruteSSH.exe", "home")) {
			ns.brutessh(target);
			portsopen++;
		}

		// If we have the FTPCrack.exe program, use it to open the FTP Port
		// on the target server
		if (ns.fileExists("FTPCrack.exe", "home")) {
			ns.ftpcrack(target);
			portsopen++;
		}

		// If we have the HTTPWorm.exe program, use it to open the HTTP Port
		// on the target server
		if (ns.fileExists("HTTPWorm.exe", "home")) {
			ns.httpworm(target);
			portsopen++;
		}

		// If we have the SQLInject.exe program, use it to open the SQL Port
		// on the target server
		if (ns.fileExists("SQLInject.exe", "home")) {
			ns.sqlinject(target);
			portsopen++;
		}

		// If we have the relaySMTP.exe program, use it to open the SMTP Port
		// on the target server
		if (ns.fileExists("relaySMTP.exe", "home")) {
			ns.relaysmtp(target);
			portsopen++;
		}

		ns.print(ns.getServerNumPortsRequired(target) + " port(s) needs to be opened.");
		ns.print(portsopen + " port(s) have been opened.");

		// Get root access to target server
		if (ns.hasRootAccess(target) == true) {
			successfulattempt[successfulattemptcount] = target;
			ns.print("You already have root access to " + target);
			ns.print("The servers that you have gotten root access to are:");
			for (var j=0; j < successfulattempt.length; ++j){
				ns.print(successfulattempt[j]);
				//ns.print("\n");
			}
			successfulattemptcount++;
			var serverRam = ns.getServerRam(target);
			if (serverRam[0] > 2.2)
			{
				ns.killall(target);
				await ns.scp("hack.js", target);
				ns.exec("hack.js", target, Math.floor(serverRam[0]/2.2));
				//await ns.scp("share.js", target);
				//ns.exec("share.js", target, Math.floor(serverRam[0]/4));
			}	
		}
		else if (portsopen >= ns.getServerNumPortsRequired(target)) {
			ns.nuke(target);
			successfulattempt[successfulattemptcount] = target;
			ns.print("You now have root access to " + target);
			ns.print("The servers that you have gotten root access to are:");
			for (var j=0; j < successfulattempt.length; ++j){
				ns.print(successfulattempt[j]);
				//ns.print("\n");
			}
			successfulattemptcount++;
			var serverRam = ns.getServerRam(target);
			if (serverRam[0] > 2.2)
			{
				ns.killall(target);
				await ns.scp("hack.js", target);
				ns.exec("hack.js", target, Math.floor(serverRam[0]/2.2));
			}	
		}
		else {
			failedattempt[failedattemptcount] = target;
			ns.print("Getting Root Access to " + target + " has failed.")
			ns.print("The servers that have failed to get root access to are:");
			for (var j=0; j < failedattempt.length; ++j){
				ns.print(failedattempt[j]);
				//ns.print("\n");
			}
			failedattemptcount++;
		}
		//installBackdoor(target);		
	}
	else {
		failedattempt[failedattemptcount] = target;
		ns.print("Getting Root Access to " + target + " has failed.")
		ns.print("The servers that have failed to get root access to are:");
		for (var j=0; j < failedattempt.length; ++j) {
			ns.print(failedattempt[j]);
			//ns.print("\n");
		}
		failedattemptcount++;
	}
}

//Keeps script running in Active Scripts
//So we can check the logs
while(true)
{	
	ns.print("The servers that you have gotten root access to are:");
	for (var j=0; j < successfulattempt.length; ++j){
		ns.print(successfulattempt[j]);
		//ns.print("\n");
	}
	ns.print("The servers that have failed to get root access to are:");
		for (var j=0; j < failedattempt.length; ++j) {
			ns.print(failedattempt[j]);
			//ns.print("\n");
		}
	await ns.sleep(30000);
}
}
