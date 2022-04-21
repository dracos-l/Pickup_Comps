from bs4 import BeautifulSoup
import pandas as pd

with open("..//HTML_Data//Player_General_Usage.html") as fp:
    soup = BeautifulSoup(fp)

headers_soup = soup.findAll("th", {"data-dir" : -1})

headers_list = []

for i in headers_soup:
    item = i.get_text().replace("\n",'')
    headers_list.append(item.replace("\xa0",'').strip())

df = pd.read_csv("..//CSV_Data//General_Scoring.csv")

for i in headers_list[4:]:
    df[i] = 0

df.to_csv("..//CSV_Data//Big_Boy.csv", index=False)