const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuToggle.addEventListener('click', e => {
  // Toggle svg icons when clicked
  const icons = mobileMenuToggle.querySelectorAll('svg')
  icons.forEach(icon => {
    icon.classList.toggle('block')
    icon.classList.toggle('hidden')
  })
})
