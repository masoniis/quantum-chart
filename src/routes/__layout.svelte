<script lang="ts">
    import '../app.css'
    import Navbar from '../components/Navbar.svelte'
    import Botbar from '../components/Botbar.svelte'
</script>


<main>
    <Navbar />

    <body class="container min-h-screen mx-auto px-5 bg-light-bg">
        <slot />
    </body>

    <Botbar />
</main>
