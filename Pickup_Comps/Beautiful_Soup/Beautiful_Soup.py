from bs4 import BeautifulSoup

with open("Players_General_Scoring.html") as fp:
    soup = BeautifulSoup(fp)

soup = BeautifulSoup("<html>data</html>")

volume = soup.findAll("td", {"class": "first sorted"})[0].string

print(volume)