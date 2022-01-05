<script lang="ts">
    import '../app.css'
    import Navbar from '../components/Navbar.svelte'
    import Botbar from '../components/Botbar.svelte'
</script>


<main>
    <Navbar />

    <slot />

    <Botbar />
</main>
