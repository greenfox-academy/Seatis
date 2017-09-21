# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def x_to_y(string):
    if string == '':
        return ''
    if string[0] == 'x':
        return 'y' + x_to_y(string[1:])
    return string[0] + x_to_y(string[1:])

print(x_to_y('adfxlfxl'))


