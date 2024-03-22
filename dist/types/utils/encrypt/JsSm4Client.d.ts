import { EncryptInterface } from "./interface/encryptInterface";
/**
 * National secret 4 tools
 */
export default class JsSm4Client implements EncryptInterface {
    publicKey: any;
    jsEncryptInstance: any;
    /**
     * encryption key
     * @param publicKey
     */
    constructor(publicKey: string);
    /**
     * Encryption method
     * @param plaintext
     */
    encryptData(plaintext: string): string;
    /**
     * Decryption method
     * @param ciphertext
     */
    decryptData(ciphertext: string): string;
}
