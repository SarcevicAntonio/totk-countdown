<script>
	import { set } from 'date-fns'
	import { countdown } from '$lib/countdown'
	import Segment from '$lib/segment.svelte'
	import './app.css'
	import logo from './logo.png'
	import { Dialog } from 'as-comps'

	const totk_release = set(new Date(), {
		year: 2023,
		month: 4, // zero-based numbering makes 11 December
		date: 12, // 24th is when we gift presents in germany
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0,
	})

	const totk_countdown = countdown(totk_release)
</script>

<main>
	<img src={logo} alt="The Legend of Zelda: Tears of the Kingdom" />
	<span>comes out in</span>
	<section>
		{#each Object.entries($totk_countdown) as [label, number], i}
			<Segment {number}>{label}</Segment>
		{/each}
	</section>
	<span>
		({totk_release.toLocaleString(undefined, {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric',
		})})
	</span>
	<Dialog triggerLabel="Watch Trailer">
		<iframe
			title="The Legend of Zelda: Tears of the Kingdom - Coming May 12th, 2023 - Nintendo Switch"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/2SNF4M_v7wc?autoplay=1"
			frameborder="0"
			allowfullscreen
		/>
	</Dialog>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1em;
		align-items: center;
		color: var(--white);
		text-shadow: 0 0 0.5em var(--blue);
		text-align: center;
	}

	img {
		display: block;
		width: 15em;
		max-width: 100vw;
		margin: auto;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	@media only screen and (min-width: 900px) {
		section {
			flex-direction: row;
		}
	}
</style>
