# pip install -U curl_cffi

from curl_cffi import requests

url = "https://pronode13.prosopo.io/v1/prosopo/provider/client/captcha/frictionless"

payload = {
    "token": "Dq+bHUy/HFCEEdUbxO5Ik/CcAhhw3O/Hd6mpIO7hyXjdl6PC5Zak+2xfg8WgqX1GELogEiV6dhAjBlvk3yOUNbEcsmTfbDuDDwmljqV8KzYoqHnTZH0rQOUAxjB2ppEb29XJcGDpOubzXVphluciGKj371VIMNoQywY2Nrtf8zGcNCqRzyEm2MgKJArzf/3LUf0x7C3MFmTYZz0E+jBJKWdU+yFUupRWzMoA5ubJeJuvVbZnBAic8yPfzL6NvIhV8gry0mqNuPjGCakDMRN72B1TglMaOvPeqy3RX94fo54zUXfuxIThj6H2ts8U+Z1Algk3Kt/Kbvf9OEwPMrWpNg==",
    "dapp":  "5EZVvsHMrKCFKp5NYNoTyDjTjetoVo1Z4UNNbTwJf1GfN6Xm",
    "user":  "5HdegZTcyjtWdtnn1XSqrdSdhex64nY3ZEKzquQ9sL7Virvd",
}

headers = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "origin": "https://www.twickets.live",
    "pragma": "no-cache",
    "prosopo-site-key": "5EZVvsHMrKCFKp5NYNoTyDjTjetoVo1Z4UNNbTwJf1GfN6Xm",
    "prosopo-user": "5HdegZTcyjtWdtnn1XSqrdSdhex64nY3ZEKzquQ9sL7Virvd",
    "referer": "https://www.twickets.live/",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit(537.36) "
                  "(KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
}

# Some curl_cffi versions may not support "chrome138" yet. If you get an error,
# change to impersonate="chrome" (generic) or a nearby version like "chrome127".
with requests.Session(impersonate="chrome138") as s:
    resp = s.post(url, json=payload, headers=headers, timeout=30)
    print("Status:", resp.status_code)
    try:
        print(resp.json())
    except Exception:
        print(resp.text)
