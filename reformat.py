import csv


filename  = "A&S Groups on Ursa - Sheet1.csv"

with open(filename, 'rb') as f:
    reader = csv.reader(f)
    try:
        for row in reader:
            print row
            