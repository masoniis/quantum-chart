import { writable } from 'svelte/store'

export const yStore = writable()
export const menu = writable(false)
export const contactModal = writable(false)
export const demoModal = writable(false)
export const requestModal = writable(false)
export const companyName = writable("Quantum Chart")