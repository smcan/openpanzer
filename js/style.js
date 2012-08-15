/**
 * Style - basic styles support for rendering on canvas
 *
 * http://www.linuxconsulting.ro
 * http://openpanzer.net
 *
 * Copyright (c) 2012 Nicu Pavel
 * Licensed under the GPL license:
 * http://www.gnu.org/licenses/gpl.html
 */
var hexstyle = 
{
	"move": //Move selected hexes
	{ 
		"fillColor": "rgba(128,128,128,0.5)",
		"lineColor": "rgba(0,0,0,0.4)",
		"lineWidth":  1,
		"lineJoin":  "miter",
	},
	"attack":  //Attack selected hexes
	{
		"fillColor": null,
		"lineColor": "rgba(239,0,0,0.8)",
		"lineWidth":  3,
		"lineJoin":  "miter",
	},
	"current": //Current selected hex
	{ 
		"fillColor": null ,
		"lineColor": "rgba(240,240,240,0.8)",
		"lineWidth": 3,
		"lineJoin": "round",
	},
	"generic": //Generic hex grid
	{ 
		"fillColor": null,
		"lineColor": "rgba(39,44,47,0.9)",
		"lineWidth": 0.4,
		"lineJoin": "miter",
	},
	"deploy": //Deployment hexes
	{ 
		"fillColor": "rgba(128,128,128,0.8)",
		"lineColor": "rgba(0,0,0,0.4)",
		"lineWidth":  1,
		"lineJoin":  "miter",
	},
	"ownunit": //Hex that has a current player unit on it
	{ 
		"fillColor": "rgba(30,144,255,0.3)",
		"lineColor": "rgba(0,0,0,0.4)",
		"lineWidth":  0,
		"lineJoin":  "miter",
	},
};
