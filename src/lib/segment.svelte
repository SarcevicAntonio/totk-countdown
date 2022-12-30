<script lang="ts">
	import { fly } from 'svelte/transition'
	export let number: number
	const FLY_DISTANCE = 16
</script>

<div>
	{#if number}
		<div class="counter">
			{#key number}
				<span in:fly={{ y: -FLY_DISTANCE }} out:fly={{ y: FLY_DISTANCE }}>{number}</span>
			{/key}
		</div>
		<slot />
	{/if}
</div>

<style>
	.counter {
		display: inline-grid;
		font-size: 1.3em;
	}
	span {
		grid-column: 1/2;
		grid-row: 1/2;
	}
</style>
