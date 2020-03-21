class VigenereCipheringMachine {
    constructor(rev = true){
        this.rev = rev;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(str, key){ 
        return this.execute(str, key, 'encrypt')
    }

    decrypt(str, key) {
        return this.execute(str, key, 'decrypt')
    }

    execute(str, key, operation) {
        if(!str || !key) throw new Error();
        let result = [];
        let keyIndex = 0;
        str = str.toUpperCase();
        key = key.toUpperCase();
        switch (operation) {
            case 'encrypt':
                result = str.toUpperCase().split('').map(item => {
                    if (item >= 'A' && item <= 'Z'){
                        let strIndex = (this.alphabet.indexOf(key[keyIndex % key.length])+ this.alphabet.indexOf(item)) % 26;
                        let letter = this.alphabet[strIndex];
                        keyIndex++;
                        return letter;
                    }
                    return item;
                });
                break;
            case 'decrypt':
                result = str.toUpperCase().split('').map(item => {
                    if (item >= 'A' && item <= 'Z'){    
                        let strIndex = this.alphabet.indexOf(item) - this.alphabet.indexOf(key[keyIndex % key.length]);     
                        if(strIndex < 0){
                            strIndex +=  26;
                        }
                        let letter = this.alphabet[strIndex];
                        keyIndex++;          
                        return letter;
                    }
                    return item;
                });
                break;
        }
        if(this.rev){
            return result.join('');
        } else return result.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
