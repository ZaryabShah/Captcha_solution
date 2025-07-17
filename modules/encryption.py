from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives import hashes
from raducord import *
import math

class Encryption:
    def __init__(self):
        self.key = """
        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoa1QCkVvFAfv+fgFpjfq
        9/YrtGzDYull6V0oiy1XPuTCQeb4uptHEmCepnZPmKaP/akp5wS7UTGYw+or//gd
        IER2Cs58q7tVvqxTe68mx901oSw61VOt7mqDVhIsnJlH6yo2Kd9a5rClU/xr618K
        Ry0wuoD2i6mq4fE3uKZZBNrxJ57Jg0EXEsMIvYHxk0kKO8i0YIxEVP84tUuZiq9T
        dcponzr4ny6lqn0YlOSu67kRVL8O0ryHvRJomNN4OcUgq/rUfzJxonqvvmHd75n4
        4r8n4Y7I8/DmVe9cpDWDgv6vk2djRkAQDiLfDEMfq8C7S+/8RPyLTCxXUrR2ouUG
        6QIDAQAB
        """

        self.key = "".join(self.key.split())
        self.key_der = base64.b64decode(self.key)
        self.public_key = serialization.load_der_public_key(self.key_der)

        
    def __encrypt__(self, token: str) -> str:
        ciphertext = self.public_key.encrypt(
            token.encode("utf-8"),
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )

        return base64.b64encode(ciphertext).decode("utf-8")
    
    def __decrypt__(self, ciphertext: str) -> str:
        ciphertext = base64.b64decode(ciphertext)
        plaintext = self.private_key.decrypt(
            ciphertext,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None)
            )
        
        return plaintext.decode("utf-8")