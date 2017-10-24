# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was
# lines = int(input("Number of lines: "))
lines = 5
stars = ""
spaces = ""
j = 1
for i in range(0, lines):
    for k in range(0, j):
        stars += "*"     
    for k in range(0, lines - i):
        spaces += " "
    print (spaces + stars + "\n")
    stars = ""
    spaces = ""
    j += 2