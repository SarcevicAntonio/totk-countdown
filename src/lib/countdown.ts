import { differenceInSeconds } from 'date-fns'
import { derived, writable } from 'svelte/store'

const now = writable(new Date(), (set) => {
	const interval = setInterval(() => set(new Date()), 1)
	return () => clearInterval(interval)
})

const DAY = 60 * 60 * 24
const HOUR = 60 * 60
const MINUTE = 60

export const countdown = (goal_date: Date) => {
	return derived(now, ($now) => {
		const difference = differenceInSeconds(goal_date, $now)
		return {
			days: Math.floor(difference / DAY),
			hours: Math.floor((difference % DAY) / HOUR),
			minutes: Math.floor((difference % HOUR) / MINUTE),
			seconds: difference % MINUTE,
		}
	})
}
