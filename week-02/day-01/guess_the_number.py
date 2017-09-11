# Write a program that stores a number, and the user has to figure it out.
# The user can input guesses, after each guess the program would tell one
# of the following:
#
# The stored number is higher
# The stried number is lower
# You found the number: 8
guessnum = 17
usernum = 0
while usernum != guessnum:
    usernum = int(input("Guess the number: "))
    if usernum > guessnum:
        print ("The The stried number is lower")
    elif usernum < guessnum:
        print ("The stored number is higher")
    else:
        print("You found the number: " + str(guessnum))
