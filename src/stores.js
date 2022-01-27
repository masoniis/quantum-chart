import { writable } from 'svelte/store'

export const yStore = writable()
export const menu = writable(false)
export const contactModal = writable(false)
export const companyName = writable("Charty Party")