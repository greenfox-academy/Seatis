students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

# create a function that takes a list of students and prints: 
#  - how many candies they have on average

def more_candies():
    name_list = []
    for lines in students:
        name_list.append(lines['name'])     #create a list of the names
        if lines['candies'] > 4:
            print(lines['name'] + " has more candies than 4. He/She has exactly " + str(lines['candies']) + " candies")


def average():
    total = 0
    for lines in students:
        total += lines['candies']
    print("The average of the candies is",total/4)

more_candies()
average()