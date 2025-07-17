from modules.encryption import *
from raducord import *

class Token:
    def __init__(self):
        self.encryption = Encryption()

    def __genToken__(self):
        now = int(time.time() * 1000)
        timestamp = ((int(str(now)[-3:]) + (random.random() * 0.3)) / 999) * math.pi - math.pi / 2
        final = json.dumps([now, math.sin(timestamp) * 1000], separators=(',', ':'))

        return self.encryption.__encrypt__(final)