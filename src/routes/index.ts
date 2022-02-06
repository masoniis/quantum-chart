import Index from "../routes/index.svelte"

var index = new Index({
    target: document.body,
    intro: true
});

export default index;