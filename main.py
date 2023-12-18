from flask import Flask
import requests
import os
from dotenv import load_dotenv

load_dotenv()

USERNAME = os.getenv('USERNAME')
PASSWORD = os.getenv('PASSWORD')

AUTHURL = 'https://draftmyschedule.uwo.ca/login.cfm'


# Setup Auth
payload = f"txtUsername={USERNAME}&txtPassword={PASSWORD}&command=authenticate"
s = requests.Session()
s.post(url=AUTHURL)

