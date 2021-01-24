const App = {
    data() {
        return {
            feets: 0,
            seaMile: 0,
            degrees: 0,
            celsius: 0
        }
    },
    methods: {
        clearOutString(value) {
            if(isNaN(value)) {
                return 0
            }
            if(value === 0) {
                return 0
            }
            value = value.toFixed(5).replace(/0*$/,"")
            if(value.charAt(value.length - 1) === '.'){
                return value.replace('.', '')
            }
            return value
        }
    },
    computed: {
        feetsToMeters() {
            let tmp = this.feets.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * 0.3048
            return this.clearOutString(res)
        },

        seaMileToKm() {
            let tmp = this.seaMile.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * 1.852
            return this.clearOutString(res)
        },

        degreesToRadians() {
            let tmp = this.degrees.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * Math.PI / 180
            return this.clearOutString(res)
        },

        celsiusToFahrenheit() {
            let tmp = this.celsius.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * 1.8 + 32
            return this.clearOutString(res)
        }
    }
}

Vue.createApp(App).mount('#app')