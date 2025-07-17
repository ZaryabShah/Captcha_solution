def generate_captcha_response(
    base_url,
    challenge_str,
    dapp_address,
    user_address,
    difficulty,
    nonce,
    provider_challenge,
    user_timestamp
):
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
    
    return response.hex()

# ===== CONFIGURATION - MODIFY THESE VALUES =====
base_url = "https://pronode4.prosopo.io"  # CHANGED FROM pronode4 to pronode6
challenge = "1752673332173___5GhQCYozgiHSBYLzzBa7DuvjVhAzUDXLRiVz58zrhLJfKtmN___5EZVvsHMrKCFKp5NYNoTyDjTjetoVo1Z4UNNbTwJf1GfN6Xm___472858"
dapp = "5EZVvsHMrKCFKp5NYNoTyDjTjetoVo1Z4UNNbTwJf1GfN6Xm"
user = "5GhQCYozgiHSBYLzzBa7DuvjVhAzUDXLRiVz58zrhLJfKtmN"
difficulty_value = 4
nonce_value = 356629
provider_sig = "0x5e7fee0e1fbd93fdba0ade2082f261e06fdb7217009ca5bc2f81af2e9b5e2f7421f7651cf69d41c9cb89b6505d3c352a39425744cbd4c2e73f71ae4e4746a785"
user_ts = "0x7e552aa9e097031f3c2f2df02314d5f77055a23496cc59234acc76a3e56e9b0684d06bb8c301e843ff79a4209c5d9b140fddd99e1abd5cc50dfeb1f303517288"
# ===== END OF CONFIGURATION =====

# Generate the response
captcha_response = generate_captcha_response(
    base_url=base_url,
    challenge_str=challenge,
    dapp_address=dapp,
    user_address=user,
    difficulty=difficulty_value,
    nonce=nonce_value,
    provider_challenge=provider_sig,
    user_timestamp=user_ts
)

# Output the result
print("Generated Captcha Response:")
print(captcha_response)