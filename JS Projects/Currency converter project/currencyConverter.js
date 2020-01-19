function ZARConverter() {
    document.converter.Dollar.value = document.converter.Rand.value * 0.070
    document.converter.Pound.value = document.converter.Rand.value * 0.052
    document.converter.Euro.value = document.converter.Rand.value * 0.063
}