from bs4 import BeautifulSoup
import pandas as pd

with open("..//HTML_Data//Player_Bio.html", 'rb') as fp:
    soup = BeautifulSoup(fp)

player_data = []

for i in range(0,351):
    player_data.append(soup.findAll("tr", {"index" : i})[0])

player_data_list = {}

# This is pretty much the same, but there are a couple more 'replace' functions
# because of some weird stuff with formatting with some of the HTML pages.
# Also, I would change the bounds in the last line (isolated_data[n:c]) depending
# on how many datapoints were on a given page.
for i in player_data:
    data_player = i.findAll("td")
    isolated_data = []
    for c in data_player:
        append_item = c.get_text().replace('\n','').replace('            ','').replace('          ','').replace('-','0.0')
        if append_item != '':
            isolated_data.append(append_item.replace('%',''))
    player_data_list[isolated_data[0]] = isolated_data[2:]

# Checking that the dictionary matches the actual page before adding it
#print(player_data_list)

# This whole chunck would take the Testing CSV as it was and iterate
# through it, making sure that the name in the dictionary was present
# in the CSV. I did this to circumvent the issue that was coming up
# that some data pages had only a certain amount of players rather
# than all 351. Then it would go through and since I just added the headers
# and put 0s in all the spots, it would replace these 0s with actual values
# by iterating through the end of the CSV. This way I had to do one HTML page
# at a time, but it wasn't too bad, especially since I had to change the bounds
# for most of the pages due to their formatting.
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
