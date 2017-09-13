# Create a function that prints the ingredient list of dictionaries to the console in the following format:
#
# +--------------------+---------------+----------+
# | Ingredient         | Needs cooling | In stock |
# +--------------------+---------------+----------+
# | vodka              | Yes           | 1        |
# | coffee_liqueur     | Yes           | -        |
# | fresh_cream        | Yes           | 1        |
# | captain_morgan_rum | Yes           | 2        |
# | mint_leaves        | No            | -        |
# +--------------------+---------------+----------+
#
# The frist columns should be automatically as wide as the longest key

ingredients = [
	{ 'vodka': 1, 'needs_cooling': True },
	{ 'coffee': 0, 'needs_cooling': True },
	{ 'fresh': 1, 'needs_cooling': True },
	{ 'capta': 2, 'needs_cooling': True },
	{ 'mint': 0, 'needs_cooling': False },
	{ 'sugars': 100, 'needs_cooling': False },
	{ 'lime': 10, 'needs_cooling': True },
	{ 'soda': 100, 'needs_cooling': True }
]

def printer (items):
    first_keys = []
    second_keys = []
    for i in range(len(items)):
        first_keys += [(list(items[i].keys())[0])]
        second_keys += [(list(items[i].keys())[1])]
    if len(max(first_keys, key=len)) <= len("Ingredient"):
        len_column_1 = len("Ingredient") + 1
    else:
        len_column_1 = len(max(first_keys, key=len)) + 1
    print(len_column_1)
    len_column_2 = 15
    len_column_3 = 10
    border_line = "+"
    header = "/"
    for i in range(len_column_1 + 1):
        border_line += "-"
    border_line += "+"
    for i in range(len_column_2):
        border_line += "-"
    border_line += "+"
    for i in range(len_column_3):
        border_line += "-"
    border_line += "+"
    header += " Ingredient"
    for i in range(len_column_1-len("Ingredient")):
        header += " "
    header += "/ Needs cooling / In stock /"
    print(border_line)
    print(header)
    print(border_line)
    row = ""
    i = 0
    for lines in items:
        row = "/ "
        row += first_keys[i]
        for j in range(len_column_1-len(first_keys[i])):
            row += " "
        row += "/ "
        if lines[second_keys[i]]:
            row += "Yes"
            for j in range(len_column_2-len("Yes")-1):
                row += " "
        else:
            row += "No"
            for j in range(len_column_2-len("No")-1):
                row += " "
        row += "/ "
        if lines[first_keys[i]] == 0:
            row += "-"
        else:
            row += str(lines[first_keys[i]])
        for j in range(len_column_3-len(str(lines[first_keys[i]]))-1):
            row += " "
        row += "/"
        i += 1
        print(row)
    print(border_line)
printer(ingredients)