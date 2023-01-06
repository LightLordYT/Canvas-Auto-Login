let location = window.location.href

if (location == "https://smuhsd.instructure.com/login?needs_cookies=1") {
	let btn = document.getElementById("global_nav_login_link")
	btn.click()
} else {
	let classes = document.getElementsByClassName("XqQF9c")
	let link = classes[0]
	link.click()
}
