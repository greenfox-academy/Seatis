# - Create a function called `factorio`
#   that returns it's input's factorial
def factorio(num):
    i = num - 1
    while i > 0:
        num *= i
        i -= 1
    print(num)
factorio(5)