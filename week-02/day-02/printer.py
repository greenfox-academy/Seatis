# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)
def printer(*args):
    oneline = ""
    for i in args:
        oneline += str(i)
        oneline += " "
        print(i)
    print(oneline)
printer("Hello", "Attila", 7)