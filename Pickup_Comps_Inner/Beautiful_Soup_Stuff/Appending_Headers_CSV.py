from bs4 import BeautifulSoup
import pandas as pd

with open("..//HTML_Data//Player_Tracking_Pull_Up.html") as fp:
    soup = BeautifulSoup(fp)

headers_soup = soup.findAll("dt")

headers_list = []

for i in headers_soup:
    item = i.get_text().replace("\n",'')
    headers_list.append(item.replace("\xa0",'').strip())

#print(headers_list[4:])

df = pd.read_csv("..//CSV_Data//Big_Boy.csv")

for i in headers_list[4:]:
    df[i] = 0

df.to_csv("..//CSV_Data//Testing_CSV.csv", index=False)
