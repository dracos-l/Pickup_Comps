import pandas as pd

# I wanted to have a separate file to put the Testing stuff
# into the real CSV so I could read it through and make sure
# everything was in place before updating the Big Boy CSV
df = pd.read_csv("..//CSV_Data//Testing_CSV.csv")

df.to_csv("..//CSV_Data//Big_Boy.csv", index=False)