import { writable } from 'svelte/store'

export const yStore = writable()
export const menu = writable(false)
export const statusBar = writable("")
export const companyName = writable("Quantum Chart")