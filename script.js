<script>
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link = {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    })
  });
</script>