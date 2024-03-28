/** @param {NS} ns */
export async function main(ns) {
	const Cities = ["Aevum", "Chongqing", "Sector-12", "New Tokyo", "Ishima", "Volhaven"];
	const Jobs = ["Operations", "Engineer", "Business", "Management", "Research & Development", "Training"];
	const Divisions = ["Eats", "Fags", "Comp00ter", "Touching Grass", "Land", "Fish", "Drugs", "Chems", "Gas", "POWAH", "Rocks", "Robot", "Helth", "Scrap"];

	var employeenames = [];

	//for(const [size, employees] of Object.entries((ns.corporation.getOffice(Divisions[0],Cities[0])).employees)) { ns.tprint(`${size}: ${employees}`); }
	/* // THIS CODE FORCES ALL EMPLOYEES TO BE FITTED 1 1 1 INTO EACH JOB IN ALL DIVS AND ALL CITIES
	for(var d = 0; d < 14; d++)
	{
		for (var c = 0; c < 6; c++)
		{
			for(const [size, employees] of Object.entries((ns.corporation.getOffice(Divisions[d],Cities[c])).employees)) { employeenames[size] = employees; }
	
			for(var i = 0; i < 3; i++)
			{
				
				if (i < 2)
				{
					await ns.corporation.assignJob(Divisions[d],Cities[c],employeenames[i],Jobs[i])
				}
				else
				{
					await ns.corporation.assignJob(Divisions[d],Cities[c],employeenames[i],Jobs[3])
				}
				
				//await ns.corporation.assignJob(Divisions[d],Cities[c],employeenames[i],Jobs[2]);
			}
			employeenames.length = 0; //resets the array so its empty again
		}
	}
	*/
		for (var c = 0; c < 6; c++)
		{
			for(const [size, employees] of Object.entries((ns.corporation.getOffice("Helth",Cities[c])).employees)) { employeenames[size] = employees; }
			var count = 0;
			for(var i = 0; i < 3; i++)
			{
				for(var t = 0; t < 100; t++)
				{
					if (i < 2)
					{
						await ns.corporation.assignJob("Helth",Cities[c],employeenames[count],Jobs[i]);
					}
					else 
					{
						await ns.corporation.assignJob("Helth",Cities[c],employeenames[count],Jobs[3]);
					}
					count++;
				}
			}
		}

}
