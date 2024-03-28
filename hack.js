/** @param {NS} ns **/
export async function main(ns) {
    /*
	var target = ns.args[0]; //Base
    var moneyThresh = ns.getServerMaxMoney(target) * 0.75; //Base
    var securityThresh = ns.getServerMinSecurityLevel(target) + 5; //Base
    */
    ///*
    /*
    var target = "n00dles";
    var moneyThresh = 1312500; //n00dles stats
    var securityThresh = 6; //n00dles stats
    */
    /*
    var target = "n00dles";
    var moneyThresh = 52500; //n00dles stats
    var securityThresh = 6; //n00dles stats
    */
    ///*
    var target = "joesguns";
    var moneyThresh = 46875000; //joesguns stats
    var securityThresh = 10; //joesguns stats
    //*/
    /*
    var target = "harakiri-sushi";
    var moneyThresh = 75000000; //harkiri-sushi stats
    var securityThresh = 10; //harkiri-sushi stats
    */
    while(true) {
        var securityLevel = Math.round(ns.getServerSecurityLevel(target));
        var currentMoney = Math.round(ns.getServerMoneyAvailable(target));
        if (securityLevel > securityThresh) {
            await ns.weaken(target);
        } else if (currentMoney < moneyThresh) {
            await ns.grow(target);
        } else {
            await ns.hack(target);
        } 
    }
}
