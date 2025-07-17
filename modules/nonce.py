from raducord import *
import binascii
import hashlib

class Nonce:
    def __init__(self):
        self.difficulty = 0

    def __generate__(self, challenge: str, difficulty: int) -> int:
        salt = 0
        difficulty_str = '0' * difficulty

        while True:
            n = f"{salt}{challenge}".encode()
            hashed = hashlib.sha256(n).digest()
            hexed = binascii.hexlify(hashed).decode()

            if hexed.startswith(difficulty_str):
                return salt

            salt += 1