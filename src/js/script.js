const mobileMenuToggle = document.getElementById('mobile-menu-toggle')
const mobileMenu = document.getElementById('mobile-menu') // toggle control, per accessibility api

mobileMenuToggle.addEventListener('click', e => {
  // Toggle svg icons when clicked
  const icons = mobileMenuToggle.querySelectorAll('svg')
  icons.forEach(icon => {
    icon.classList.toggle('block')
    icon.classList.toggle('hidden')
  })

  // Set aria-expanded attribute on toggle
  mobileMenuToggle.ariaExpanded = (mobileMenuToggle.ariaExpanded === 'false') ? 'true' : 'false'

  // Toggle mobile menu display
  mobileMenu.classList.toggle('hidden')
})
