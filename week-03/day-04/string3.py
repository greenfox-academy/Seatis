# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def x_to_y(string):
    if string == '':
        return ''
    if len(string) == 1:
        return string[0]
    else:
        return string[0] + '*' + x_to_y(string[1:])

print(x_to_y('adfxlfxl'))