# Saturn is missing from the planetList
# Insert it into the correct position

planetList = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"]
planetList = planetList[:5] + ["Saturn"] + planetList[6:]
print(planetList)