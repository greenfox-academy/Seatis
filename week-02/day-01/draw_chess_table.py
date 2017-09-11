# Crate a program that draws a chess table like this
#
# % % % % 
#  % % % %
# % % % %
#  % % % %
# % % % %
#  % % % %
# % % % % 
#  % % % %
#
puffer = ""
for i in range(0, 8):
    for j in range(0, 8):
        if i % 2 == 0:
            if j % 2 == 0:
                puffer += "%"
            else:
                puffer += " "
        else:
            if j % 2 == 0:
                puffer += " "
            else:
                puffer += "%"
    print (puffer + "\n")
    puffer = ""