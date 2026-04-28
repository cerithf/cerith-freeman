import json
import pandas as pd

with open('src/data/knitting_projects.csv') as file:
    data = pd.read_csv(file)
    
a = data.to_dict(orient='records')

with open('src/data/knitting_projects.json', 'w') as file:
    json.dump(a, file, indent=2)