from bs4 import BeautifulSoup

with open("..//HTML_Data//Players_General_Scoring.html") as fp:
    soup = BeautifulSoup(fp)

player_data = []

for i in range(0,339):
    player_data.append(soup.findAll("tr", {"index" : i})[0])

headers_soup = soup.findAll("th", {"data-dir" : -1})

headers_list = ["Player","TEAM"]

for i in headers_soup:
    item = i.get_text()
    headers_list.append(item.replace("\n",'').strip())

player_data_list = []

for i in player_data:
    data_player = i.findAll("td")
    isolated_data = []
    for c in data_player:
        append_item = c.get_text().replace('\n','')
        if append_item != '':
            isolated_data.append(append_item)
    player_data_list.append(isolated_data)

print(player_data_list[0:3])
print(headers_list)