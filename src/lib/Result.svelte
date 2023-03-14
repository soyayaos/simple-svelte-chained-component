<script lang="ts">
    import { store } from "$lib/lib";

    let title = ''
    let amount = 0

    store.subscribe((v: any[]) => {
        amount = 0
        title = ''
        v.forEach((item) => {
            if (!item.selected) {
                return
            }
            amount += item.price
            title += item.title + ' '
        })
    })

</script>

{#if amount > 0}
    <div style="margin-bottom: 20px;"><span class="green">{title}</span> with amount {amount}</div>
{/if}