from bs4 import BeautifulSoup

with open("..//HTML_Data//Player_General_Scoring.html", 'rb') as fp:
    soup = BeautifulSoup(fp)

player_data = []

for i in range(0,351):
    player_data.append(soup.findAll("tr", {"index" : i})[0])

headers_soup = soup.findAll("th", {"data-dir" : -1})

headers_list = ["Player","Team","Age"]

for i in headers_soup:
    item = i.get_text().replace("\n",'')
    headers_list.append(item.replace("\xa0",'').strip())

player_data_list = []

for i in player_data:
    data_player = i.findAll("td")
    isolated_data = []
    for c in data_player:
        append_item = c.get_text().replace('\n','')
        if append_item != '':
            isolated_data.append(append_item)
    player_data_list.append(isolated_data)


player_data_list.insert(0,headers_list)

new_player_data_list = [",".join(i) for i in player_data_list]

print("\n".join(new_player_data_list))