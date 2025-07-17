from raducord import *

class Solve:
    def __init__(self):
        self.Se = [f'{i:02x}' for i in range(256)]
        self.xt = [self.Se[i] + self.Se[j] for i in range(256) for j in range(256)]

    def __Hex__(self, data, prefix=""):
        r = len(data) % 2
        n = len(data) - r
        result = prefix
        
        for i in range(0, n, 2):
            result += self.xt[data[i] << 8 | data[i + 1]]
        
        if r:
            result += self.Se[data[n]]
        
        return result

    def __Encode__(self, data, length=-1, with_prefix=True):
        prefix = "0x" if with_prefix else ""
        
        if data is None or len(data) == 0:
            return prefix
        
        if length > 0:
            max_bytes = (length + 7) // 8
            if len(data) > max_bytes:
                half = max_bytes // 2
                start_part = self.__Hex__(data[:half], prefix)
                end_part = self.__Hex__(data[-half:], "")
                return f"{start_part}…{end_part}"
        
        return self.__Hex__(data, prefix)