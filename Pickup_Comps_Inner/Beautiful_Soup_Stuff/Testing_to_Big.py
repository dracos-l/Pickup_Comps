import pandas as pd

df = pd.read_csv("..//CSV_Data//Testing_CSV.csv")

df.to_csv("..//CSV_Data//Big_Boy.csv", index=False)