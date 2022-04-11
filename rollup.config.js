//import commonJs from "@rollup/plugin-commonjs";
//import nodeBuiltins from "rollup-plugin-node-builtins";
//import nodeGlobals from "rollup-plugin-node-globals";
//import nodeResolve from "@rollup/plugin-node-resolve";
import postProcess from "rollup-plugin-postprocess";
import typescript from "@rollup/plugin-typescript";
import { chromeExtension, simpleReloader } from "rollup-plugin-chrome-extension";

export default {
	"input": "manifest.json",
	"output": {
		"dir": "dist",
		"format": "esm"
	},
	"external": ["chrome"],
	"plugins": [
		chromeExtension(),
		simpleReloader(),
		//nodeResolve(),
		//commonJs(),
		//nodeBuiltins(),
		//nodeGlobals(),
		typescript(),
		postProcess([
			[/^(?:import|export) .*$/gmu, "//$0"],
			[/^( {4})+/gmu, function(match) {
				return "\t".repeat(match.length / 4);
			}]
		])
	],
	"watch": {
		"clearScreen": false
	}
};
