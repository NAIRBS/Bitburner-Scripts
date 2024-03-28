/** @param {NS} ns **/
export async function main(ns) {

	const terminalInput = document.getElementById("terminal-input");

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

}
