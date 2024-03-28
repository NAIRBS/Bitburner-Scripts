/** @param {NS} ns */
export async function main(ns) {
	for (var i = 0; i < 20; i++)
	{
		//ns.tprint(ns.getPurchasedServerCost(`${i+1}: ${Math.pow(2,(1+i))}`));
		var size_base = Math.pow(2,(1+i)); //This is the size of the server
		var cost = ns.nFormat(ns.getPurchasedServerCost(size_base), "$0.00a"); //processed so its prettier
		var size = ns.nFormat(size_base * 1000000000, "0b"); //processed so its prettier
		
		ns.tprint(`${size}: ${cost}`);
	}

}
