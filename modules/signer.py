from substrateinterface import Keypair, KeypairType
from mnemonic import Mnemonic

class Signer:
    def __init__(self):
        self.crypto_type = KeypairType.SR25519
        self.lang = "english"
        self.strength = 256

        self.keypair = Keypair.create_from_mnemonic(Mnemonic(self.lang).generate(strength=self.strength), crypto_type=self.crypto_type)

    def __getPublicKey__(self):
        return self.keypair.ss58_address

    def __signMessage__(self, message: str) -> bytes:
        message_bytes = message.encode('utf-8')
        signature = self.keypair.sign(message_bytes)

        return signature