<script lang="ts">
    import { route } from '$lib/lib'

    export let id = 0
    export let level = 0
    export let price = 0
    export let title = ''
    export let selected = false
</script>


<div
        on:click={route(level, id)}
        style="border: 1px solid gray; cursor: pointer; padding: 5px; width: 400px;"
>
    <span class={selected ? 'green' : ''}>title: {title}</span>
    <span>price: {price}</span>
</div>