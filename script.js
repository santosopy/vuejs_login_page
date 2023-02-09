var crypt = {
    // (B1) THE SECRET KEY
    secret : "CIPHERKEY",
    
    // (B2) ENCRYPT
    encrypt : clear => {
        var cipher = CryptoJS.AES.encrypt(clear, crypt.secret)
        return cipher.toString()
    },
    
    // (B3) DECRYPT
    decrypt : cipher => {
        var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret)
        return decipher.toString(CryptoJS.enc.Utf8)
    }
}

new Vue({
    el: "#app",
    data: {
        aisatsu: "Welcome",
        isLoggedIn: false,
        userPass: "",
        passInput: "",
        isError: false,
    },
    created() {
        const pass = document.querySelector("#pass")
        this.userPass = pass.getAttribute("data-pass")
        pass.remove()
    },
    mounted() {
        // ログインしたことあるかどうか
        // if( localStorage.userPass === this.userPass ) this.isLoggedIn = true

        // 暗号化解答
        if( crypt.decrypt(localStorage.userPass) ===  this.userPass) this.isLoggedIn = true
    },
    methods: {
        onLogin() {

            if ( this.userPass === this.passInput ){
                this.isLoggedIn = true
                
                // 保存
                // localStorage.userPass = this.passInput

                // 暗号化
                localStorage.userPass = crypt.encrypt(this.passInput)

            } 
            else this.isError = true
        },
        onClose(){
            this.isError = false
        },
        onLogout() {
            this.isLoggedIn = false
            localStorage.userPass = ""
        }
    },
})