import os
import requests

from schemas import RentabiliteInput, RentabiliteOutput, TaxSimulatorInput, TaxSimulatorOutput

HUBSPOT_ACCESS_TOKEN = os.getenv("HUBSPOT_ACCESS_TOKEN")
BASE_URL = "https://api.hubapi.com"
CONTACTS_URL = f"{BASE_URL}/crm/v3/objects/contacts"
SEARCH_URL = f"{BASE_URL}/crm/v3/objects/contacts/search"

def get_headers() -> dict:
    if not HUBSPOT_ACCESS_TOKEN:
        raise ValueError("缺少 HUBSPOT_ACCESS_TOKEN 环境变量。")
    return {
        "Authorization": f"Bearer {HUBSPOT_ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }

def build_contact_properties(data, result=None, source: str = ""):
    ...

def create_contact(properties: dict):
    ...
    
def send_to_hubspot():
    ...
