const App = {
    // модели
    data() {
        return {
            feets: 0,
            seaMile: 0,
            degrees: 0,
            celsius: 0
        }
    },
    methods: {
        // метод преобразования выходного числа к нормальному виду
        clearOutString(value) {
            if(isNaN(value)) {
                return 0
            }
            if(value === 0) {
                return 0
            }
            // убираем незначимые нули
            value = value.toFixed(5).replace(/0*$/,"")
            // если целое число - убираем десятичную точку
            if(value.charAt(value.length - 1) === '.'){
                return value.replace('.', '')
            }
            return value
        }
    },
    computed: {
        // конвертируем футы в метры
        feetsToMeters() {
            let tmp = this.feets.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * 0.3048
            return this.clearOutString(res)
        },
        // конвертируем морские мили в километры
        seaMileToKm() {
            let tmp = this.seaMile.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * 1.852
            return this.clearOutString(res)
        },
        // конвертируем градусы в радианы
        degreesToRadians() {
            let tmp = this.degrees.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * Math.PI / 180
            return this.clearOutString(res)
        },
        // конвертируем градусы Цельсия в Фаренгейты
        celsiusToFahrenheit() {
            let tmp = this.celsius.toString()
            tmp = tmp.replaceAll(',', '.');
            let res = tmp * 1.8 + 32
            return this.clearOutString(res)
        }
    }
}
// создаём и монтируем Vue-приложение
Vue.createApp(App).mount('#app')