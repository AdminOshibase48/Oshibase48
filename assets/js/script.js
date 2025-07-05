<body>
  <header class="site-header">
    <div class="logo">Oshibase48</div>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
    <nav id="navMenu">
      <a href="about.html">About</a>
      <a href="galeri.html">Galeri</a>
      <a href="jadwal.html">Jadwal</a>
      <a href="berita.html">Berita</a>
    </nav>
  </header>

  <!-- Konten halaman... -->

  <footer>
    <!-- Footer content -->
  </footer>

  <!-- AOS & Supabase scripts kalau ada -->
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>AOS.init();</script>

  <!-- ✅ Taruh di sini fungsi hamburger menu -->
  <script>
    function toggleMenu() {
      const navMenu = document.getElementById("navMenu");
      navMenu.classList.toggle("active");
    }
  </script>
</body>
