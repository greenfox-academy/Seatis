# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was
lines = int(input("Number of lines: "))
stars = ""
for i in range(0, lines):
    for k in range(0, i+1):
        stars += "*"
    print (stars + "\n")
    stars = ""