/** @param {NS} ns **/
export async function main(ns) {
	// Acquire a reference to the terminal text field
	const terminalInput = document.getElementById("terminal-input");
	var servers = []; 
	var servers2 = [];
	var servers3 = [];
	/*servers4 = [];
	servers5 = [];
	servers6 = [];
	servers7 = [];
	servers8 = [];
	servers9 = [];
	servers10 = [];
	servers11 = [];
	servers12 = [];
	servers13 = []; */

	function execute(command) 
	{
		terminalInput.value= command;
		// Get a reference to the React event handler.
		const handler = Object.keys(terminalInput)[1];
		// Perform an onChange event to set some internal values.
		terminalInput[handler].onChange({target:terminalInput});
		// Simulate an enter press
		terminalInput[handler].onKeyDown({keyCode:13,preventDefault:()=>null});
	}

	function runterminal()
	{
		if (command == "")
		{
			command2 = command
			command = command + "connect " + servername;
			execute(command + "; backdoor");
		}
		else 
		{
			command2 = command
			command = command + "; connect " + servername;
			execute(command + "; backdoor");
		}
			
	}

	servers = ns.scan("home");
	var servername;
	var command = "";
	var command2;
	
	for(var i=0; i < servers.length; ++i)
	{
		servername = servers[i];
		servers2 = ns.scan(servername);
		if (servers2.length > 1)
		{
			runterminal();
			await ns.sleep(50000);
			execute("home");
			await ns.sleep(1000);
			for(var j=0; j < servers2.length; ++i)
			{
				servername = servers2[i];
				servers3 = ns.scan(servername);
				if (servers3.length > 1)
				{
					runterminal();
					await ns.sleep(50000);
					execute("home");
					await ns.sleep(1000);
				}
				else
				{
					runterminal();
					await ns.sleep(1000);
					execute("home");
					await ns.sleep(1000);
					command = command2;
				}
			}
			
		}
		else
		{
			runterminal();
			await ns.sleep(1000);
			execute("home");
			await ns.sleep(1000);
			command = command2;
		}
		
	}
}
