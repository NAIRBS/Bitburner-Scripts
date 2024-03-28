/** @param {NS} ns **/
export async function main(ns) {
	while(1)
	{
		ns.print(await ns.heart.break());
		await ns.sleep(1000);
	}
}
