# Things are a little bit messed up
# Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
# Assemble the fragments into the out variable

out = "";
notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11]

hashmap = {
    7: "run around and desert you",
    50: "tell a lie and hurt you",
    49: "make you cry,",
    2: "let you down",
    12: "give you up,",
    1: "Never gonna",
    11: "\n",
    3: "say goodbye"
}
for code in notSoCrypticMessage:
    if code == 7:
        out += "run around and desert you "
    elif code == 50:
        out += "tell a lie and hurt you "
    elif code == 49:
        out += "make you cry, "
    elif code == 2:
        out += "let you down "
    elif code == 12:
        out += "give you up, "
    elif code == 1:
        out += "Never gonna "
    elif code == 11:
        out += "\n"
    else:
        out += "say goodbye "

print(out)