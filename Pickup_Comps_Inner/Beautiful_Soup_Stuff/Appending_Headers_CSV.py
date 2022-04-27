from bs4 import BeautifulSoup
import pandas as pd

# I would replace the path here with each HTML page we needed, going one by one
with open("..//HTML_Data//Player_Tracking_Pull_Up.html") as fp:
    soup = BeautifulSoup(fp)

# Getting all of the headers from whichever file I am looking at
headers_soup = soup.findAll("dt")

headers_list = []

# Adding the headers and replacing unnecessary stuff
for i in headers_soup:
    item = i.get_text().replace("\n",'')
    headers_list.append(item.replace("\xa0",'').strip())

# I would use this line to look at the headers I was appending before actually adding them
#print(headers_list[4:])

# "Big_Boy" was the one that we would add everything to and is the CSV
# we are using for all of our data. Here I import it to add the headers
df = pd.read_csv("..//CSV_Data//Big_Boy.csv")

# Iterating through the headers list, only using the relevant tags, then
# filling it up with 0's
for i in headers_list[4:]:
    df[i] = 0

# Then exporting it to "Testing_CSV", which is a separate CSV that I'll use
# in "Adding_Data_CSV.py" I wanted to to a separate CSV to avoid error as 
# much as possible. Also as a note, after adding the headers to the big CSV, 
# I would add "_Cut" or that equivalent to distinguish them.
df.to_csv("..//CSV_Data//Testing_CSV.csv", index=False)
