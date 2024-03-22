# encrypt-kit Usage
 

## npm 

npm install encryption-kit

### JsSm4Client Encryption and Decryption tool

> Encapsulates JsSm4,


Configuration parameter
key : secret key

* Encryption method
* @param plaintext
* encryptData( plaintext:string): string


* Decryption method
* @param ciphertext
* decryptData(ciphertext:string): string

```javascript
// introduction

import {JsSm4Client} from 'encryption-kit'

let jsSm4Client = new JsSm4Client('youKey')

let a = "1232123"

console.log(jsSm4Client.decryptData(jsSm4Client.encryptData(a))); // 1232123

```

### 2 RsaClient rsa encryption, decryption

> Encapsulates RsaClient,


Configuration parameter
key : secret key

* Encryption method
* @param plaintext
* encryptData( plaintext:string): string


* Decryption method
* @param ciphertext
* decryptData(ciphertext:string): string

```javascript
// Example

import {RsaClient} from 'encryption-kit'

const publickKey = 'youPublickKey'
const privateKey = 'youPrivateKey'

let rsaClient = new RsaClient(key)

let a = "1232123"

console.log(rsaClient.decryptData(rsaClient.encryptData(a))); // 1232123

```
