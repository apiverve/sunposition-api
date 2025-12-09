"""
Sun Position API - Basic Usage Example

This example demonstrates the basic usage of the Sun Position API.
API Documentation: https://docs.apiverve.com/ref/sunposition
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/sunposition'

def call_sunposition_api():
    """
    Make a GET request to the Sun Position API
    """
    try:
        # Query parameters
        params &#x3D; {&#x27;lat&#x27;: 37.7749, &#x27;lon&#x27;: -122.4194, &#x27;date&#x27;: &#x27;12-02-2025&#x27;}

        headers = {
            'x-api-key': API_KEY
        }

        response = requests.get(API_URL, headers=headers, params=params)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Sun Position API...\n')

    result = call_sunposition_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
