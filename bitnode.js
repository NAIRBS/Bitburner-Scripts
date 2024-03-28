/** @param {NS} ns **/
export async function main(ns) {
	
	for(const [name, value] of Object.entries(ns.getBitNodeMultipliers())) { ns.tprint(`${name}: ${value}`); }
}
