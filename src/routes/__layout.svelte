<script lang="ts">
    import '../app.css'
    import Header from '../components/header.svelte'
    import Footer from '../components/footer.svelte'
</script>


<main>
    <Header />

    <slot />

    <Footer />
</main>
