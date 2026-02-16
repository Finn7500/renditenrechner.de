import { ref, computed } from "vue"

const texts = ref(null)
const loading = ref(false)
const error = ref(null)

export async function loadTexts() {
    // nur einmal laden
    if (texts.value || loading.value) return

    loading.value = true
    error.value = null

    try {
        // BASE_URL ist robuster als "/..." (wichtig bei Subpath-Deployments)
        const url = `${import.meta.env.BASE_URL}api/text-constants.json`
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Failed to load texts: ${res.status}`)
        texts.value = await res.json()
    } catch (e) {
        error.value = e
    } finally {
        loading.value = false
    }
}

export function useText(langRef) {
    const t = (key) => {
        const lang = langRef?.value ?? "de"
        return texts.value?.[lang]?.[key] ?? key
    }

    return {
        t,
        loading: computed(() => loading.value),
        error: computed(() => error.value),
    }
}