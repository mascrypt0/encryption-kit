/**
 * Encryption tool interface
 * Under planning: unified into one project in the future
 */
export interface EncryptInterface {
    publicKey: string | number;
    privateKey?: string | number;
    jsEncryptInstance: any;
    /**
     * encryption
     * @param plaintext:plain text
     */
    encryptData(plaintext: any): string;
    /**
     * Decrypt
     * @param ciphertext:ciphertext
     */
    decryptData(ciphertext: any): string;
}
