from modules.signer import *
from modules.solve import *
from modules.nonce import *
from modules.token import *
from raducord import *
import binascii
import json
import os
from datetime import datetime

class Solver:
    def __init__(self, host: str, site_key: str, proxy: str = None):
        self.site_key = site_key
        self.host = host

        self.signer = Signer()

        self.session = Session(
            client_identifier="chrome_137",
            random_tls_extension_order=True,
        )

        if proxy:
            self.session.proxies = {
                # "http": f"http://{proxy}",
                "https": f"http://{proxy}",
            }

    def __saveConfigurationData__(self, challenge, difficulty, nonce, provider_challenge, user_timestamp, captcha_response):
        """Save the configuration data and captcha response to a file"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        config_data = {
            "timestamp": timestamp,
            "base_url": "https://pronode4.prosopo.io",
            "challenge": challenge,
            "dapp": self.site_key,
            "user": self.signer.__getPublicKey__(),
            "difficulty": difficulty,
            "nonce": nonce,
            "provider_signature": provider_challenge,
            "user_timestamp": user_timestamp,
            "captcha_response_hex": captcha_response[2:],  # Remove 0x prefix for hex
            "captcha_response_api": captcha_response  # With 0x prefix
        }
        
        # Save to a timestamped file
        filename = f"prosopo_solve_data_{timestamp}.json"
        filepath = os.path.join(os.getcwd(), filename)
        
        try:
            with open(filepath, 'w') as f:
                json.dump(config_data, f, indent=4)
            
            RaduLogger.info(f"Configuration data saved to: {filename}")
            
            # Also update the main captcha_data.py file
            self.__updateCaptchaDataFile__(config_data)
            
        except Exception as e:
            RaduLogger.failed(f"Failed to save configuration data: {str(e)}")
    
    def __updateCaptchaDataFile__(self, config_data):
        """Update the main captcha_data.py file with new data"""
        content = f'''# ===== PROSOPO CAPTCHA CONFIGURATION DATA =====
# This file contains the configuration data used to generate captcha responses
# and the resulting captcha response in hex format
# Last updated: {config_data["timestamp"]}

# Configuration parameters
base_url = "{config_data["base_url"]}"
challenge = "{config_data["challenge"]}"
dapp = "{config_data["dapp"]}"
user = "{config_data["user"]}"
difficulty_value = {config_data["difficulty"]}
nonce_value = {config_data["nonce"]}
provider_sig = "{config_data["provider_signature"]}"
user_ts = "{config_data["user_timestamp"]}"

# Generated captcha response (hex format)
captcha_response_hex = "{config_data["captcha_response_hex"]}"

# Captcha response with 0x prefix (ready for API usage)
captcha_response_with_prefix = "{config_data["captcha_response_api"]}"

# Configuration dictionary for easy access
config_data = {{
    "base_url": base_url,
    "challenge": challenge,
    "dapp": dapp,
    "user": user,
    "difficulty": difficulty_value,
    "nonce": nonce_value,
    "provider_signature": provider_sig,
    "user_timestamp": user_ts,
    "captcha_response_hex": captcha_response_hex,
    "captcha_response_api": captcha_response_with_prefix
}}

def get_config():
    """Return the configuration data as a dictionary"""
    return config_data

def get_captcha_response():
    """Return the captcha response with 0x prefix for API usage"""
    return captcha_response_with_prefix

def get_raw_captcha_response():
    """Return the raw hex captcha response without prefix"""
    return captcha_response_hex

if __name__ == "__main__":
    print("=== PROSOPO CAPTCHA CONFIGURATION ===")
    print(f"Base URL: {{base_url}}")
    print(f"Challenge: {{challenge}}")
    print(f"DAPP: {{dapp}}")
    print(f"User: {{user}}")
    print(f"Difficulty: {{difficulty_value}}")
    print(f"Nonce: {{nonce_value}}")
    print(f"Provider Signature: {{provider_sig}}")
    print(f"User Timestamp: {{user_ts}}")
    print(f"\\nGenerated Captcha Response (API ready): {{captcha_response_with_prefix}}")
    print(f"\\nRaw Hex Response: {{captcha_response_hex}}")
'''
        
        try:
            with open("captcha_data.py", 'w') as f:
                f.write(content)
            RaduLogger.info("Updated captcha_data.py with new configuration")
        except Exception as e:
            RaduLogger.failed(f"Failed to update captcha_data.py: {str(e)}")

    def __solveProsopo__(self):
        headers = {
            'accept': '*/*',
            'accept-language': 'es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'content-type': 'application/json',
            'origin': str(self.host),
            'priority': 'u=1, i',
            'prosopo-site-key': str(self.site_key),
            'prosopo-user': str(self.signer.__getPublicKey__()),
            'referer': f"{self.host}/",
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        }
        
        payload = {
            "token": Token().__genToken__(),
            "dapp": self.site_key,
            "user": self.signer.__getPublicKey__(),
        }

        response = self.session.post(
            "https://pronode4.prosopo.io/v1/prosopo/provider/client/captcha/frictionless",
            headers=headers,
            json=payload
        )

        session_id = response.json()["sessionId"]

        RaduLogger.info(f"Solving... ({session_id})")

        payload = {
            "user": self.signer.__getPublicKey__(),
            "dapp": self.site_key,
            "sessionId": session_id,
        }

        response = self.session.post(
            "https://pronode4.prosopo.io/v1/prosopo/provider/client/captcha/pow",
            headers=headers,
            json=payload
        )
        print(response.json())
        provider_challenge = response.json()["signature"]["provider"]["challenge"]
        timestamp = response.json()["timestamp"]
        difficulty = response.json()["difficulty"]
        challenge = response.json()["challenge"]

        solved = self.signer.__signMessage__(timestamp)
        token = binascii.hexlify(solved).decode()
        signed = self.signer.__getPublicKey__()

        payload = {
            "challenge": challenge,
            "difficulty": difficulty,
            "signature": {
                "user": {
                    "timestamp": "0x" + token,
                },
                "provider": {
                    "challenge": provider_challenge
                },
            },
            "user": str(signed),
            "dapp": self.site_key,
            "nonce": Nonce().__generate__(challenge, difficulty),
            "verifiedTimeout": 120000
        }

        response = self.session.post(
            "https://pronode4.prosopo.io/v1/prosopo/provider/client/pow/solution",
            headers=headers,
            json=payload
        )
        
        verified = response.json()["verified"]

        if verified:
            RaduLogger.success(f"Successfully solved -> {token[:60]}************ -> {response.json()}")

            
            # Now submit to twickets.live with the captcha response
            self.__submitToTwickets__(challenge, difficulty, payload["nonce"], provider_challenge, "0x" + token)
        else:
            RaduLogger.failed(f"Failed to solve -> {token[:60]}************")

    def __generateCaptchaResponse__(self, base_url, challenge_str, dapp_address, user_address, difficulty, nonce, provider_challenge, user_timestamp):
        """Generate captcha response in the required byte format"""
        # Fixed components
        header = bytes.fromhex("0001")
        url = base_url.encode('utf-8')
        url_length = bytes.fromhex("6c")  # Fixed length byte
        dapp_tag = bytes.fromhex("c0")
        user_tag = bytes.fromhex("c0")
        challenge_meta = bytes.fromhex("01f101")
        nonce_separator = bytes.fromhex("01")
        provider_header = bytes.fromhex("010902")
        user_header = bytes.fromhex("00010902")
        terminator = bytes.fromhex("00")
        
        # Convert dynamic values to bytes
        dapp_bytes = dapp_address.encode('utf-8')
        user_bytes = user_address.encode('utf-8')
        challenge_bytes = challenge_str.encode('utf-8')
        nonce_bytes = nonce.to_bytes(4, 'little')  # Little-endian format
        difficulty_byte = str(difficulty).encode('utf-8')
        provider_challenge_bytes = provider_challenge.encode('utf-8')
        user_timestamp_bytes = user_timestamp.encode('utf-8')
        timestamp_part = challenge_str.split('___')[0].encode('utf-8')
        
        # Construct the response
        response = (
            header +
            url_length +
            url +
            dapp_tag +
            dapp_bytes +
            user_tag +
            user_bytes +
            challenge_meta +
            challenge_bytes +
            nonce_separator +
            nonce_bytes +
            difficulty_byte +
            timestamp_part +
            provider_header +
            provider_challenge_bytes +
            user_header +
            user_timestamp_bytes +
            terminator
        )
        
        return "0x" + response.hex()

    def __submitToTwickets__(self, challenge, difficulty, nonce, provider_challenge, user_timestamp):
        """Submit the final captcha response to twickets.live"""
        # Generate the captcha response
        captcha_response = self.__generateCaptchaResponse__(
            base_url="https://pronode4.prosopo.io",
            challenge_str=challenge,
            dapp_address=self.site_key,
            user_address=self.signer.__getPublicKey__(),
            difficulty=difficulty,
            nonce=nonce,
            provider_challenge=provider_challenge,
            user_timestamp=user_timestamp
        )
        
        # Headers for twickets.live request
        twickets_headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'no-cache',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://www.twickets.live',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://www.twickets.live/app/block/623045137306592,1',
            'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
            'x-tw-ac': '(none)',
            'x-tw-as': '(none)',
            'x-tw-ch': 'web',
            'x-tw-id': '619e0bde-5a81-4c89-9f58-a7e1b5255347',
            'x-tw-la': 'en-us',
            'x-tw-lts': 'direct|(not set)|(not set)|(not set)|(not set)',
            'x-tw-sr': '1280x720',
            'x-tw-ua': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
        }
        
        # Payload for twickets.live
        twickets_payload = {
            "captchaResponse": captcha_response,
            "claims": {
                "bi": "623045137306592"
            }
        }
        
        RaduLogger.info(f"Submitting to twickets.live with captcha response: {captcha_response[:100]}...")
        
        try:
            twickets_response = self.session.post(
                "https://www.twickets.live/services/bookings/captcha/sessionToken?api_key=83d6ec0c-54bb-4da3-b2a1-f3cb47b984f1",
                headers=twickets_headers,
                json=twickets_payload
            )
            
            if twickets_response.status_code == 200:
                RaduLogger.success(f"Twickets submission successful -> {twickets_response.json()}")
            else:
                RaduLogger.failed(f"Twickets submission failed -> Status: {twickets_response.status_code}, Response: {twickets_response.text}")
                
        except Exception as e:
            RaduLogger.failed(f"Error submitting to twickets -> {str(e)}")

if __name__ == "__main__":
    Solver(
        'https://www.twickets.live',
        '5EZVvsHMrKCFKp5NYNoTyDjTjetoVo1Z4UNNbTwJf1GfN6Xm',
        'PROXY HERE'
    ).__solveProsopo__()