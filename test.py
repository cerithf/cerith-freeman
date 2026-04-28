#%%
import json

with open('json_data.json') as file:
    data = json.load(file)

#%%
new_entry = {
    'name': 'text',
    'description': 'Text-based descriptions',
    'data': []
}

entry1 = {
    'name': 'about_page_en',
    'text': '''Welcome to Wrth Sgwrs
                
    Wrth Sgwrs is a resource to help you practise speaking Welsh in a simple, accessible way. You can use the app to have short conversations with an AI in Welsh, giving you a chance to try out everyday language and build your confidence speaking Welsh.

    There are grammar resources available to help you check your understanding and make sure what you're learning is accurate. If you need to check a word or phrase quickly, there’s also a quick translate option. Please remember that AI responses and translations aren’t always perfect, and this app isn’t a replacement for real conversations — it’s here to support your learning by giving you another opportunity to practise.'''
}

entry2 = {
    'name': 'about_page_cy',
    'text': '''Croeso i Wrth Sgwrs
                
    Mae Wrth Sgwrs yn adnodd i dy helpu di ymarfer siarad Cymraeg mewn ffordd syml ac anffurfiol. Elli di ddefnyddio'r ap i gael sgyrsiau byr gyda AI yn Gymraeg er mwyn ymarfer defnyddio iaith bob dydd a chryfhau dy hyder wrth ddefnyddio'r Gymraeg.
                    
    Mae adnoddau gramadegol ar gael i ti wirio dy ddealltwriaeth a sicrhau cywirdeb yn beth rwyt ti'n ei ddysgu. Hefyd, mae cyfieithydd cyflym yma i ti gyfieithu gair neu frawddeg yn glou. Cofia nad yw atebion na chyfieithiadau AI yn berffaith bob tro, ac nid modd yr ap hon yw disodli sgyrsiau go iawn – mae hi yma i gefnogi dy ddysgu gan roi cyfle i ti i ymarfer.'''
}

new_entry['data'] = [entry1] + [entry2]
# %%
data.append(new_entry)

with open('json_data.json', 'w') as file:
    json.dump(data, file, indent=2)