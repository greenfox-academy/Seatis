# - Write a function called `sum` that sum all the numbers
#   until the given parameter
def sum(*args):
    total = 0
    for i in args:
        total += i
    print (total)
sum(1, 2, 3, 4, 5)