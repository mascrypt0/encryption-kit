import { EncryptInterface } from "./interface/encryptInterface";
export default class RsaClient implements EncryptInterface {
    jsEncryptInstance: any;
    publicKey: string | number;
    privateKey: string | number;
    constructor(publicKey: any, privateKey: any);
    /**
     * Encryption
     * @param plaintext
     */
    encryptData(plaintext: any): string;
    /**
     * Decrypt
     * @param ciphertext
     */
    decryptData(ciphertext: any): string;
}
