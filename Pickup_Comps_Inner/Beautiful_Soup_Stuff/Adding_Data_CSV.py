from bs4 import BeautifulSoup
import pandas as pd

with open("..//HTML_Data//Player_Tracking_Pull_Up.html") as fp:
    soup = BeautifulSoup(fp)

player_data = []

for i in range(0,351):
    player_data.append(soup.findAll("tr", {"index" : i})[0])

player_data_list = {}

for i in player_data:
    data_player = i.findAll("td")
    isolated_data = []
    for c in data_player:
        append_item = c.get_text().replace('\n','').replace('            ','').replace('          ','').replace('-','0.0')
        if append_item != '':
            isolated_data.append(append_item.replace('%',''))
    player_data_list[isolated_data[0]] = isolated_data[6:24]

#print(player_data_list)

df = pd.read_csv("..//CSV_Data//Testing_CSV.csv")

for name in player_data_list.keys():
    for value in df["Player"]:
        if name == value:
            length = len(player_data_list[name])
            for i in range(1,length+1):
                item_replace = player_data_list[name][-i]
                row = df[df['Player'] == name].index[0]
                df.loc[row, df.columns[-i]] = item_replace
                

df.to_csv("..//CSV_Data//Testing_CSV.csv", index=False)
