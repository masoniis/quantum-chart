<script>
    import Modal from "../../components/Modal.svelte"
    import { onMount } from 'svelte'

  function onScroll(event) {
      console.log("SCROLLED")
  }

  let element;
  onMount(() => {
    element.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      element.removeEventListener('scroll', onScroll, { passive: true });
    }
  });
</script>


<main class="min-h-screen">

</main>