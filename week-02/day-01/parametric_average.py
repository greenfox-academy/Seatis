# Write a program that asks for a number.
# It would ask this many times to enter an integer,
# if all the integers are entered, it should print the sum and average of these
# integers like:
#
# Sum: 22, Average: 4.4
numnum = int(input("Give me the amount of the numbers: "))
sum = 0
for i in range(0, numnum):
    sum += int(input("Number " + str(i+1) + " : "))
print ("Sum: " + str(sum) + ", Average: " + str(sum / (i - 1)))