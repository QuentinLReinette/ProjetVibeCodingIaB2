<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">Session 1 - JO 2024</router-link>
    </div>
    <div class="nav-links">
      <router-link to="/ecosysteme">Écosystème</router-link>
      <router-link to="/athlete">L'athlète</router-link>
      <router-link to="/heritage">L'héritage</router-link>
      <router-link to="/innovations">Innovations</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--jo-black);
  color: var(--jo-gold);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  border-bottom: 2px solid var(--jo-gold);
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: var(--font-heading);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--jo-white);
  transition: color var(--jo-transition);
  font-family: var(--font-heading);
  text-transform: uppercase;
  font-size: 0.9rem;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--jo-gold);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
  .nav-links {
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
