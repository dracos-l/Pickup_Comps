from bs4 import BeautifulSoup

with open("..//HTML_Data//Players_General_Scoring.html") as fp:
    soup = BeautifulSoup(fp)

player_data = []

for i in range(0,339):
    player_data.append(soup.findAll("tr", {"index" : i})[0])

headers = soup.findAll("th", {"data-dir" : -1})

for i in headers:
    print(i.string)
