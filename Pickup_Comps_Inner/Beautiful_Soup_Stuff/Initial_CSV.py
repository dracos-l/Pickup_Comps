from bs4 import BeautifulSoup

# We used this file as the "initial" csv that we would build the rest off of
with open("..//HTML_Data//Player_General_Scoring.html") as fp:
    soup = BeautifulSoup(fp)

player_data = []

# In the HTML the players are all contained in <tr> tags, so here I'm appending all of the data entries
for i in range(0,351):
    player_data.append(soup.findAll("tr", {"index" : i})[0])

# All of the headers are within <th> tags with the attribute "data-dir" = -1
headers_soup = soup.findAll("th", {"data-dir" : -1})

#Just putting these at the start because their html tags were strange
headers_list = ["Player","Team","Age"]

# Putting the beautiful soup into the list and replacing some things that were annoying
for i in headers_soup:
    item = i.get_text().replace("\n",'')
    headers_list.append(item.replace("\xa0",'').strip())

player_data_list = []

# Putting all of the data soup into a list. The data itself is in <td> tags,
# so I'm finding those and adding them into the player data list
for i in player_data:
    data_player = i.findAll("td")
    isolated_data = []
    for c in data_player:
        append_item = c.get_text().replace('\n','')
        if append_item != '':
            isolated_data.append(append_item)
    player_data_list.append(isolated_data)

#At the start of the player data list I put in all the headers
player_data_list.insert(0,headers_list)

# Then joining all the values with a comma
new_player_data_list = [",".join(i) for i in player_data_list]

# Printing out all the lists with a space within them so each person is its
# own line, and the headers are the first one. In terminal I piped this into
# "General_Scoring.csv" in the CSV_Data Folder
print("\n".join(new_player_data_list))