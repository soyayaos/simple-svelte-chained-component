<script lang="ts">
    import { onMount } from "svelte";
    import { init, store } from '$lib/lib'
    import Item from '$lib/Item.svelte'
    import Result from '$lib/Result.svelte'

    let payload = []

    store.subscribe((v: any[]) => {
        payload = v
    })

    onMount(async () => {
        init()
    })

</script>

<div>
    <Result/>
    {#each payload as item}
        <Item {...item} />
    {/each}
</div>
