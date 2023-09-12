const nav = document.querySelector("[data-header]")

window.addEventListener("scroll", () => {
  nav.classList[window.scrollY > 50 ? "add" : "remove"]("active")
})

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Splide with initial options
  const splide = new Splide(".splide", {
    type: "carousel",
    perPage: 3, // Initial perPage value
    focus: "center", // Center the active slide
    autoplay: true,
  })

  splide.mount()

  // Function to update perPage based on screen width
  function updatePerPage() {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    // Set perPage to 1 for screens smaller than 768 pixels
    // Otherwise, set it back to 3
    splide.options.perPage = screenWidth < 768 ? 1 : 3

    // Refresh the Splide instance with the new options
    splide.refresh()
  }

  // Call the function initially and on window resize
  updatePerPage()
  window.addEventListener("resize", updatePerPage)
});


//Get the button:
mybutton = document.getElementById("myBtn")

// Get the modal
var modal = document.getElementById("id01")

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
};

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%"
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}
