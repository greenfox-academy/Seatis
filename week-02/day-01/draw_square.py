# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %   %
# %   %
# %   %
# %   %
# %%%%%
#
# The square should have as many lines as the number was
lines = int(input("Number of lines: "))
puffer = ""

for k in range(0, lines):
    for i in range(0, lines):
        if k == 0 or k == lines - 1:
            puffer += "%"
        else:
            if i == 0 or i == lines - 1:
                puffer += "%"
            else:
                puffer += " "
           
    print (puffer + "\n")
    puffer = ""