# - Create a variable named `am` and assign the value `kuty` to it
# - Write a function called `appendA` that gets a string as an input
#   and appends an 'a' character to its end
# - Print the result of `appendA(am)`
am = "kuty"
def appendA(string):
    str_list = (list(string))
    str_list.append("a") 
    print(''.join(str_list))
appendA(am)
