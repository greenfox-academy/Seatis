# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def x_to_y(string):
    if string == '':
        return ''
    if string[0] == 'x':
        return '' + x_to_y(string[1:])
    return string[0] + x_to_y(string[1:])

print(x_to_y('adfxlfxl'))