// ==UserScript==
// @name         Canvas Auto Login (for smuhsd)
// @namespace    https://github.com/LightLordYT
// @version      1
// @description  auto opens login also closes that annoying google sites(ew) canvas website
// @author       LightLord
// @match        https://smuhsd.instructure.com/login?needs_cookies=1
// @match        https://sites.google.com/smuhsd.org/canvas
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instructure.com
// @grant window.close
// ==/UserScript==

let location = window.location.href

if (location == "https://smuhsd.instructure.com/login?needs_cookies=1") {
	window.open("https://sites.google.com/smuhsd.org/canvas")
} else if (location == "https://sites.google.com/smuhsd.org/canvas") {
	let classes = document.getElementsByClassName("XqQF9c")
	let link = classes[0]
	link.click()
	window.close()
}
